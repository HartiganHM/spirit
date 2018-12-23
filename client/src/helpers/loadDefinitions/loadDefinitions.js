  
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';

const loadDefinitions = async () => {
  try {
    const definitions = await fetch(`/api/v1/terms/all`, {
      method: 'GET',
      headers: {
        'x-token': getKeyFromLS(),
        'Content-Type': 'application/json'
      }
    });
    const jsonDefinitions = await definitions.json();

    return jsonDefinitions;
  } catch (error) {
    throw new Error(`Error fetching definitions: ${error}`);
  }
};

export default loadDefinitions;
