import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Tag from "./Tag";

describe('Tag tests', () => {

  it('renders without crashing', () => {
    shallow(<Tag children="testUI" />);
  });


  it('check click event', () => {
    const clickEvent = jest.fn();
    const props = {
      onClick:clickEvent,
      children:'testUi',
    };
    const component = shallow(<Tag {...props}/>);
    expect(component.props()).toEqual(props);
    component.simulate("click");
    expect(clickEvent).toHaveBeenCalledTimes(1)
  });
});

