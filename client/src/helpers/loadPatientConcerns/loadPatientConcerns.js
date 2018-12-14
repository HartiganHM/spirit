import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadPatientConcerns = async id => {
  try {
    const concerns = await fetch(
      `/api/v1/patients/${id}/primary-concerns`,
      {
        method: 'GET',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        }
      }
    );
    const jsonConcerns = await concerns.json();

    return jsonConcerns;
  } catch (error) {
    throw new Error(
      `Error fetching primary concerns by patient id ${id}: ${error}`
    );
  }
};

export default loadPatientConcerns;
