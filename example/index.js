import React from 'react';
import ReactDom from 'react-dom';
import { Block, Heading, Text, PageTitle } from './components';
import { Card } from './card';

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
        ba borderColor="lightest-blue" bw={1} r={3}
        rounded="top"
        w={4} h={4}
      />
    </Block>

    <Card />

    <article className="pa3 pa5-ns">
      {/* f3 f1-m f-headline-l */}
      <Heading color="navy">
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
    </article>
  </div>,
  document.getElementById('root'),
);
