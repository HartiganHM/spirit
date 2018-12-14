import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadSession = async sessionId => {
  try {
    const fetchedSession = await fetch(
      `/api/v1/sessions/${sessionId}`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonSession = await fetchedSession.json();

    return jsonSession;
  } catch (error) {
    throw new Error(
      `Error fetching sessions by session id ${sessionId}: ${error}`
    );
  }
};

export default loadSession;
