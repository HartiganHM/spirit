const definitions = (store = {}, action) => {
  switch (action.type) {
  case 'DEFINITIONS_TO_STORE':
    return action.definitions;

  default:
    return store;
  }
};

export default definitions;
