const comparisonData = (store = {}, action) => {
  switch (action.type) {
  case 'COMPARISON_DATA_TO_STORE':
    return action.cleanData;

  case 'EMPTY_COMPARISON_DATA':
    return {};

  default:
    return store;
  }
};

export default comparisonData;