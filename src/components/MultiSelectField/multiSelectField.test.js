import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import MultiSelectField from "./MultiSelectField";

describe('MultiSelectField tests', () => {

  it('renders without crashing', () => {
    shallow(<MultiSelectField />);
  });

  it('renders with props', () => {
    const props = {
      name: 'testUI',
      choices:[{label:'test', value:'test' }],
      value: 'testValue',
      type: 'text',
      layout: 'default',
      sizeVariant: 'normal',
      placeholder: 'testPlaceholder',
      disabled: false,
      clearFormValueOnUnmount: true,
      loading: false,
      large: false,
      label: 'testLabel',
    };
    const component = shallow(<MultiSelectField {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<MultiSelectField {...props}/>);
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
    const component = shallow(<MultiSelectField {...props}/>);
    component.simulate('change', event);
    expect(Change).toHaveBeenCalledTimes(1)
  });

  it('check focus event', () => {
    const event = jest.fn();
    const props = {
      onFocus:event,
    };
    const component = shallow(<MultiSelectField {...props}/>);
    component.simulate('focus');
    expect(event).toHaveBeenCalledTimes(1)
  });
});

