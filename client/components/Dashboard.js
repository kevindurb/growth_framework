import { html } from '/html.js';
import { Flex } from '/elements/Flex.js';

export const Dashboard = () => html`
  <${Flex} column flex="1">
    <${Flex} flex="1">
      Graph!
    </${Flex}>
    <${Flex} flex="1">
      Details!
    </${Flex}>
  </${Flex}>
`;
