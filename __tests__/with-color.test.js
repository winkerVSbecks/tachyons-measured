import React from 'react';
import renderer from 'react-test-renderer';
import { withColor } from '../src/with-color';
import clrs from '../example/clrs';

const Button = withColor(clrs)(props => <button {...props} />);
const Div = withColor(clrs)('div');

test('Button', () => {
  const tree = renderer.create(
    <Button
      color="purple"
      type="button"
      onClick={() => {}}
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Div', () => {
  const tree = renderer.create(
    <Div color="purple" className="myClass my-other-class" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
