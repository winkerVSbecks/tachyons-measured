import React from 'react';
import renderer from 'react-test-renderer';
import { withSpacing } from '../src/with-spacing';

const Button = withSpacing(props => <button {...props} />);
const Div = withSpacing('div');

test('Button', () => {
  const tree = renderer.create(
    <Button
      mh={3} mv={2} mt={4} nl={3}
      pa={{ l: 4, m: 4, ns: 3, all: 2 }}
      type="button"
      onClick={() => {}}
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Div', () => {
  const tree = renderer.create(
    <Div
      mh={3} mv={{ l: 4, m: 3, ns: 2, all: 1 }}
      nl={{ l: 3, m: 2, ns: 4, all: 1 }}
      pr={4} pl={4} pv={2}
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
