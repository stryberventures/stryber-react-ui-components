import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import NavbarDropdown from "./NavbarDropdown";

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('NavbarDropdown tests', () => {

  it('renders without crashing', () => {
    shallow(<NavbarDropdown />);
  });

  it('renders with props', () => {
    const props = {
      title: 'testTitle',
      options:[{ text: 'testUI'}]
    };
    const component = shallow(<NavbarDropdown {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<NavbarDropdown {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

});

