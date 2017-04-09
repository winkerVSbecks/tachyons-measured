import React from 'react';
import renderer from 'react-test-renderer';
import { withBorder } from '../src/with-border';
import clrs from '../example/clrs';

const Button = withBorder(clrs)(props => <button {...props} />);
const Div = withBorder(clrs)('div');

test('Button', () => {
  const tree = renderer.create(
    <Button
      bb="gray" bw={{ l: 1, m: 2, ns: 3, all: 4 }}
      radius="pill"
      rounded="top"
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
      ba bw={2}
      radius={{ l: 1, m: 2, ns: 100, all: 4 }}
      rounded={{ l: 'bottom', m: 'top', ns: 'right', all: 'left' }}
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
