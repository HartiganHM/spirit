import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadTreatmentPlanBySession = async sessionId => {
  try {
    const fetchedTreatmentPlan = await fetch(
      `/api/v1/sessions/${sessionId}/treatment-plans`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonTreatmentPlan = await fetchedTreatmentPlan.json();

    return jsonTreatmentPlan;
  } catch (error) {
    throw new Error(
      `Error fetching process by session id ${sessionId}: ${error}`
    );
  }
};

export default loadTreatmentPlanBySession;
