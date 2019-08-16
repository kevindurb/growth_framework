export const build = (classes) => (
  Object.keys(classes).reduce((classNames, name) => {
    if (classes[name]) {
      return `${classNames} ${name}`.trim();
    }
    return classNames;
  }, '')
);
