import R, { __ } from 'ramda';
import { PropTypes } from 'react';
import { classesFor } from './style-helper';
import { cx, createWithStyleHoc, isPresent, mapIfObj } from './utils';
import { addMQSupport } from './media-queries';

export const border = {
  radii: [0, 1, 2, 3, 4, 100, 'pill'],
  styles: ['none', 'dotted', 'dashed', 'solid'],
  widths: [0, 1, 2, 3, 4, 5],
};
const normalizeRadii = mapIfObj(
  R.when(R.contains(__, [100, 'pill']),
    R.concat('-')));


const borderType = colors => addMQSupport(PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(colors),
]));

const borderPropTypes = colors => ({
  ba: borderType(colors),
  bl: borderType(colors),
  br: borderType(colors),
  bt: borderType(colors),
  bb: borderType(colors),
  bn: addMQSupport(PropTypes.bool),
  bw: addMQSupport(PropTypes.oneOf(border.widths)),
  radius: PropTypes.oneOf(border.radii),
  rounded: addMQSupport(PropTypes.oneOf(['bottom', 'top', 'right', 'left'])),
  className: PropTypes.any,
});

const hasMultipleDeclarations = R.compose(R.gt(__, 1), R.length);
const headOr = def => R.compose(R.defaultTo(def), R.head);
const warnAboutMultipleDeclarations = R.tap(() => {
  console.warn(`Warning: multiple border types declared.
    You can only declare one border type (ba, bl, br, bt, bb, bn) at a time.`);
});

const borderDeclaration = R.compose(
  headOr([]),
  R.ifElse(hasMultipleDeclarations,
    warnAboutMultipleDeclarations,
    R.identity,
  ),
  R.toPairs,
  R.filter(isPresent),
);

function borderTransform({
  className,
  ba, bl, br, bt, bb, bn,
  bw,
  radius,
  rounded,
  ...ownerProps
}) {
  const [type, value] = borderDeclaration({ ba, bl, br, bt, bb, bn });
  const borderColor = R.is(Boolean, value) ? undefined : value;

  const borderStyles = classesFor({
    [type]: '',
    br: normalizeRadii(radius),
    'br--': rounded,
    'b--': borderColor,
    bw,
  });

  return R.merge(
    { className: cx([borderStyles, className]) },
    ownerProps,
  );
}

export const withBorder = colors => component => createWithStyleHoc({
  name: 'withBorder',
  transformation: borderTransform,
  propTypes: borderPropTypes(colors),
  component,
});
