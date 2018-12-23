  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const joinClinic = async (passcode, userId) => {
  try {
    const clinicObject = await fetch(
      `/api/v1/users/${userId}/join`,
      {
        method: 'PUT',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(passcode)
      }
    );
    const jsonClinicObject = await clinicObject.json();

    return jsonClinicObject;
  } catch (error) {
    throw new Error(`Error fetching user by id ${userId}: ${error}`);
  }
};

export default joinClinic;