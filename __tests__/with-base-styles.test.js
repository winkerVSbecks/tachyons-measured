import React from 'react';
import renderer from 'react-test-renderer';
import { withBaseStyles } from '../src/with-base-styles';

const Button = withBaseStyles(
  ['class-one', 'class-two', 'classThree'],
)(props => <button {...props} />);
const Div = withBaseStyles('class-one class-two classThree')('div');

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
    <Div className="myClass my-other-class" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
