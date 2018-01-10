export default (arr) => {
  const setArr = arr.reduce((acc, item) => acc.add(item), new Set());
  return arr.length !== setArr.size;
};
