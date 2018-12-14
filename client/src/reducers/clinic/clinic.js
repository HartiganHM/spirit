const clinic = (store = {}, action) => {
  switch (action.type) {
  case 'CLINIC_TO_STORE':
    return action.clinic;

  default:
    return store;
  }
};

export default clinic;
