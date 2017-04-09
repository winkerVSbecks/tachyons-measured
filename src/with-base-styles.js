import R from 'ramda';
import PropTypes from 'prop-types';
import { cx, createWithStyleHoc } from './utils';

const sizePropTypes = {
  className: PropTypes.any,
};

const styleTransform = baseStyles => ({ className, ...ownerProps }) =>
  R.merge(
    { className: cx([baseStyles, className]) },
    ownerProps,
  );

export const withBaseStyles = styles => component => createWithStyleHoc({
  name: 'withBaseStyles',
  transformation: styleTransform(styles),
  propTypes: sizePropTypes,
  component,
});
