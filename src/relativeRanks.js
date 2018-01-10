export default (scores) => {
  const sortScores = scores.slice().sort((a, b) => (b - a));
  return scores.map((score) => {
    const num = String(sortScores.indexOf(score) + 1);
    switch (num) {
      case '1': {
        return 'Gold Medal';
      }
      case '2': {
        return 'Silver Medal';
      }
      case '3': {
        return 'Bronze Medal';
      }
      default: {
        return num;
      }
    }
  });
};
