import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const postProcess = async sessionId => {
  try {
    const fetchedProcessId = await fetch(
      `/api/v1/sessions/${sessionId}/processes`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonProcessId = await fetchedProcessId.json();

    return jsonProcessId;
  } catch (error) {
    throw new Error(
      `Error creating process by session id ${sessionId}: ${error}`
    );
  }
};

export default postProcess;
