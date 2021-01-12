import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Button from "./Button";

describe('Button tests', () => {

  it('renders without crashing', () => {
    shallow(<Button  children="testUI"/>);
  });

  it('renders with props', () => {
    const props = {
      className:'testUI',
      variant:'tertiary',
      disabled:true,
      shape: 'round',
      loading:false,
      children:'testUI'
    };
    const component = shallow(<Button {...props}></Button>);
    expect(component.props()).toEqual(props);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Button {...props}></Button>);
    expect(component.props()).toEqual(props);
  });

  it('check click event', () => {
    const clickEvent = jest.fn();
    const props = {
      onClick:clickEvent,
      children:'testUI'

    };
    const component = shallow(<Button {...props}></Button>);
    expect(component.props()).toEqual(props);
    component.simulate("click");
    expect(clickEvent).toHaveBeenCalledTimes(1)
  });

});

