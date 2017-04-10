import React from 'react';
import { Article, Block, Heading, Text, Media } from './components';
import { withDefaults } from '../src';

export const ProductCard = withDefaults({
  ba: 'black-10',
  radius: 2,
  bg: 'white',
  color: 'dark-gray',
})(Article);

export const CatProductCard = props => (
  <ProductCard {...props}>
    <Media
      src="http://placekitten.com/g/600/300"
      className="db"
      w={100}
      radius={2} rounded="top"
      alt="kitten looking menacing."
    />
    <Block pa={2} ph={{ ns: 3 }} pb={{ ns: 3 }}>
      <Block w={100} mt={1} className="flex items-center">
        <Heading
          f={{ all: 5, ns: 4 }} mv={0}
          className="flex-auto"
        >
          Cat
        </Heading>
        <Heading level={2} f={5} mv={0}>$1,000</Heading>
      </Block>
      <Text
        mt={2}
        f={6} lh="copy" color="mid-gray"
        className="measure"
      >
        If it fits, i sits burrow under covers. Destroy couch leave hair
        everywhere, and touch water with paw then recoil in horror.
      </Text>
    </Block>
  </ProductCard>
);
