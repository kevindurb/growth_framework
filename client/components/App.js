import { html } from '/html.js';
import { observer, inject } from '/mobx.js';

import { Dashboard } from '/components/Dashboard.js';
import { compose } from '/utils/component.js';

const enhance = compose(
  inject('customersService'),
  observer,
);

export const App = enhance(({ customersService }) => {
  return html`
    <${Dashboard}
      customer=${customersService.getCustomer(5)}
    />
  `;
});
