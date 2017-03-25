import { compose } from 'ramda';
import { withSpacing } from './with-spacing';
import { withBackgroundColor } from './with-background-color';
import { withColor } from './with-color';
import { withSize } from './with-size';
import { withBorder } from './with-border';
import { withTypography } from './with-typography';

export const withMsrd = colors => compose(
  withSpacing,
  withBackgroundColor(colors),
  withColor(colors),
  withSize,
  withBorder(colors),
  withTypography,
);
