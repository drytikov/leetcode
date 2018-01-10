import relativeRanks from '../src/relativeRanks';

test('relativeRanks', () => {
  expect(relativeRanks([2, 7, 17, 15, 11])).toEqual(['5', '4', 'Gold Medal', 'Silver Medal', 'Bronze Medal']);
});
