  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadSessionsForComparison = async (idArray) => {
  try {
    const fetchedSessions = await fetch(
      `/api/v1/therapy-goals/compare`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idArray: idArray })
      }
    );
    const jsonSessions = await fetchedSessions.json();

    return jsonSessions;
  } catch (error) {
    throw new Error(
      `Error fetching sessions`
    );
  }
};

export default loadSessionsForComparison;
