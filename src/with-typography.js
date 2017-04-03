import R, { __ } from 'ramda';
import { PropTypes } from 'react';
import { classesFor } from './style-helper';
import { cx, createWithStyleHoc, mapIfObj } from './utils';
import { addMQSupport } from './media-queries';

export const lineHeights = ['solid', 'title', 'copy'];
export const typeScale = [1, 2, 3, 4, 5, 6, 7, '-headline',
  '-subheadline'];

const sizePropTypes = {
  f: addMQSupport(PropTypes.oneOf(typeScale)),
  lh: addMQSupport(PropTypes.oneOf(lineHeights)),
  className: PropTypes.any,
};

const normalizeFontSizes = mapIfObj(
  R.when(R.contains(__, ['headline', 'subheadline']),
    R.concat('-')));

function typographyTransform({ className, f, lh, ...ownerProps }) {
  const type = classesFor({ f: normalizeFontSizes(f), 'lh-': lh });

  return R.merge(
    { className: cx([type, className]) },
    ownerProps,
  );
}

export const withTypography = component => createWithStyleHoc({
  name: 'withSize',
  transformation: typographyTransform,
  propTypes: sizePropTypes,
  component,
});
