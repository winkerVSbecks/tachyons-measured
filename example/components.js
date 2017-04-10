import React from 'react';
import { compose } from 'ramda';
import clrs from './clrs';
import {
  withSpacing,
  withTypography,
  withDefaults,
  withBaseStyles,
  withMeasured,
  withBorder,
  withSize,
} from '../src';

export const Block = withMeasured(clrs)('div');
export const Article = withMeasured(clrs)('article');

export const Heading = compose(
  withDefaults({ f: 3 }),
  withMeasured(clrs),
)(({ level = 1, ...props }) => {
  const Tag = `h${level}`;
  return <Tag {...props} />;
});

export const Text = compose(
  withDefaults({ f: 5, lh: 'copy' }),
  withMeasured(clrs),
)('p');

export const PageTitle = compose(
  withTypography,
  withBaseStyles('ttu tracked'),
  withSpacing,
)('h1');

export const Media = compose(
  withBorder(clrs),
  withSize,
  withSpacing,
  withBaseStyles('dib'),
)('img');
