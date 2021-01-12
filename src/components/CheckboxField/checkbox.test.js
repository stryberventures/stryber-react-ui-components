import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { CheckboxField } from "./CheckboxField";


describe('CheckboxField tests', () => {

  it('renders without crashing', () => {
    shallow(<CheckboxField />);
  });

  it('renders with props', () => {
    const props = {
    name: 'testUI',
    value: 'testValue',
    placeholder: 'testPlaceholder',
    checked: false,
    disabled: true,
    controlled: true,
    variant: 'checkmark',
    errorMessage: 'testError',
    sizeVariant: 'small',
    loading: false,
    };
    const component = shallow(<CheckboxField {...props}></CheckboxField>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<CheckboxField {...props}></CheckboxField>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('check change event', () => {
    const event = jest.fn();
    const props = {
      onChange:event,
      children:'testUI'

    };
    const component = shallow(<CheckboxField {...props}></CheckboxField>);
    expect(component.props()).toEqual(expect.objectContaining(props));
    component.simulate('change');
    expect(event).toHaveBeenCalledTimes(1)
  });

  it('check focus event', () => {
    const event = jest.fn();
    const props = {
      onFocus:event,
      children:'testUI'

    };
    const component = shallow(<CheckboxField {...props}></CheckboxField>);
    expect(component.props()).toEqual(expect.objectContaining(props));
    component.simulate('focus');
    expect(event).toHaveBeenCalledTimes(1)
  });
});

