/*eslint-disable camelcase*/

import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const postPatient = async (absName, userId) => {
  try {
    const abstractedName = await fetch(
      `/api/v1/users/${userId}/patients`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          abstracted_name: absName
        })
      }
    );
    const jsonAbstractedName = await abstractedName.json();

    return jsonAbstractedName[0];
  } catch (error) {
    throw new Error(`Error creating patient by user id ${userId}: ${error}`);
  }
};

export default postPatient;
