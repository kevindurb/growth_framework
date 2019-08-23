import { html } from '/html.js';
import { Home } from '/pages/Home.js';
import { Other } from '/pages/Other.js';

export const routes = [
  ['', () => Home],
  ['other', () => Other],
];
