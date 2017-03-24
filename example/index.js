import React from 'react';
import ReactDom from 'react-dom';
import 'tachyons';

import { compose } from 'ramda';
import { withWhiteSpace } from '../src/with-white-space';
// import { withBackgroundColor } from '../utils/with-background-color';
// import { withBorder } from '../utils/with-border';

const Div = (props) => <div {...props} />;

export const Block = compose(
  withWhiteSpace,
  withWhiteSpace,
  withWhiteSpace,
)(Div);


ReactDom.render(
  <div className="mw7 ph3 center dark-gray">
    <h1 className="f6 mt5 ttu tracked mb4">tachyons msrd</h1>
    <Block className="flex">
      <Block mh={3} className="w4 h4 bg-dark-gray" />
      <Block mt={2} mr={3} className="w4 h4 bg-dark-gray" />
      <Block mb={2} className="w4 h4 bg-dark-gray" />
    </Block>
  </div>,
  document.getElementById('root'),
);
