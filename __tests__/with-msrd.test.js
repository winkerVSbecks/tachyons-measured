import React from 'react';
import renderer from 'react-test-renderer';
import { withMsrd } from '../src/with-msrd';
import clrs from '../example/clrs';

const Button = withMsrd(clrs)(props => <button {...props} />);
const Div = withMsrd(clrs)('div');

test('Button', () => {
  const tree = renderer.create(
    <Button
      f={{ l: 4, m: 3, ns: 2, all: 1 }}
      lh="copy"
      mh={3} mv={2} mt={4} nl={3}
      pa={{ l: 4, m: 4, ns: 3, all: 2 }}
      bg="washed-yellow"
      color="purple"
      w={5}
      h={{ l: 50, m: 4, ns: 3, all: 2 }}
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
      mh={3} mv={{ l: 4, m: 3, ns: 2, all: 1 }}
      nl={{ l: 3, m: 2, ns: 4, all: 1 }}
      pr={4} pl={4} pv={2}
      w={{ l: 5, m: 4, ns: 'third', all: 3 }}
      h={5}
      f="subheadline"
      lh={{ l: 'copy', m: 'title', ns: 'solid', all: 'copy' }}
      ba bw={2}
      radius={{ l: 1, m: 2, ns: 100, all: 4 }}
      rounded={{ l: 'bottom', m: 'top', ns: 'right', all: 'left' }}
      color="purple"
      bg="washed-yellow"
      className="myClass my-other-class"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
