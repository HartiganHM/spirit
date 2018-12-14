const sessions = (store = [], action) => {
  switch (action.type) {
  case 'SESSIONS_TO_STORE':
    return action.sessions;

  case 'UPDATE_SESSIONS_ARRAY': {
    let newStore = [].slice.call(store);
    const id = action.sessionId;
    const status = action.status;
    const sessionToUpdate = newStore.find(index => index.id === id);
    sessionToUpdate[Object.keys(status)] = Object.values(status)[0];

    return newStore;
  }

  case 'EMPTY_SESSIONS':
    return [];

  default:
    return store;
  }
};

export default sessions;
