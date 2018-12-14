import apiRoot from '../apiRoot';
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const updateSession = async (sessionId, status) => {
  try {
    const fetchedSession = await fetch(
      `${apiRoot}/api/v1/sessions/${sessionId}`,
      {
        method: 'PUT',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)
      }
    );
    const jsonSession = await fetchedSession.json();

    return jsonSession;
  } catch (error) {
    throw new Error(`Error updating process by id ${sessionId}: ${error}`);
  }
};

export default updateSession;