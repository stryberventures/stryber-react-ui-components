import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import NavBurger from "./NavBurger";

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('NavbarDropdown tests', () => {

  it('renders without crashing', () => {
    shallow(<NavBurger />);
  });

  it('renders with props', () => {
    const props = {
      active: true,
    };
    const component = shallow(<NavBurger {...props}/>);
    expect(component.find('svg')).toHaveLength(1);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<NavBurger {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });


  it('check click event', () => {
    const event = jest.fn();
    const props = {
      onClick:event,
    };
    const component = shallow(<NavBurger {...props}/>);
    component.simulate('click');
    expect(event).toHaveBeenCalledTimes(1)
  });
});

