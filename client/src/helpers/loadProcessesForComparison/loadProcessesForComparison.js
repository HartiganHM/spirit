  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadProcessesForComparison = async (idArray) => {
  try {
    const fetchedProcesses = await fetch(
      `/api/v1/processes/compare`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idArray: idArray })
      }
    );
    const jsonProcesses = await fetchedProcesses.json();

    return jsonProcesses;
  } catch (error) {
    throw new Error(
      `Error fetching processes`
    );
  }
};

export default loadProcessesForComparison;
