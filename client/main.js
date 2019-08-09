import { html, render } from '/html.js';

render(
  html`
    <div>hello world</div>
  `,
  document.getElementById('root')
);
