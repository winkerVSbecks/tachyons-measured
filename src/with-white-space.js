import { PropTypes } from 'react';
import { classesFor } from './style-helper';
import { whiteSpaceScale } from './scales';
import { cx, createEagerElement } from './utils';

const whiteSpaceProp = PropTypes.oneOf(whiteSpaceScale);

const whiteSpaceProps = {
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

/**
 * HOC that allows you to configure
 * WhiteSpace styles as props
 */
export function withWhiteSpace(Component) {
  function WithWhiteSpace({
    className,
    ma, mt, ml, mr, mb, mv, mh,
    pa, pt, pl, pr, pb, pv, ph,
    ...ownerProps
  }) {
    const margins = classesFor({ ma, mt, ml, mr, mb, mv, mh });
    const paddings = classesFor({ pa, pt, pl, pr, pb, pv, ph });

    const props = {
      className: cx([margins, paddings, className]),
      ...ownerProps,
    };

    return createEagerElement(Component, props);
  }

  WithWhiteSpace.displayName =
    `withWhiteSpace(${Component.displayName || Component.name || Component})`;

  WithWhiteSpace.propTypes = { ...Component.propTypes, ...whiteSpaceProps };

  return WithWhiteSpace;
}
