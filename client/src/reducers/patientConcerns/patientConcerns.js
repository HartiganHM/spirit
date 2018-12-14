const patientConcerns = (store = [], action) => {
  switch (action.type) {
  case 'CONCERN_TO_STORE': {
    const newArray = [...store, action.concern];
    return newArray;
  }

  case 'CONCERN_ARRAY_TO_STORE':
    return action.concerns;

  case 'EMPTY_PATIENT_CONCERNS':
    return [];

  default:
    return store;
  }
};

export default patientConcerns;
