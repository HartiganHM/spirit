import apiRoot from '../apiRoot';
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const updateTherapyGoal = async (therapyGoalId, updatedTherapyGoal) => {
  try {
    const fetchedTherapyGoal = await fetch(
      `${apiRoot}/api/v1/therapy-goals/${therapyGoalId}`,
      {
        method: 'PUT',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTherapyGoal)
      }
    );
    const jsonTherapyGoal = await fetchedTherapyGoal.json();

    return jsonTherapyGoal;
  } catch (error) {
    throw new Error(
      `Error updating treatment plan by id ${therapyGoalId}: ${error}`
    );
  }
};

export default updateTherapyGoal;
