import React from 'react';
import { Create, mapStateToProps, mapDispatchToProps } from './Create';
import { shallow } from 'enzyme';
import { mockUserData } from '../../data/mockData/mockUserData';

describe('Create tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(<Create user={mockUserData} />);

    expect(renderedApp).toMatchSnapshot();
  });

  it('should set state when clinic name input is changed', () => {
    const renderedApp = shallow(<Create user={mockUserData} />);
    const mockEvent = {
      target: { name: 'clinicName', value: 'I Need Therapy' }
    };

    renderedApp.instance().handleChange(mockEvent);
    expect(renderedApp.state('clinicName')).toEqual('I Need Therapy');
  });

  it('should set state when abbreviation input is changed', () => {
    const renderedApp = shallow(<Create user={mockUserData} />);
    const mockEvent = { target: { name: 'clinicAbbreviation', value: 'INT' } };

    renderedApp.instance().handleChange(mockEvent);
    expect(renderedApp.state('clinicAbbreviation')).toEqual('INT');
  });

  it('should display a success message when saveNewClinic is called with correct params', () => {
    const renderedApp = shallow(
      <Create user={mockUserData} saveClinic={jest.fn()} />
    );
    const mockEvent = { preventDefault: jest.fn() };
    const mockClinicName = 'I Need Therapy';
    const mockClinicAbbreviation = 'INT';

    renderedApp
      .instance()
      .setState({ clinicName: 'I Need Therapy', clinicAbbreviation: 'INT' });
    renderedApp
      .instance()
      .saveNewClinic(mockEvent, mockClinicName, mockClinicAbbreviation);
    expect(renderedApp.state('success').length).toEqual(60);
    expect(renderedApp.state('error').length).toEqual(0);
  });

  it('should display an error message when saveNewClinic is called with incorrect params', () => {
    const renderedApp = shallow(
      <Create user={mockUserData} saveClinic={jest.fn()} />
    );
    const mockEvent = { preventDefault: jest.fn() };
    const mockClinicName = 'I Need Therapy';
    const mockClinicAbbreviation = 'INT';

    renderedApp.instance().setState({ clinicName: '', clinicAbbreviation: '' });
    renderedApp
      .instance()
      .saveNewClinic(mockEvent, mockClinicName, mockClinicAbbreviation);
    expect(renderedApp.state('success').length).toEqual(0);
    expect(renderedApp.state('error').length).toEqual(43);
  });

  it('inputs should be cleared after saving a new clinic', () => {
    const renderedApp = shallow(
      <Create user={mockUserData} saveClinic={jest.fn()} />
    );
    const mockEvent = { preventDefault: jest.fn() };
    const mockClinicName = 'I Need Therapy';
    const mockClinicAbbreviation = 'INT';

    renderedApp
      .instance()
      .setState({ clinicName: 'I Need Therapy', clinicAbbreviation: 'INT' });
    renderedApp
      .instance()
      .saveNewClinic(mockEvent, mockClinicName, mockClinicAbbreviation);
    expect(renderedApp.state('clinicName')).toEqual('');
    expect(renderedApp.state('clinicAbbreviation')).toEqual('');
  });
});

describe('mapStateToProps tests', () => {
  it('should pull user from store', () => {
    const user = { mockUserData };
    const mockStore = { user };
    const result = mapStateToProps(mockStore);

    expect(result.user).toEqual(mockStore.user);
  });
});

describe('mapDispatchToProps tests', () => {
  it('should call dispatch when saveClinic is called', () => {
    const mockDispatch = jest.fn();
    const mockParams = ({
      clinicName: 'I Need Therapy',
      clinicAbbreviation: 'INT',
      passcode: 'fj7f82jb'
    }, 5);
    const result = mapDispatchToProps(mockDispatch);

    result.saveClinic(mockParams);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
