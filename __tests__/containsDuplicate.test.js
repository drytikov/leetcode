import containsDuplicate from '../src/containsDuplicate';

test('containsDuplicate', () => {
  expect(containsDuplicate([2, 2, 17, 15, 11])).toBeTruthy();
  expect(containsDuplicate([2, 3, 17, 15, 11])).toBeFalsy();
});
