import R from 'ramda';
import PropTypes from 'prop-types';
import { classesFor } from './style-helper';
import { cx, createWithStyleHoc } from './utils';

const colorPropTypes = colors => ({
  color: PropTypes.oneOf(colors),
  className: PropTypes.any,
});

function colorTransform({ className, color, ...ownerProps }) {
  return R.merge(
    { className: cx([classesFor({ '': color }), className]) },
    ownerProps,
  );
}

export const withColor = colors => component => createWithStyleHoc({
  name: 'withColor',
  transformation: colorTransform,
  propTypes: colorPropTypes(colors),
  component,
});
