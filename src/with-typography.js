import R from 'ramda';
import PropTypes from 'prop-types';
import { classesFor } from './style-helper';
import { cx, createWithStyleHoc, normalizeClassNames } from './utils';
import { addMQSupport } from './media-queries';

/**
 * Scale
 */
export const lineHeights = ['solid', 'title', 'copy'];
export const typeScale = [1, 2, 3, 4, 5, 6, 7, 'headline', 'subheadline'];

/**
 * Normalize classnames to add a `-`
 * prefix when needed
 */
const normalizeFontSizes = normalizeClassNames(['headline', 'subheadline']);

/**
 * withTypography HOC
 */
function typographyTransform({ className, f, lh, ...ownerProps }) {
  const type = classesFor({ f: normalizeFontSizes(f), 'lh-': lh });

  return R.merge(
    { className: cx([type, className]) },
    ownerProps,
  );
}

const sizePropTypes = {
  f: addMQSupport(PropTypes.oneOf(typeScale)),
  lh: addMQSupport(PropTypes.oneOf(lineHeights)),
  className: PropTypes.any,
};

export const withTypography = component => createWithStyleHoc({
  name: 'withTypography',
  transformation: typographyTransform,
  propTypes: sizePropTypes,
  component,
});
