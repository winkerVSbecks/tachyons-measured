import React from 'react';
import ReactDom from 'react-dom';
import { compose } from 'ramda';

import clrs from './clrs';
import { withWhiteSpace } from '../src/with-white-space';
import { withBackgroundColor } from '../src/with-background-color';
import { withColor } from '../src/with-color';
import { withSize } from '../src/with-size';
import { withBorder } from '../src/with-border';

require('tachyons');

export const Block = compose(
  withBorder,
  withSize,
  withBackgroundColor(clrs),
  withWhiteSpace,
)('div');

export const Heading = compose(
  withColor(clrs),
)('h1');

ReactDom.render(
  <div className="mw7 ph3 center dark-gray">
    <h1 className="f6 mt5 ttu tracked mb4">tachyons msrd</h1>
    <Block className="flex" mt={3}>
      <Block mh={3} bg="light-red" w={4} h={4} />
      <Block mt={2} bg="light-yellow" w={4} h={4} />
      <Block ml={4} bg="light-green" w={4} h={4} />
      <Block
        ml={2} mt={4}
        bg="washed-green"
        ba borderColor="lightest-blue" bw={1} r={3}
        rounded="top"
        w={4} h={4}
      />
    </Block>

    <article className="pa3 pa5-ns">
      <Heading className="f3 f1-m f-headline-l"
        color="navy"
      >
        Title
      </Heading>
      <p className="measure lh-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <p className="measure lh-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </article>
  </div>,
  document.getElementById('root'),
);
