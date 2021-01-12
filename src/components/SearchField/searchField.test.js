import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import SearchField from "./SearchField";
import {InputField} from "../InputField";
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('SearchField  tests', () => {

  it('renders without crashing', () => {
    shallow(<SearchField  />);
  });

  it('renders with props', () => {
    const props = {
    value: 'testValue',
    placeholder: 'testPlaceholder',
    disabled: false,
    layout: 'default',
    errorMessage: 'testError',
    sizeVariant: 'small',
    loading: false,
    };
    const component = shallow(<SearchField  {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<SearchField {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('check change event', () => {
    const event = jest.fn();
    const props = {
      onChange:event,
    };
    const component = shallow(<SearchField {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
    component.simulate('change');
    expect(event).toHaveBeenCalledTimes(1)
  });

  it('check focus event', () => {
    const event = jest.fn();
    const props = {
      onFocus:event,
    };
    const component = shallow(<InputField {...props}/>);
    component.simulate('focus');
    expect(event).toHaveBeenCalledTimes(1)
  });

});

