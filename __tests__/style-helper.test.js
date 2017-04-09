import { classesFor } from '../src/style-helper';

test('classesFor', () => {
  expect(classesFor({ ma: '', mt: undefined, ml: '', mr: null, mb: '', mv: '', mh: '' }))
    .toEqual(['ma', 'ml', 'mb', 'mv', 'mh']);

  expect(classesFor({ f: '-headline', 'lh-': 'title', '': 'washed-red' }))
    .toEqual(['f-headline', 'lh-title', 'washed-red']);
});
