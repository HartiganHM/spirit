import apiRoot from '../apiRoot';
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadProcessById = async processId => {
  try {
    const fetchedProcess = await fetch(
      `${apiRoot}/api/v1/processes/${processId}`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonProcess = await fetchedProcess.json();

    return jsonProcess;
  } catch (error) {
    throw new Error(
      `Error fetching process by id ${processId}: ${error}`
    );
  }
};

export default loadProcessById;
