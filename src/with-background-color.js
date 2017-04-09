import R from 'ramda';
import PropTypes from 'prop-types';
import { classesFor } from './style-helper';
import { cx, createWithStyleHoc } from './utils';

const backgroundColorPropTypes = colors => ({
  bg: PropTypes.oneOf(colors),
  className: PropTypes.any,
});

function backgroundColorTransform({ className, bg, ...ownerProps }) {
  return R.merge(
    { className: cx([classesFor({ 'bg-': bg }), className]) },
    ownerProps,
  );
}

export const withBackgroundColor = colors => component => createWithStyleHoc({
  name: 'withBackgroundColor',
  transformation: backgroundColorTransform,
  propTypes: backgroundColorPropTypes(colors),
  component,
});
