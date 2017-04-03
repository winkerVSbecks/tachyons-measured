import R from 'ramda';
import { PropTypes } from 'react';
import { classesFor, composeClasses } from './style-helper';
import { cx, createWithStyleHoc } from './utils';
import { border } from './scales';
import { addMQSupport } from './media-queries';

const borderType = addMQSupport(PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
]));

const borderPropTypes = colors => ({
  ba: borderType,
  bl: borderType,
  br: borderType,
  bt: borderType,
  bb: borderType,
  bn: addMQSupport(PropTypes.bool),
  bw: addMQSupport(PropTypes.oneOf(border.widths)),
  r: addMQSupport(PropTypes.oneOf(border.radii)),
  rounded: addMQSupport(PropTypes.oneOf(['bottom', 'top', 'right', 'left'])),
  borderColor: PropTypes.oneOf(colors),
  className: PropTypes.any,
});

function borderTransform({
  className,
  ba, bl, br, bt, bb, bn,
  bw,
  r,
  rounded,
  borderColor,
  ...ownerProps
}) {
  const borderStyles = [
    composeClasses({ ba, bl, br, bt, bb, bn }),
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
