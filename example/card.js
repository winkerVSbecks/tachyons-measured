import React from 'react';
import { Block, Heading, Text } from './components';
import { withDefaults } from '../src';

export const Card = withDefaults({
  pa: { all: 3, ns: 4 },
  mv: 3,
  ba: true,
  borderColor: 'black-10',
  r: 3,
  bg: 'white',
})(Block);

export const CatCard = props => (
  <Card {...props}>
    <div className="tc">
      <img
        src="http://tachyons.io/img/avatar_1.jpg"
        className="br-100 h3 w3 dib"
        alt="kitty staring at you"
      />
      <Heading f={4}>Mimi Whitehouse</Heading>
      <hr className="mw3 bb bw1 b--black-10" />
    </div>
    <Text
      f={6} color="black-70"
      className="lh-copy measure center f6"
    >
      Quite affectionate and outgoing.
      She loves to get chin scratches and will
      roll around on the floor waiting for you give her more of them.
    </Text>
  </Card>
);
