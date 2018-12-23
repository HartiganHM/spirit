  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const updateProcess = async (processId, updatedProcess) => {
  try {
    const fetchedProcess = await fetch(
      `/api/v1/processes/${processId}`,
      {
        method: 'PUT',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProcess)
      }
    );
    const jsonProcess = await fetchedProcess.json();

    return jsonProcess;
  } catch (error) {
    throw new Error(`Error updating process by id ${processId}: ${error}`);
  }
};

export default updateProcess;
