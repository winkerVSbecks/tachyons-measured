import React from 'react';
import renderer from 'react-test-renderer';
import { withBackgroundColor } from '../src/with-background-color';
import clrs from '../example/clrs';

const Button = withBackgroundColor(clrs)(props => <button {...props} />);
const Div = withBackgroundColor(clrs)('div');

test('Button', () => {
  const tree = renderer.create(
    <Button
      bg="washed-yellow"
      type="button"
      onClick={() => {}}
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Div', () => {
  const tree = renderer.create(
    <Div bg="washed-yellow" className="myClass my-other-class" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
