import R from 'ramda';
import { mqObjToSelectors } from './media-queries';
import { isPresent } from './utils';

const hasMediaQuery = R.compose(R.is(Object), R.nth(1));

export const selectorFor = R.curry((prop, val) => `${prop}${val}`);

export const selectorWithMQFor = R.ifElse(hasMediaQuery,
  R.apply(mqObjToSelectors),
  R.apply(selectorFor),
);

/**
 * Get multiple tachyon classes
 * using an object where key is
 * selector type and value is value
 */
export const classesFor = R.compose(
  R.map(selectorWithMQFor),
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
