import apiRoot from '../apiRoot';
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadClinic = async id => {
  try {
    const clinic = await fetch(`${apiRoot}/api/v1/clinics/${id}`, {
      method: 'GET',
      headers: {
        'x-token': getKeyFromLS(),
        'Content-Type': 'application/json'
      }
    });
    const jsonClinic = await clinic.json();

    return jsonClinic[0];
  } catch (error) {
    throw new Error(`Error fetching clinic by id ${id}: ${error}`);
  }
};

export default loadClinic;
