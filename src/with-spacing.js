import R from 'ramda';
import PropTypes from 'prop-types';
import { classesFor } from './style-helper';
import { cx, createWithStyleHoc } from './utils';
import { addMQSupport } from './media-queries';

/**
 * Scale
 */
export const whiteSpaceScale = [0, 1, 2, 3, 4, 5, 6];
export const negativeMarginScale = [1, 2, 3, 4, 5, 6];

/**
 * withSpacing HOC
 */
function spacingTransform({
  className,
  ma, mt, ml, mr, mb, mv, mh,
  pa, pt, pl, pr, pb, pv, ph,
  na, nt, nl, nr, nb,
  ...ownerProps
}) {
  const margins = classesFor({ ma, mt, ml, mr, mb, mv, mh });
  const negativeMargins = classesFor({ na, nt, nl, nr, nb });
  const paddings = classesFor({ pa, pt, pl, pr, pb, pv, ph });

  return R.merge(
    { className: cx([margins, negativeMargins, paddings, className]) },
    ownerProps,
  );
}

const spacingProp = addMQSupport(PropTypes.oneOf(whiteSpaceScale));
const negativeMarginProp = addMQSupport(PropTypes.oneOf(negativeMarginScale));

const spacingPropTypes = {
  ma: spacingProp,
  mt: spacingProp,
  ml: spacingProp,
  mr: spacingProp,
  mb: spacingProp,
  mv: spacingProp,
  mh: spacingProp,
  na: negativeMarginProp,
  nt: negativeMarginProp,
  nl: negativeMarginProp,
  nr: negativeMarginProp,
  nb: negativeMarginProp,
  pa: spacingProp,
  pt: spacingProp,
  pl: spacingProp,
  pr: spacingProp,
  pb: spacingProp,
  pv: spacingProp,
  ph: spacingProp,
  className: PropTypes.any,
};

export const withSpacing = component => createWithStyleHoc({
  name: 'withSpacing',
  transformation: spacingTransform,
  propTypes: spacingPropTypes,
  component,
});
