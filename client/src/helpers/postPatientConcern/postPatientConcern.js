/*eslint-disable camelcase*/

  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const postPatientConcern = async ({
  description,
  domain_1,
  domain_2,
  domain_3,
  domain_4,
  domain_5,
  domain_6,
  notes,
  patient_id}) => {

  try {
    const concernId = await fetch(
      `/api/v1/patients/${patient_id}/primary-concerns`,
      {
        method: 'POST',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description,
          domain_1,
          domain_2,
          domain_3,
          domain_4,
          domain_5,
          domain_6,
          notes
        })
      }
    );
    const jsonConcernId = await concernId.json();

    return jsonConcernId[0];
  } catch (error) {
    throw new Error(
      `Error creating primary concern by patient id ${patient_id}: ${error}`
    );
  }
};

export default postPatientConcern;
