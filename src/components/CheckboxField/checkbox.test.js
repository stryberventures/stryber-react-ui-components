import React from 'react';
import { shallow } from 'enzyme';
import { CheckboxField } from "./CheckboxField";
import { Wrapper } from '../../storybook/components/Wrapper';


describe('CheckboxField tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><CheckboxField name="testUi"/></Wrapper>);
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
    const component = shallow(<Wrapper><CheckboxField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Wrapper><CheckboxField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('check change event', () => {
    const event = jest.fn();
    const props = {
      onChange:event,
      name:'testUI'

    };
    const component = shallow(<Wrapper><CheckboxField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
    component.children().simulate('change');
    expect(event).toHaveBeenCalledTimes(1)
  });

  it('check focus event', () => {
    const event = jest.fn();
    const props = {
      onFocus:event,
      name:'testUI'

    };
    const component = shallow(<Wrapper><CheckboxField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
    component.children().simulate('focus');
    expect(event).toHaveBeenCalledTimes(1)
  });
});

