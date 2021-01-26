import React from 'react';
import { shallow } from 'enzyme';
import { InputField } from "./InputField";
import { Wrapper } from '../../storybook/components/Wrapper';

describe('InputField tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><InputField /></Wrapper>);
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
    const component = shallow(<Wrapper><InputField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Wrapper><InputField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
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
    const component = shallow(<Wrapper><InputField {...props}/></Wrapper>);
    component.children().simulate('change', event);
    expect(Change).toHaveBeenCalledTimes(1)
  });

  it('check focus event', () => {
    const event = jest.fn();
    const props = {
      onFocus:event,
    };
    const component = shallow(<Wrapper><InputField {...props}/></Wrapper>);
    component.children().simulate('focus');
    expect(event).toHaveBeenCalledTimes(1)
  });
});

