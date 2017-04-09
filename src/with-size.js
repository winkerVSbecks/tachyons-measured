import R from 'ramda';
import PropTypes from 'prop-types';
import { classesFor } from './style-helper';
import { cx, createWithStyleHoc, normalizeClassNames } from './utils';
import { addMQSupport } from './media-queries';

/**
 * Scale
 */
export const widths = [1, 2, 3, 4, 5, 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80,
  90, 100, 'third', 'two-thirds', 'auto'];

export const heights = [1, 2, 3, 4, 5, 25, 50, 75, 100, 'auto'];

/**
 * Normalize classnames to add a `-`
 * prefix when needed
 */
const normalizeWidths = normalizeClassNames([10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75,
  80, 90, 100, 'third', 'two-thirds', 'auto']);

const normalizeHeights = normalizeClassNames([25, 50, 75, 100, 'auto']);

/**
 * withSize HOC
 */
function sizeTransform({ className, w, h, ...ownerProps }) {
  const sizes = classesFor({ w: normalizeWidths(w), h: normalizeHeights(h) });

  return R.merge(
    { className: cx([sizes, className]) },
    ownerProps,
  );
}

const sizePropTypes = {
  w: addMQSupport(PropTypes.oneOf(widths)),
  h: addMQSupport(PropTypes.oneOf(heights)),
  className: PropTypes.any,
};

export const withSize = component => createWithStyleHoc({
  name: 'withSize',
  transformation: sizeTransform,
  propTypes: sizePropTypes,
  component,
});
