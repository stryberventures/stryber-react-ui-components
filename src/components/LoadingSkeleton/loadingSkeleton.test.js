import React from 'react';
import { shallow } from 'enzyme';
import LoadingSkeleton from "./LoadingSkeleton";
import { Wrapper } from '../../storybook/components/Wrapper';


describe('LoadingSkeleton tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><LoadingSkeleton /></Wrapper>);
  });

  it('renders with props', () => {
    const props = {
     className: 'testUi',
     style:'testUI'
    };
    const component = shallow(<Wrapper><LoadingSkeleton {...props}/></Wrapper>);
    expect(component.props().children.props.className).toMatch(props.className);
    expect(component.props().children.props.style).toMatch(props.style);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<LoadingSkeleton {...props}/>);
    expect(component.props()).not.toEqual(expect.objectContaining(props));
  });
});

