import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { Navbar } from "./Navbar";

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar tests', () => {

  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('renders with props', () => {
    const props = {
      align: 'left',
    };
    const component = shallow(<Navbar {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Navbar {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

});

