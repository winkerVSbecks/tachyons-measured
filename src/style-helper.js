import R from 'ramda';
import { mqObjToSelectors } from './media-queries';
import { isPresent } from './utils';

const hasMediaQuery = R.compose(R.is(Object), R.nth(1));

const selectorFor = R.curry((prop, val) => `${prop}${val}`);

const selectorWithMQFor = R.ifElse(hasMediaQuery,
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
