import React from 'react';
import renderer from 'react-test-renderer';
import { withTypography } from '../src/with-typography';

const Button = withTypography(props => <button {...props} />);
const Div = withTypography('div');

test('Button', () => {
  const tree = renderer.create(
    <Button
      f={{ l: 4, m: 3, ns: 2, all: 1 }}
      lh="copy"
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
      f="subheadline"
      lh={{ l: 'copy', m: 'title', ns: 'solid', all: 'copy' }}
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
