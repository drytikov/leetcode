export default (arr, target) => {
  const objFromArr = arr.reduce((acc, item, index) => acc.set(item, index), new Map());
  const iter = (array, index) => {
    const secondNum = target - arr[index];
    if (arr.length === index) {
      return false;
    }
    if (objFromArr.has(secondNum) && objFromArr.get(secondNum) !== index) {
      return [index, objFromArr.get(secondNum)];
    }
    return iter(array, index + 1);
  };
  return iter(arr, 0);
};
