import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import SearchField from "./SearchField";
import { Wrapper } from '../../storybook/components/Wrapper';

describe('SearchField  tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><SearchField  /></Wrapper>);
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
    const component = shallow(<Wrapper><SearchField  {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Wrapper><SearchField  {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('check change event', () => {
    const event = jest.fn();
    const props = {
      onChange:event,
    };
    const component = shallow(<Wrapper><SearchField  {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
    component.children().simulate('change');
    expect(event).toHaveBeenCalledTimes(1)
  });

  it('check focus event', () => {
    const event = jest.fn();
    const props = {
      onFocus:event,
    };
    const component = shallow(<Wrapper><SearchField  {...props}/></Wrapper>);
    component.children().simulate('focus');
    expect(event).toHaveBeenCalledTimes(1)
  });

});

