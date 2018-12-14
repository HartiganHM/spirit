/*eslint-disable camelcase*/

import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const addClinicInfoToUser = async (clinic, userId) => {
  try {
    const response = await fetch(
      `/api/v1/users/${userId}`,
      {
        method: 'PUT',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clinic: clinic.name,
          clinic_abbreviation: clinic.abbreviation,
          clinic_id: clinic.clinic_id,
          clinic_passcode: clinic.passcode
        })
      }
    );
    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (error) {
    throw new Error(`Error updating user by user id ${userId}: ${error}`);
  }
};

export default addClinicInfoToUser;
