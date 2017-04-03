import { compose } from 'ramda';
import clrs from './clrs';
import {
  withSpacing,
  withColor,
  withTypography,
  withDefaults,
  withBaseStyles,
  withMsrd,
} from '../src';

export const Block = withMsrd(clrs)('div');
export const Article = withMsrd(clrs)('article');

export const Heading = compose(
  withDefaults({ f: 3 }),
  withTypography,
  withColor(clrs),
)('h1');

export const Text = compose(
  withDefaults({ f: 5, className: 'measure', lh: 'copy' }),
  withTypography,
  withColor(clrs),
)('p');

export const PageTitle = compose(
  withTypography,
  withBaseStyles('ttu tracked'),
  withSpacing,
)('h1');
