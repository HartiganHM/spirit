const selectedTreatmentPlan = (store = {}, action) => {
  switch (action.type) {
  case 'SELECTED_TREATMENT_PLAN_TO_STORE':
    return action.selectedTreatmentPlan;

  case 'UPDATE_TREATMENT_PLAN': {
    let newTreatmentPlan = store;
    const updatedKeys = Object.keys(action.updatedTreatmentPlan);
    const updatedValues = Object.values(action.updatedTreatmentPlan);

    updatedKeys.forEach((key, index) => {
      newTreatmentPlan[key] = updatedValues[index];
    });

    return newTreatmentPlan;
  }

  case 'EMPTY_SELECTED_TREATMENT_PLAN':
    return {};

  default:
    return store;
  }
};

export default selectedTreatmentPlan;
