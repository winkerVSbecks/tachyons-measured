import R, { __ } from 'ramda';
import PropTypes from 'prop-types';
import { classesFor } from './style-helper';
import { cx, createWithStyleHoc, isPresent, normalizeClassNames } from './utils';
import { addMQSupport } from './media-queries';

/**
 * Scale
 */
export const border = {
  radii: [0, 1, 2, 3, 4, 100, 'pill'],
  styles: ['none', 'dotted', 'dashed', 'solid'],
  widths: [0, 1, 2, 3, 4, 5],
};

/**
 * Normalize classnames to add a `-`
 * prefix when needed
 */
const normalizeRadii = normalizeClassNames([100, 'pill']);

/**
 * Parse border declaration to get
 * border type and color values
 */
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

/**
 * withBorder HOC
 */
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

  const base = {
    br: normalizeRadii(radius),
    'br--': rounded,
    'b--': borderColor,
    bw,
  };

  const classList = type ? R.merge(base, { [type]: '' }) : base;

  const borderStyles = classesFor(classList);

  return R.merge(
    { className: cx([borderStyles, className]) },
    ownerProps,
  );
}

const borderType = colors => PropTypes.oneOfType([
  PropTypes.oneOf(colors),
  PropTypes.bool,
]);

const borderPropTypes = colors => ({
  ba: borderType(colors),
  bl: borderType(colors),
  br: borderType(colors),
  bt: borderType(colors),
  bb: borderType(colors),
  bn: PropTypes.bool,
  bw: addMQSupport(PropTypes.oneOf(border.widths)),
  radius: addMQSupport(PropTypes.oneOf(border.radii)),
  rounded: addMQSupport(PropTypes.oneOf(['bottom', 'top', 'right', 'left'])),
  className: PropTypes.any,
});

export const withBorder = colors => component => createWithStyleHoc({
  name: 'withBorder',
  transformation: borderTransform,
  propTypes: borderPropTypes(colors),
  component,
});
