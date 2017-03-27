import R from 'ramda';
import { mQObjToSelectors } from './media-queries';

const isPresent = R.complement(R.isNil);
const hasMediaQuery = R.compose(R.is(Object), R.nth(1));

export const selectorFor = R.curry((prop, val) => `${prop}${val}`);

export const selectorForWithMQ = R.ifElse(hasMediaQuery,
  R.apply(mQObjToSelectors),
  R.apply(selectorFor),
);

/**
 * Get multiple tachyon classes
 * using an object where key is
 * selector type and value is value
 */
export const classesFor = R.compose(
  R.map(selectorForWithMQ),
  R.toPairs,
  R.filter(isPresent),
);

/**
 * classnames style compose
 * provide a map where key is classname
 * and value is a boolean
 */
export const composeClasses = R.compose(
  R.keys,
  R.filter(R.identity),
);
