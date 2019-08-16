const htm = window.htm;
const preact = window.preact;

export const html = htm.bind(preact.h);
export const render = preact.render;
