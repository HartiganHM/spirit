import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const postClinic = async clinicObject => {
  try {
    const clinicId = await fetch(`/api/v1/clinics`, {
      method: 'POST',
      headers: {
        'x-token': getKeyFromLS(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clinicObject)
    });
    const jsonClinicId = await clinicId.json();

    return jsonClinicId[0];
  } catch (error) {
    throw new Error(`Error creating clinic: ${error}`);
  }
};

export default postClinic;
