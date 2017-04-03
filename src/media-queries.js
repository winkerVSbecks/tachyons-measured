import R from 'ramda';
import { PropTypes } from 'react';

export const supportedSelectors = [
  'ba', 'bt', 'br', 'bb', 'bl', 'bn', 'r', 'rounded', 'bw',
  'f', 'fw', 'lh',
  'h', 'w',
  'pa', 'pl', 'pr', 'pb', 'pt', 'pv', 'ph',
  'ma', 'ml', 'mr', 'mb', 'mt', 'mv', 'mh',
  'na', 'nl', 'nr', 'nb', 'nt'];

const mqProp = propType => PropTypes.shape({
  all: propType,
  ns: propType,
  m: propType,
  l: propType,
});

export const addMQSupport = propType => PropTypes.oneOfType([
  propType,
  mqProp(propType),
]);

const mqType = type => R.compose(R.equals(type), R.head);
const mqSelector = selector => ([type, val]) => `${selector}${val}-${type}`;

const invalidMQ = selector => () => {
  throw new Error(`Invalid media query type supplied to '${selector}'.
  It only supports all, ns, m & l.`);
};

export const mQObjToSelectors = R.curry((baseSelector, value) =>
  R.compose(
    R.map(R.cond([
      [mqType('all'), ([, val]) => `${baseSelector}${val}`],
      [mqType('ns'), mqSelector(baseSelector)],
      [mqType('m'), mqSelector(baseSelector)],
      [mqType('l'), mqSelector(baseSelector)],
      [R.T, invalidMQ(baseSelector)],
    ])),
    R.toPairs,
  )(value));
