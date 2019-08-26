import { html, render } from '/html.js';
import { Provider, spy } from '/mobx.js';
import { buildContainer } from '/container.js';
import { App } from '/components/App.js';

render(
  html`
    <${Provider}
      ...${buildContainer()}
    >
      <${App} />
    </${Provider}>
  `,
  document.getElementById('root')
);

spy(console.log.bind(console));
