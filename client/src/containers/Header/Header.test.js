import React from 'react';
import { Header, mapStateToProps } from './Header';
import { shallow } from 'enzyme';
import { mockUserData } from '../../data/mockData/mockUserData';

describe('Header tests', () => {
  let user;
  let renderedHeader;

  beforeEach(() => {
    user = mockUserData;

    renderedHeader = shallow(<Header user={user} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull user from store', () => {
    const user = mockUserData;
    const mockStore = { user };
    const result = mapStateToProps(mockStore);

    expect(result.user).toEqual(mockStore.user);
  });
});
