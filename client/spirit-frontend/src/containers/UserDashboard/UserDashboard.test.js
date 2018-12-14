import React from 'react';
import {
  UserDashboard,
  mapStateToProps,
  mapDispatchToProps
} from './UserDashboard';
import { shallow } from 'enzyme';
import { mockUserData } from '../../data/mockData/mockUserData';
import { mockPatient } from '../../data/mockData/mockPatient';

describe('UserDashboard tests', () => {
  let savePatient;
  let user;
  let patientList;
  let wipeStoreFromUserDashboard;
  let renderedUserDashboard;

  beforeEach(() => {
    savePatient = jest.fn();
    user = mockUserData;
    patientList = [mockPatient];
    wipeStoreFromUserDashboard = jest.fn();

    renderedUserDashboard = shallow(
      <UserDashboard
        savePatient={savePatient}
        user={user}
        patientList={patientList}
        wipeStoreFromUserDashboard={wipeStoreFromUserDashboard}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedUserDashboard).toMatchSnapshot();
  });

  it('Should take in a first/last initial and set it to uppercase', () => {
    const mockFirstInitial = {
      target: { name: 'firstInitial', value: 'H' }
    };

    const mockLastInitial = {
      target: { name: 'lastInitial', value: 'R' }
    };

    expect(renderedUserDashboard.state('firstInitial')).toEqual('');
    expect(renderedUserDashboard.state('lastInitial')).toEqual('');

    renderedUserDashboard.instance().handleChange(mockFirstInitial);
    renderedUserDashboard.instance().handleChange(mockLastInitial);

    expect(renderedUserDashboard.state('firstInitial')).toEqual('H');
    expect(renderedUserDashboard.state('lastInitial')).toEqual('R');
  });

  it('Should show an error if one of the initials is missing', () => {
    const expected = 'Please enter a first and last patient initial';
    const mockFirstInitial = {
      target: { name: 'firstInitial', value: 'H' }
    };

    renderedUserDashboard.instance().handleChange(mockFirstInitial);
    expect(renderedUserDashboard.state('firstInitial')).toEqual('H');
    expect(renderedUserDashboard.state('lastInitial')).toEqual('');

    renderedUserDashboard.instance().handleSubmit();
    expect(renderedUserDashboard.state('error')).toEqual(expected);

    renderedUserDashboard.update();
    expect(renderedUserDashboard.find('.error-message').length).toEqual(1);
  });

  it('Should show a success message if both initals are entered', () => {
    const expected = 'Patient successfully added!';
    const mockFirstInitial = {
      target: { name: 'firstInitial', value: 'H' }
    };

    const mockLastInitial = {
      target: { name: 'lastInitial', value: 'R' }
    };

    renderedUserDashboard.instance().handleChange(mockFirstInitial);
    renderedUserDashboard.instance().handleChange(mockLastInitial);
    expect(renderedUserDashboard.state('firstInitial')).toEqual('H');
    expect(renderedUserDashboard.state('lastInitial')).toEqual('R');

    renderedUserDashboard.instance().handleSubmit();
    expect(renderedUserDashboard.state('success')).toEqual(expected);

    renderedUserDashboard.update();
    expect(renderedUserDashboard.find('.success-message').length).toEqual(1);
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull a user and patientList from store', () => {
    const user = mockUserData;
    const patientList = [mockPatient];
    const mockStore = { user, patientList };
    const result = mapStateToProps(mockStore);

    expect(result.user).toEqual(mockStore.user);
    expect(result.patientList).toEqual(mockStore.patientList);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when savePatient is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [
      'A',
      'B',
      {
        name: 'Hugh',
        clinic: 'Developmental FX'
      },
      'DFX'
    ];

    const result = mapDispatchToProps(mockDispatch);

    result.savePatient(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Should call dispatch when wipeStoreFromUserDashboard is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.wipeStoreFromUserDashboard();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
