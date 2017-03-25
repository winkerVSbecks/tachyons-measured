import R from 'ramda';
import { PropTypes } from 'react';
import { classesFor, composeClasses } from './style-helper';
import { cx, createWithStyleHoc } from './utils';
import { border } from './scales';

const borderPropTypes = colors => ({
  ba: PropTypes.bool,
  bl: PropTypes.bool,
  br: PropTypes.bool,
  bt: PropTypes.bool,
  bb: PropTypes.bool,
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

export const withBorder = component => createWithStyleHoc({
  name: 'withBorder',
  transformation: borderTransform,
  propTypes: borderPropTypes,
  component,
});
