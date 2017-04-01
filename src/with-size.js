import R from 'ramda';
import { PropTypes } from 'react';
import { classesFor } from './style-helper';
import { widths, heights } from './scales';
import { cx, createWithStyleHoc } from './utils';

const sizePropTypes = {
  w: PropTypes.oneOf(widths),
  h: PropTypes.oneOf(heights),
  className: PropTypes.any,
};

function sizeTransform({ className, w, h, ...ownerProps }) {
  const sizes = classesFor({ w, h });

  return R.merge(
    { className: cx([sizes, className]) },
    ownerProps,
  );
}

export const withSize = component => createWithStyleHoc({
  name: 'withSize',
  transformation: sizeTransform,
  propTypes: sizePropTypes,
  component,
});
