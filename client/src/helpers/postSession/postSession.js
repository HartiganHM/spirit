  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const postSession = async primaryConcernId => {
  try {
    const fetchedSessionId = await fetch(
      `/api/v1/primary-concerns/${primaryConcernId}/sessions`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonSessionId = await fetchedSessionId.json();

    return jsonSessionId;
  } catch (error) {
    throw new Error(
      `Error creating session by primary concern id ${primaryConcernId}: ${error}`
    );
  }
};

export default postSession;
