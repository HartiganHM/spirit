  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadProcessBySession = async sessionId => {
  try {
    const fetchedProcess = await fetch(
      `/api/v1/sessions/${sessionId}/processes`,
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
      `Error fetching process by session id ${sessionId}: ${error}`
    );
  }
};

export default loadProcessBySession;
