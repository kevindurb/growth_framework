import { html } from '/html.js';
import { build } from '/utils/classNames.js';

export const Flex = ({
  children,
  ...props
}) => {
  const flexValue = parseInt(props.flex, 10);

  return html`
    <div
      class=${build({
        flex: true,
        'flex--column': props.column,
        'flex--row': props.row,
        'flex--1': flexValue === 1,
        'flex--2': flexValue === 2,
        'flex--3': flexValue === 3,
        'flex--4': flexValue === 4,
      })}
    >
      ${children}
    </div>
  `;
};
