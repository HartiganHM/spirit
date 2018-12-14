const selectedSession = (store = {}, action) => {
  switch (action.type) {
  case 'SELECTED_SESSION_TO_STORE':
    return action.selectedSession;

  case 'UPDATE_SELECTED_SESSION': {
    let updatedStore = Object.assign({}, store);
    const updatedKeys = Object.keys(action.body);
    const updatedValues = Object.values(action.body);

    updatedKeys.forEach((key, index) => {
      updatedStore[key] = updatedValues[index];
    });

    return updatedStore;
  }

  case 'EMPTY_SELECTED_SESSION':
    return {};

  default:
    return store;
  }
};

export default selectedSession;
