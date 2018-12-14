import markedThreadConnections from '../../data/markedThreadConnections';
import getThreadConnections from '../../helpers/getThreadConnections/getThreadConnections';

const storedThreadConnections = (store = markedThreadConnections, action) => {
  switch (action.type) {
  case 'CHECK_THREAD_CONNECTIONS': {
    let selectedConnections = Object.assign({}, store);
    const processKeys = Object.keys(action.selectedProcess);
    const storeKeys = Object.keys(selectedConnections);

    processKeys.forEach(component => {
      storeKeys.forEach(key => {
        if (component === key && action.selectedProcess[component]) {
          const threadConnections = getThreadConnections({
            [component]: action.selectedProcess[component]
          });

          threadConnections.forEach(
            connection => {
              selectedConnections[connection] = true;
            }
          );
        }
      });
    });
    return selectedConnections;
  }

  case 'CONFIRM_MARKED_THREAD_CONNECTION': {
    const markedConnectionKey = Object.keys(action.updatedProcess)[0];
    const markedConnectionObject = { [markedConnectionKey]: false };
    const newConnections = Object.assign({}, store, markedConnectionObject);

    return newConnections;
  }

  case 'UPDATE_THREAD_CONNECTIONS': {
    const connectionsObject = action.threadConnections.reduce(
      (connectionsObject, connection) => {
        connectionsObject[connection] = true;

        return connectionsObject;
      },
      {}
    );

    const newConnections = Object.assign({}, store, connectionsObject);

    return newConnections;
  }

  case 'UPDATE_THREAD_DOMAIN': {
    const updatedDomain = { [action.domain]: false };
    const newConnections = Object.assign({}, store, updatedDomain);

    return newConnections;
  }

  case 'RESET_THREAD_CONNECTIONS':
    return markedThreadConnections;

  default:
    return store;
  }
};

export default storedThreadConnections;
