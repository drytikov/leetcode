export default (firstList, secondList) => {
  const list = firstList.reduce((acc, item, index) => {
    const secondIndex = secondList.indexOf(item);
    if (secondIndex !== -1) {
      return [...acc, { name: item, index: index + secondIndex }];
    }
    return acc;
  }, []).sort((a, b) => a.index - b.index);
  return list.filter(item => item.index === list[0].index).map(item => item.name);
};
