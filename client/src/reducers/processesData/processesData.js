const processesData = (store = {}, action) => {
  switch (action.type) {
  case 'PROCESSES_DATA_TO_STORE':
    return action.cleanProcesses;

  case 'EMPTY_PROCESS_DATA':
    return {};

  default:
    return store;
  }
};

export default processesData;