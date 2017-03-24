import R from 'ramda';
import { PropTypes } from 'react';
import { classesFor } from './style-helper';
import { whiteSpaceScale } from './scales';
import { cx, createWithStyleHoc } from './utils';

const whiteSpaceProp = PropTypes.oneOf(whiteSpaceScale);

const whiteSpacePropTypes = {
  ma: whiteSpaceProp,
  mt: whiteSpaceProp,
  ml: whiteSpaceProp,
  mr: whiteSpaceProp,
  mb: whiteSpaceProp,
  mv: whiteSpaceProp,
  mh: whiteSpaceProp,
  pa: whiteSpaceProp,
  pt: whiteSpaceProp,
  pl: whiteSpaceProp,
  pr: whiteSpaceProp,
  pb: whiteSpaceProp,
  pv: whiteSpaceProp,
  ph: whiteSpaceProp,
  className: PropTypes.any,
};

function whiteSpaceTransformation({
  className,
  ma, mt, ml, mr, mb, mv, mh,
  pa, pt, pl, pr, pb, pv, ph,
  ...ownerProps
}) {
  const margins = classesFor({ ma, mt, ml, mr, mb, mv, mh });
  const paddings = classesFor({ pa, pt, pl, pr, pb, pv, ph });

  return R.merge(
    { className: cx([margins, paddings, className]) },
    ownerProps,
  );
}

/**
 * HOC that allows you to configure
 * WhiteSpace styles through props
 */
export const withWhiteSpace = component => createWithStyleHoc({
  name: 'withWhiteSpace',
  transformation: whiteSpaceTransformation,
  propTypes: whiteSpacePropTypes,
  component,
});
