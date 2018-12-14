import apiRoot from '../apiRoot';
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadPatient = async id => {
  try {
    const patient = await fetch(`${apiRoot}/api/v1/patients/${id}`, {
      method: 'GET',
      headers: {
        'x-token': getKeyFromLS(),
        'Content-Type': 'application/json'
      }
    });
    const jsonPatient = await patient.json();

    return jsonPatient[0];
  } catch (error) {
    throw new Error(`Error fetching patient by id ${id}: ${error}`);
  }
};

export default loadPatient;
