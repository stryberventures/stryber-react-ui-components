import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Card from "./Card";

describe('Card tests', () => {

  it('renders without crashing', () => {
    shallow(<Card children="testUI" />);
  });

  it('renders with props', () => {
    const props = {
      className:'testUI',
      children:'testUI',
      shadow: 'normal',
      loading:false,
    };
    const component = shallow(<Card {...props}/>);
    expect(component.props()).toEqual(props);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Card {...props}/>);
    expect(component.props()).toEqual(props);
  });

});

