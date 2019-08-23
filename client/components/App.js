import { html } from '/html.js';
import { observer, inject } from '/mobx.js';

import { Dashboard } from '/components/Dashboard.js';
import { compose } from '/utils/component.js';

const enhance = compose(
  inject('routerService'),
  observer,
);

export const App = enhance(({ routerService }) => {
  const Component = routerService.currentComponent;

  return html`
    <${Component} />
  `;
});
