import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Form from "./Form";

describe('Form tests', () => {

  it('renders without crashing', () => {
    shallow(<Form children="testUI"/>);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Form children="testUI" {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('check submit event', () => {
    const Submit = jest.fn();
    const props = {
      onSubmit:Submit,
      children:'TestUI'
    };
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };
    const component = shallow(<Form {...props}/>);
    component.simulate('submit', event);
    expect(Submit).toHaveBeenCalledTimes(1)
  });

  it('check reset event', () => {
    const Reset = jest.fn();
    const props = {
      onReset:Reset,
      children:'TestUI'
    };
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };
    const component = shallow(<Form {...props}/>);
    component.simulate('reset', event);
    expect(Reset).toHaveBeenCalledTimes(1)
  });
});

