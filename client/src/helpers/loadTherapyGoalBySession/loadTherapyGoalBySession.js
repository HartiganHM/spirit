import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadTherapyGoalBySession = async sessionId => {
  try {
    const fetchedTherapyGoal = await fetch(
      `/api/v1/sessions/${sessionId}/therapy-goals`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonTherapyGoal = await fetchedTherapyGoal.json();

    return jsonTherapyGoal;
  } catch (error) {
    throw new Error(
      `Error fetching process by session id ${sessionId}: ${error}`
    );
  }
};

export default loadTherapyGoalBySession;
