import { mqObjToSelectors } from '../src/media-queries';

test('mqObjToSelectors', () => {
  const fontClasses = mqObjToSelectors('f', { l: 1, m: 2, ns: 3, all: 4 });
  expect(fontClasses).toEqual(['f1-l', 'f2-m', 'f3-ns', 'f4']);

  expect(() => mqObjToSelectors('radius', { l: 3, all: 2, foo: 1 }))
    .toThrow('Invalid media query type supplied to \'radius\'. It only supports all, ns, m & l.');
});
