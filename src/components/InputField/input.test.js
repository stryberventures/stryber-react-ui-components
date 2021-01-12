import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { InputField } from "./InputField";

describe('InputField tests', () => {

  it('renders without crashing', () => {
    shallow(<InputField />);
  });

  it('renders with props', () => {
    const props = {
      name: 'testUI',
      value: 'testValue',
      type: 'text',
      layout: 'default',
      sizeVariant: 'normal',
      placeholder: 'testPlaceholder',
      disabled: false,
      large: false,
      label: 'testLabel',
    };
    const component = shallow(<InputField {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<InputField {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('check change event', () => {
    const Change = jest.fn();
    const props = {
      onChange:Change,

    };
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };
    const component = shallow(<InputField {...props}/>);
    component.simulate('change', event);
    expect(Change).toHaveBeenCalledTimes(1)
  });

  it('check focus event', () => {
    const event = jest.fn();
    const props = {
      onFocus:event,
    };
    const component = shallow(<InputField {...props}/>);
    component.simulate('focus');
    expect(event).toHaveBeenCalledTimes(1)
  });
});

