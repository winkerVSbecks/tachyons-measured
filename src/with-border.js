import R from 'ramda';
import { PropTypes } from 'react';
import { classesFor, composeClasses } from './style-helper';
import { cx, createWithStyleHoc } from './utils';
import { border } from './scales';

const borderType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
]);

const borderPropTypes = colors => ({
  ba: borderType,
  bl: borderType,
  br: borderType,
  bt: borderType,
  bb: borderType,
  bw: PropTypes.oneOf(border.widths),
  r: PropTypes.oneOf(border.radii),
  rounded: PropTypes.oneOf(['bottom', 'top', 'right', 'left']),
  borderColor: PropTypes.oneOf(colors),
  className: PropTypes.any,
});

function borderTransform({
  className,
  ba, bl, br, bt, bb,
  bw,
  r,
  rounded,
  borderColor,
  ...ownerProps
}) {
  const borderStyles = [
    composeClasses({ ba, bl, br, bt, bb }),
    classesFor({ br: r, 'br--': rounded, 'b--': borderColor, bw }),
  ];

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
