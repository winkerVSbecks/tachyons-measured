import R from 'ramda';
import { PropTypes } from 'react';
import { selectorFor } from './style-helper';
import { typeScale, lineHeights } from './scales';
import { cx, createWithStyleHoc } from './utils';

const sizePropTypes = {
  f: PropTypes.oneOf(typeScale),
  lh: PropTypes.oneOf(lineHeights),
  className: PropTypes.any,
};

function typographyTransform({ className, f, lh, ...ownerProps }) {
  const type = [selectorFor('f', f), selectorFor('lh-', lh)];

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
