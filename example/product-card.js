import React from 'react';
import { compose } from 'ramda';
import { Article, Heading, Text } from './components';
import clrs from './clrs';
import {
  withSpacing,
  withDefaults,
  withBaseStyles,
  withSize,
  withBorder,
} from '../src';

export const ProductCard = withDefaults({
  mv: 4,
  ba: 'black-10',
  radius: 2,
  bg: 'white',
  w: { all: 100, m: 50, l: 25 },
  color: 'dark-gray',
})(Article);

export const Media = compose(
  withSpacing,
  withSize,
  withBorder(clrs),
  withBaseStyles('dib'),
)('img');

export const CatProductCard = props => (
  <ProductCard {...props}>
    <img
      src="http://placekitten.com/g/600/300"
      className="db w-100 br2 br--top"
      alt="kitten looking menacing."
    />
    <div className="pa2 ph3-ns pb3-ns">
      <div className="dt w-100 mt1">
        <div className="dtc">
          <h1 className="f5 f4-ns mv0">Cat</h1>
        </div>
        <div className="dtc tr">
          <h2 className="f5 mv0">$1,000</h2>
        </div>
      </div>
      <p className="f6 lh-copy measure mt2 mid-gray">
        If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
        and touch water with paw then recoil in horror.
      </p>
    </div>
  </ProductCard>
);
