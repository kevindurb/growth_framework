export const compose = (...hocs) => (component) => (
  hocs.reverse().reduce((applied, hoc) => hoc(applied), component)
);
