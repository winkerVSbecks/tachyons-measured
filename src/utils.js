import React from 'react';
import R from 'ramda';

const isNotNil = R.complement(R.isNil);
const hasPrototype = R.has('prototype');
const isReactComponent = R.propIs(Object, 'isReactComponent');
const isClassComponent = R.allPass([isNotNil, hasPrototype, isReactComponent]);
const isNotClassComponent = R.complement(isClassComponent);
const doesNotHave = R.complement(R.has);

const isReferentiallyTransparentFunctionComponent = R.allPass([
  R.is(Function),
  isNotClassComponent,
  doesNotHave('defaultProps'),
  doesNotHave('contextTypes'),
]);

export const createEagerElement = R.cond([
  [isReferentiallyTransparentFunctionComponent, R.call],
  [R.T, (Component, props) => <Component {...props} />],
]);

export const cx = R.compose(R.join(' '), R.flatten);
