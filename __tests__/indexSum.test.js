import indexSum from '../src/indexSum';

test('indexSum1', () => {
  const firstList = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];
  const secondList = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
  expect(indexSum(firstList, secondList)).toEqual(['Shogun']);
});

test('indexSum2', () => {
  const firstList = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
  const secondList = ['KFC', 'Shogun', 'Burger King'];
  expect(indexSum(firstList, secondList)).toEqual(['Shogun']);
});

test('indexSum3', () => {
  const firstList = ['Shogun', 'KFC', 'Tapioca Express', 'Burger King'];
  const secondList = ['KFC', 'Shogun', 'Burger King'];
  expect(indexSum(firstList, secondList)).toEqual(['Shogun', 'KFC']);
});
