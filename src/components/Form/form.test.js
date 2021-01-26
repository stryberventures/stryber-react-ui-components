import React from 'react';
import { shallow } from 'enzyme';
import { Form } from "./Form";
import { Wrapper } from '../../storybook/components/Wrapper';

describe('Form tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><Form children="testUI"/></Wrapper>);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest',
      children:"testUI"
    };
    const component = shallow(<Wrapper><Form {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
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
    const component = shallow(<Wrapper><Form {...props}/></Wrapper>);
    component.children().simulate('submit', event);
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
    const component = shallow(<Wrapper><Form {...props}/></Wrapper>);
    component.children().simulate('reset', event);
    expect(Reset).toHaveBeenCalledTimes(1)
  });
});

