import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import SelectField from "./SelectField";
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('SelectField tests', () => {

  it('renders without crashing', () => {
    shallow(<SelectField />);
  });

  it('renders with props', () => {
    const props = {
    name: 'testUI',
    value: 'testValue',
    placeholder: 'testPlaceholder',
    disabled: false,
    errorMessage: 'testError',
    loading: false,
    };
    const component = shallow(<SelectField {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<SelectField {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('check change event', () => {
    const event = jest.fn();
    const props = {
      onChange:event,
    };
    const component = shallow(<SelectField{...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
    component.simulate('change');
    expect(event).toHaveBeenCalledTimes(1)
  });

});

