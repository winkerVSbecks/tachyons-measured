import React from 'react';
import ReactDom from 'react-dom';
import { compose } from 'ramda';

import clrs from './clrs';
import { withWhiteSpace } from '../src/with-white-space';
import { withBackgroundColor } from '../src/with-background-color';

require('tachyons');

export const Block = compose(
  withBackgroundColor(clrs),
  withWhiteSpace,
)('div');

ReactDom.render(
  <div className="mw7 ph3 center dark-gray">
    <h1 className="f6 mt5 ttu tracked mb4">tachyons msrd</h1>
    <Block className="flex" mt={3}>

      <Block
        mh={3}
        bg="light-red"
        className="w4 h4"
      />

      <Block
        mt={2}
        bg="light-yellow"
        className="w4 h4"
      />

      <Block
        ml={4}
        bg="light-green"
        className="w4 h4 bg-dark-gray"
      />

    </Block>
  </div>,
  document.getElementById('root'),
);
