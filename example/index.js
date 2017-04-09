import React from 'react';
import ReactDom from 'react-dom';
import { Block, Heading, Text, PageTitle, Article } from './components';
import { CatProfileCard } from './profile-card';
import { CatProductCard } from './product-card';

require('tachyons');

ReactDom.render(
  <Block ph={3} color="dark-gray" className="mw7 center">

    <PageTitle mt={5} mb={4} f={6}>tachyons msrd</PageTitle>

    <Block mt={3} mb={4} className="flex">
      <Block mh={3} bg="light-red" w={4} h={4} />
      <Block mt={2} bg="light-yellow" w={4} h={4} />
      <Block ml={4} nt={3} bg="light-green" w={4} h={4} />
      <Block
        ml={{ all: 4, ns: 3, m: 2, l: 1 }} mt={4}
        bg="washed-green"
        w={4} h={4}
      />
    </Block>

    <Block mb={4} className="flex">
      <CatProfileCard mr={2} />
      <CatProfileCard mr={2} />
      <CatProfileCard />
    </Block>

    <Block mb={4} className="flex">
      <CatProductCard
        w={{ all: 100, m: 5, l: 5 }}
        mr={3}
        className="center"
      />
      <CatProductCard
        w={{ all: 100, m: 5, l: 5 }}
        className="center"
      />
    </Block>

    <Article pa={{ all: 3, ns: 5 }} color="dark-gray">
      <Heading f={{ all: 3, m: 1, l: 'headline' }}>
        Title
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Text>
    </Article>
  </Block>,
  document.getElementById('root'),
);
