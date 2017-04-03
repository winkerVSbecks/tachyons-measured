import R from 'ramda';
import { PropTypes } from 'react';
import { classesFor } from './style-helper';
import { widths, heights } from './scales';
import { cx, createWithStyleHoc } from './utils';
import { addMQSupport } from './media-queries';

const sizePropTypes = {
  w: addMQSupport(PropTypes.oneOf(widths)),
  h: addMQSupport(PropTypes.oneOf(heights)),
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
