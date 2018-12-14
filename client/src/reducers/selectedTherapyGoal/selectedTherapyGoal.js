const selectedTherapyGoal = (store = {}, action) => {
  switch (action.type) {
  case 'SELECTED_THERAPY_GOAL_TO_STORE':
    return action.selectedTherapyGoal;

  case 'UPDATE_THERAPY_GOAL': {
    let newTherapyGoal = store;
    const updatedKeys = Object.keys(action.updatedTherapyGoal);
    const updatedValues = Object.values(action.updatedTherapyGoal);

    updatedKeys.forEach((key, index) => {
      newTherapyGoal[key] = updatedValues[index];
    });

    return newTherapyGoal;
  }

  case 'EMPTY_SELECTED_THERAPY_GOAL':
    return {};

  default:
    return store;
  }
};

export default selectedTherapyGoal;
