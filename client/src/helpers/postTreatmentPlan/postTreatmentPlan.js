  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const postTreatmentPlan = async sessionId => {
  try {
    const fetchedTreatmentPlanId = await fetch(
      `/api/v1/sessions/${sessionId}/treatment-plans`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonTreatmentPlanId = await fetchedTreatmentPlanId.json();

    return jsonTreatmentPlanId;
  } catch (error) {
    throw new Error(
      `Error creating treatment plan by session id ${sessionId}: ${error}`
    );
  }
};

export default postTreatmentPlan;
