import R, { __ } from 'ramda';
import { lineHeights } from './scales';

const classFromTachyons = R.identity;
const list = R.unapply(R.identity);

const selectorFor = R.curry((prop, val) => `${prop}${val}`);
const lineHeightStyleFrom = sizes => lineHeight => R.compose(
  R.objOf('lineHeight'),
  R.multiply(lineHeight),
  R.prop(__, sizes),
);
const lineHeightStyle = lineHeightStyleFrom({ lineHeights });

const isPresent = R.complement(R.isNil);

/**
 * Get styles for a font size
 * and lineHeight pairing
 */
const fontStyles = lineHeight => R.compose(
  R.converge(list,
    [lineHeightStyle(lineHeight), classFromTachyons],
  ),
  selectorFor('f'),
);

export const headingFontStyles = fontStyles(lineHeights.title);
export const copyFontStyles = fontStyles(lineHeights.copy);
export const solidFontStyles = fontStyles(lineHeights.solid);

/**
 * Get multiple tachyon classes
 * using an object where key is
 * selector type and value is value
 */
export const classesFor = R.compose(
  R.map(R.apply(selectorFor)),
  R.toPairs,
  R.filter(isPresent),
);

/**
 * classnames style compose
 * provide a map where key is classname
 * and value is a boolean
 */
export const tachyonsCompose = R.compose(
  R.map(classFromTachyons),
  R.keys,
  R.filter(R.identity),
);
