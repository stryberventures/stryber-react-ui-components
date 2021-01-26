import React from 'react';
import { shallow } from 'enzyme';
import Badge from "./Badge";

describe('Badge tests', () => {

  it('renders without crashing', () => {
    shallow(<Badge />);
  });

  it('renders with props', () => {
    const props = {
      className:'testUI',
      children:'testUI',
      label: 'testUI',
    };
    const component = shallow(<Badge {...props}></Badge>);
    expect(component.props()).toEqual(props);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Badge {...props}></Badge>);
    expect(component.props()).toEqual(props);
  });

});

