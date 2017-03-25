import React from 'react';
import ReactDom from 'react-dom';
import { compose, tap } from 'ramda';

import clrs from './clrs';
import {
  withSpacing,
  withBackgroundColor,
  withColor,
  withSize,
  withBorder,
  withTypography,
  withDefaultProps,
} from '../src';

require('tachyons');

export const Block = compose(
  withBorder,
  withSize,
  withBackgroundColor(clrs),
  withSpacing,
)('div');

export const Heading = compose(
  withDefaultProps({ f: 3 }),
  withTypography,
  withColor(clrs),
)('h1');

export const Copy = compose(
  withDefaultProps({ f: 5, className: 'measure', lh: 'copy' }),
  withTypography,
  withColor(clrs),
)('p');

ReactDom.render(
  <div className="mw7 ph3 center dark-gray">
    <h1 className="f6 mt5 ttu tracked mb4">tachyons msrd</h1>
    <Block className="flex" mt={3}>
      <Block mh={3} bg="light-red" w={4} h={4} />
      <Block mt={2} bg="light-yellow" w={4} h={4} />
      <Block ml={4} nt={3} bg="light-green" w={4} h={4} />
      <Block
        ml={2} mt={4}
        bg="washed-green"
        ba borderColor="lightest-blue" bw={1} r={3}
        rounded="top"
        w={4} h={4}
      />
    </Block>

    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>

    <article className="pa3 pa5-ns">
      {/* f3 f1-m f-headline-l */}
      <Heading color="navy">
        Title
      </Heading>
      <Copy>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Copy>
      <Copy>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Copy>
    </article>
  </div>,
  document.getElementById('root'),
);
