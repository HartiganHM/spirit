const patientList = (store = [], action) => {
  switch (action.type) {
  case 'PATIENT_TO_STORE': {
    let updatedPatientList = [].slice.call(store);

    action.patient.forEach(human => {
      updatedPatientList.push(human);
    });
    return updatedPatientList;
  }

  default:
    return store;
  }
};

export default patientList;
