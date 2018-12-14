import React from 'react';
import { Users, mapStateToProps } from './Users';
import { shallow } from 'enzyme';
import { mockUserData } from '../../data/mockData/mockUserData';
import { mockHistory } from '../../data/mockData/mockHistory';

describe('Users tests', () => {
  let user;
  let history;
  let renderedUsers;

  beforeEach(() => {
    user = mockUserData;
    history = mockHistory;

    renderedUsers = shallow(<Users user={user} history={history} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedUsers).toMatchSnapshot();
  });

  it('Should redirect if there is a user', () => {
    expect(history.push).toHaveBeenCalled();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull a user from store', () => {
    const user = mockUserData;
    const mockStore = { user };
    const result = mapStateToProps(mockStore);

    expect(result.user).toEqual(mockStore.user);
  });
});
