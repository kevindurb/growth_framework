import { computed, decorate, action, observable } from '/mobx.js';
import { routes } from '/routes.js';

const getWindowHash = () => window.location.hash.substring(1);

export class RouterService {
  hash = observable.box(getWindowHash());

  constructor() {
    window.addEventListener('hashchange', this.updateHash);
  }

  updateHash() {
    this.hash.set(getWindowHash());
  }

  routeMatches(destination) {
    return ([routeHash]) => routeHash === destination;
  }

  get currentComponent() {
    const hash = this.hash.get();
    const matchingRoutes = routes.filter(this.routeMatches(hash));

    if (matchingRoutes.length === 0) {
      return null;
    }

    const [route, resolver] = matchingRoutes[0];

    const result = resolver(hash, route);

    return result;
  }
}

decorate(RouterService, {
  currentComponent: computed,
  updateHash: action.bound,
});
