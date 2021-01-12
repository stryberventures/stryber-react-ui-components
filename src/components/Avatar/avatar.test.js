import React from 'react';
import { shallow } from 'enzyme';
import Avatar from "./Avatar";

describe('Avatar tests', () => {

  it('renders without crashing', () => {
    shallow(<Avatar />);
  });

  it('renders with props', () => {
    const props = {
      className:'testUI',
      sizeVariant:'normal',
    };
    const component = shallow(<Avatar {...props}/>);
    expect(component.hasClass(props.className)).toBe(true)
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Avatar {...props}/>);
    expect(component.find('input').props()).toEqual(expect.objectContaining(props));
  });

  it('check click event', () => {
    const clickEvent = jest.fn();
    const props = {
      onClick:clickEvent,

    };
    const component = shallow(<Avatar {...props}/>);
    component.simulate("click");
    expect(clickEvent).toHaveBeenCalledTimes(1)
  });

});

