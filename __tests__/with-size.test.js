import React from 'react';
import renderer from 'react-test-renderer';
import { withSize } from '../src/with-size';

const Button = withSize(props => <button {...props} />);
const Div = withSize('div');

test('Button', () => {
  const tree = renderer.create(
    <Button
      w={5}
      h={{ l: 50, m: 4, ns: 3, all: 2 }}
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
      w={{ l: 5, m: 4, ns: 'third', all: 3 }}
      h={5}
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
