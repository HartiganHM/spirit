/*eslint-disable camelcase*/

import apiRoot from '../apiRoot';
import addClinicInfoToUser from './addClinicInfoToUser';
import { mockClinicData } from '../../data/mockData/mockClinicData';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('addClinicInfoToUser tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(addClinicInfoToUser).toBeAFunction;
  });

  it('addClinicInfoToUser is called with the correct params', async () => {
    const expected = [
      `${apiRoot}/api/v1/users/1`,
      {
        method: 'PUT',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clinic: mockClinicData.name,
          clinic_abbreviation: mockClinicData.abbreviation,
          clinic_id: mockClinicData.clinic_id,
          clinic_passcode: mockClinicData.passcode
        })
      }
    ];

    await addClinicInfoToUser(mockClinicData, 1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});


