import React from 'react';
import { Definition, mapStateToProps } from './Definition';
import { shallow } from 'enzyme';
import { mockDefinitions } from '../../data/mockData/mockDefinitions';

describe('Definition tests', () => {
  let definitions;
  let renderedDefinition;
  let title;

  beforeEach(() => {
    definitions = mockDefinitions;
    title = 'S-A-M';

    renderedDefinition = shallow(
      <Definition definitions={definitions} title={title} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedDefinition).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull definitions from store', () => {
    const definitions = mockDefinitions;
    const mockStore = { definitions };
    const result = mapStateToProps(mockStore);

    expect(result.definitions).toEqual(mockStore.definitions);
  });
});
