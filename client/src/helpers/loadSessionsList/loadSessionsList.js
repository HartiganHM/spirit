import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadSessionsList = async primaryConcernId => {
  try {
    const fetchedSessionsList = await fetch(
      `/api/v1/primary-concerns/${primaryConcernId}/sessions`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonSessionsList = await fetchedSessionsList.json();
    const sortedSessions = await sortSessions(jsonSessionsList);

    return sortedSessions;
  } catch (error) {
    throw new Error(
      `Error fetching sessions by primary concern id ${primaryConcernId}: ${error}`
    );
  }
};

const sortSessions = sessionsArray => {
  const sortedSessions = sessionsArray.sort((sessionA, sessionB) => {
    const dateA = sessionA.updated_at
      .split('')
      .slice(0, 10)
      .join('')
      .split('-');
    const dateB = sessionB.updated_at
      .split('')
      .slice(0, 10)
      .join('')
      .split('-');

    const cleanedDateA = [dateA[1], dateA[2], dateA[0]].join('');
    const cleanedDateB = [dateB[1], dateB[2], dateB[0]].join('');

    return cleanedDateA - cleanedDateB;
  });

  return sortedSessions;
};

export default loadSessionsList;
