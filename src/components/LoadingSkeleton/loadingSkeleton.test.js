import React from 'react';
import { shallow } from 'enzyme';
import LoadingSkeleton from "./LoadingSkeleton";


describe('LoadingSkeleton tests', () => {

  it('renders without crashing', () => {
    shallow(<LoadingSkeleton />);
  });

  it('renders with props', () => {
    const props = {
      className: 'testUi',
     style:'testUI'
    };
    const component = shallow(<LoadingSkeleton {...props}/>);
    expect(component.props().className).toMatch(props.className);
    expect(component.props().style).toMatch(props.style);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<LoadingSkeleton {...props}/>);
    expect(component.props()).not.toEqual(expect.objectContaining(props));
  });
});

