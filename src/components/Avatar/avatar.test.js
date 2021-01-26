import React from 'react';
import { shallow } from 'enzyme';
import Avatar from "./Avatar";
import { Wrapper } from '../../storybook/components/Wrapper';

describe('Avatar tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><Avatar /></Wrapper>);
  });

  it('renders with props', () => {
    const props = {
      className:'testUI',
      sizeVariant:'normal',
    };
    const component = shallow(<Wrapper><Avatar {...props}/></Wrapper>);
    expect(component.children().hasClass(props.className)).toBe(true)
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Wrapper><Avatar {...props}/></Wrapper>);
    expect(component.children().props()).toEqual(expect.objectContaining(props));
  });

  it('check click event', () => {
    const clickEvent = jest.fn();
    const props = {
      onClick:clickEvent,

    };
    const component = shallow(<Wrapper><Avatar {...props}/></Wrapper>);
    component.children().simulate("click");
    expect(clickEvent).toHaveBeenCalledTimes(1)
  });

});

