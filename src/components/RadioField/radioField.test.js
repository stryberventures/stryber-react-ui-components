import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import RadioField from "./RadioField";
import { Wrapper } from '../../storybook/components/Wrapper';

describe('RadioField tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><RadioField /></Wrapper>);
  });

  it('renders with props', () => {
    const props = {
      name:"answer",
      placeholder:"Option A",
      checked:true,
      value:"a"
    };
    const component = shallow(<Wrapper><RadioField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      name:"answer",
      placeholder:"Option A",
      checked:true,
      value:"a",
      testProp:'testRest'
    };
    const component = shallow(<Wrapper><RadioField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('check change event', () => {
    const event = jest.fn();
    const props = {
      onChange:event,
      name:"answer",
      value:"a"
    };
    const component = shallow(<Wrapper><RadioField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
    component.children().simulate('change');
    expect(event).toHaveBeenCalledTimes(1)
  });

  it('check focus event', () => {
    const event = jest.fn();
    const props = {
      onFocus:event,
      name:"answer",
      value:"a"
    };
    const component = shallow(<Wrapper><RadioField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
    component.children().simulate('focus');
    expect(event).toHaveBeenCalledTimes(1)
  });
});

