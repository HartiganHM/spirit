const user = (store = {}, action) => {
  switch (action.type) {
  case 'USER_TO_STORE': {
    const updatedUser = Object.assign({}, action.user);
    return updatedUser;
  }

  case 'CLEAR_CURRENT_USER': {
    return store = {};
  }

  case "UPDATE_USER_STORE": {
    let newStore = Object.assign({}, store);
    const keys = Object.keys(action.clinicData);
    const values = Object.values(action.clinicData);

    keys.forEach((key, index) => {
      newStore[key] = values[index];
    });
    return newStore;
  }

  default:
    return store;
  }
};

export default user;
