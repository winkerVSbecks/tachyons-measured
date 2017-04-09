import React, { PropTypes } from 'react';
import {
  isPresent,
  normalizeClassNames,
  cx,
  createEagerElement,
  displayName,
  createWithStyleHoc,
} from '../src/utils';

test('isPresent', () => {
  expect(isPresent(null)).toBe(false);
  expect(isPresent(undefined)).toBe(false);
  expect(isPresent(0)).toBe(true);
  expect(isPresent([])).toBe(true);
});

test('normalizeClassNames', () => {
  const normalizeTest = normalizeClassNames(['foo', 'bar']);
  expect(normalizeTest('foo')).toBe('-foo');
  expect(normalizeTest('bar')).toBe('-bar');
  expect(normalizeTest('baz')).toBe('baz');
  expect(normalizeTest(undefined)).toBe(undefined);
});

test('cx', () => {
  expect(cx(['blue', 'bg-green'])).toBe('blue bg-green');
  expect(cx([
    'blue green',
    ['db center', ['mw5', 'black'], ['link', ['dim']]],
    ['db', 'ba', 'b--black-10'],
  ]))
    .toBe('blue green db center mw5 black link dim db ba b--black-10');
});

test('displayName', () => {
  expect(displayName('Component', 'withFoo'))
    .toBe('withFoo(Component)');

  const ComponentWithDisplayName = () => {};
  ComponentWithDisplayName.displayName = 'ComponentWithDisplayName';
  expect(displayName(ComponentWithDisplayName, 'withFoo'))
    .toBe('withFoo(ComponentWithDisplayName)');

  function ComponentWithName() {}
  expect(displayName(ComponentWithName, 'withFoo'))
    .toBe('withFoo(ComponentWithName)');

  const TestComponent = () => {};
  expect(displayName(TestComponent, 'withFoo'))
    .toBe('withFoo(TestComponent)');
});

test('createWithStyleHoc', () => {
  function FakeComponent(props) { return props; }
  FakeComponent.propTypes = {
    bar: PropTypes.number,
    baz: PropTypes.string,
  };

  const fooPropTypes = {
    foo: PropTypes.tring,
    className: PropTypes.any,
  };

  const withFoo = createWithStyleHoc({
    name: 'withFoo',
    transformation: props => ({ foo: 'foo', ...props }),
    propTypes: fooPropTypes,
    component: FakeComponent,
  });

  expect(typeof withFoo).toBe('function');
  expect(withFoo.propTypes).toEqual({
    bar: PropTypes.number,
    baz: PropTypes.string,
    foo: PropTypes.tring,
    className: PropTypes.any,
  });
  expect(withFoo({ bar: 2, baz: '3' }))
    .toEqual({ bar: 2, baz: '3', foo: 'foo' });
});

test('createEagerElement', () => {
  const Foo = props => <aside {...props} />;

  const Bar = (props, context) => <div {...props} {...context} />;
  Bar.contextTypes = { barProp: PropTypes.object };

  const Baz = (props, context) => <div {...props} {...context} />;
  Baz.defaultProps = { bazProp: PropTypes.object };

  class TestClassComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() { return <div>hello world</div>; }
  }

  expect(createEagerElement(Foo)).toEqual(<aside />);
  expect(createEagerElement(() => ({ foo: 'bar' }))).toEqual({ foo: 'bar' });
  expect(createEagerElement('article')).toEqual(<article />);
  expect(createEagerElement(Bar)).toEqual(<Bar />);
  expect(createEagerElement(Baz)).toEqual(<Baz />);
  expect(createEagerElement(TestClassComponent)).toEqual(<TestClassComponent />);
});
