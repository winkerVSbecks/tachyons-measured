import React from 'react';
import ReactDom from 'react-dom';
import { Block, Heading, Text, PageTitle, Article } from './components';
import { CatCard } from './card';

require('tachyons');

ReactDom.render(
  <div className="mw7 ph3 center dark-gray">
    <PageTitle mt={5} mb={4} f={6}>tachyons msrd</PageTitle>
    <Block className="flex" mt={3}>
      <Block mh={3} bg="light-red" w={4} h={4} />
      <Block mt={2} bg="light-yellow" w={4} h={4} />
      <Block ml={4} nt={3} bg="light-green" w={4} h={4} />
      <Block
        ml={{ all: 4, ns: 3, m: 2, l: 1 }} mt={4}
        bg="washed-green"
        w={4} h={4}
      />
    </Block>

    <Block className="flex">
      <CatCard mr={2} />
      <CatCard mr={2} />
      <CatCard />
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
  </div>,
  document.getElementById('root'),
);
