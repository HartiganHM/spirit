const selectedConcern = (store = {}, action) => {
  switch (action.type) {
  case 'SELECTED_CONCERN_TO_STORE':
    return action.selectedConcern;

  case 'EMPTY_SELECTED_CONCERN':
    return {};

  default:
    return store;
  }
};

export default selectedConcern;
