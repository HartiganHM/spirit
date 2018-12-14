const selectedProcess = (store = {}, action) => {
  switch (action.type) {
  case 'SELECTED_PROCESS_TO_STORE':
    return action.selectedProcess;

  case 'UPDATE_PROCESS_COMPONENT': {
    let newProcess = store;
    const componentKeys = Object.keys(action.updatedProcess);
    const componentValues = Object.values(action.updatedProcess);

    componentKeys.forEach((key, index) => {
      newProcess[key] = componentValues[index];
    });

    return newProcess;
  }

  case 'EMPTY_SELECTED_PROCESS':
    return {};

  default:
    return store;
  }
};

export default selectedProcess;
