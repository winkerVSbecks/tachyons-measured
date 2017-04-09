import React from 'react';
import renderer from 'react-test-renderer';
import { withDefaults } from '../src/with-defaults';

const Button = withDefaults({
  ba: 'black-10',
  radius: 2,
  bg: 'white',
  color: 'dark-gray',
})(props => <button {...props} />);
const Div = withDefaults({
  f: 6,
  bn: true,
  lh: 'copy',
  mv: 4,
})('div');

test('Button', () => {
  const tree = renderer.create(
    <Button
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
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
