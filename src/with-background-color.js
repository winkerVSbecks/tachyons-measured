import R from 'ramda';
import { PropTypes } from 'react';
import { selectorFor } from './style-helper';
import { cx, createWithStyleHoc } from './utils';

const backgroundColorProps = colors => ({
  bg: PropTypes.oneOf(colors),
  className: PropTypes.any,
});

function backgroundColorTransform({ className, bg, ...ownerProps }) {
  return R.merge(
    { className: cx([selectorFor('bg-', bg), className]) },
    ownerProps,
  );
}

/**
 * HOC that allows you to configure
 * background color through props
 */
export const withBackgroundColor = colors => component => createWithStyleHoc({
  name: 'withWhiteSpace',
  transformation: backgroundColorTransform,
  propTypes: backgroundColorProps(colors),
  component,
});
