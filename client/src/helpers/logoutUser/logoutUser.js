import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';
import clearLocalStorage from '../clearLocalStorage/clearLocalStorage';

const logoutUser = async () => {
  try {
    await fetch(`https://spirit-dev.e1.loginrocket.com/v1/logout`, {
      method: 'POST',
      body: JSON.stringify({
        token: getKeyFromLS()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    clearLocalStorage();
  } catch (error) {
    throw new Error(`Error logging out user: ${error}`);
  }
};

export default logoutUser;
