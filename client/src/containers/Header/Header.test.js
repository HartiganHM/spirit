import React from 'react';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';
import { mockHistory } from '../../data/mockData/mockHistory';
import { mockUserData } from '../../data/mockData/mockUserData';
import mockLocalStorage from '../../data/mockData/mockLocalStorage';

global.localStorage = mockLocalStorage;

describe('Header tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      status: 200
    })
  );

  let user;
  let history;
  let renderedHeader;
  let clearCurrentUser;

  beforeEach(() => {
    user = mockUserData;
    history = mockHistory;
    clearCurrentUser = jest.fn();

    renderedHeader = shallow(
      <Header
        user={user}
        history={history}
        clearCurrentUser={clearCurrentUser}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedHeader).toMatchSnapshot();
  });

  describe('handleToggleMenu', () => {
    it('Should show the menu when clicked if it is hidden', () => {
      const expectedState = { isMenuShown: true };

      renderedHeader.instance().handleToggleMenu();

      expect(renderedHeader.state()).toEqual(expectedState);
    });

    it('Should hide the menu when clicked if it is visible', () => {
      const expectedState = { isMenuShown: false };

      renderedHeader.instance().handleToggleMenu();

      expect(renderedHeader.state('isMenuShown')).toEqual(true);

      renderedHeader.instance().handleToggleMenu();

      expect(renderedHeader.state()).toEqual(expectedState);
    });
  });

  describe('handleLogout', () => {
    it('Should call handleToggleMenu', async () => {
      const mockHandleToggle = jest.spyOn(renderedHeader.instance(), 'handleToggleMenu');

      await renderedHeader.instance().handleLogout();

      expect(mockHandleToggle).toHaveBeenCalled();
    });

    it('Should push to the home page when successful', async () => {
      const expected = '/spirit/index';

      await renderedHeader.instance().handleLogout();

      expect(history.push).toHaveBeenCalled();
      expect(history.push).toHaveBeenCalledWith(expected);
    });
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

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when clearCurrentUser is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.clearCurrentUser();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
