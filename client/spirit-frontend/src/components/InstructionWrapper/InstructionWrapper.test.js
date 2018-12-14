import React from 'react';
import InstructionWrapper from './InstructionWrapper';
import { shallow } from 'enzyme';

describe('InstructionWrapper tests', () => {
  let renderedInstructionWrapper;

  beforeEach(() => {
    renderedInstructionWrapper = shallow(
      <InstructionWrapper>
        <div>{`Instructions`}</div>
      </InstructionWrapper>
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedInstructionWrapper).toMatchSnapshot();
  });

  it('Should hide instructions by default', () => {
    expect(renderedInstructionWrapper.state('hideInstructions')).toEqual(true);
  });

  it('Should toggle hide instructions when clicked', () => {
    expect(renderedInstructionWrapper.state('hideInstructions')).toEqual(true);
    renderedInstructionWrapper.instance().toggleInstructions();
    expect(renderedInstructionWrapper.state('hideInstructions')).toEqual(false);
  });
});
