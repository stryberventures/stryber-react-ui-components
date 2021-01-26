import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { InputFieldLayout } from "./InputFieldLayout";

describe('InputFieldLayout tests', () => {

  it('renders without crashing', () => {
    shallow(<InputFieldLayout  isPlaceholderCollapsed/>);
  });

  it('renders with props', () => {
    const props = {
      sizeVariant: 'normal',
      placeholder: 'testPlaceholder',
      disabled: false,
      showPrependBackground: true,
      isPlaceholderCollapsed: false,
      loading: false,
      large: false,
    };
    const component = shallow(<InputFieldLayout {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<InputFieldLayout {...props}/>);
    expect(component.props()).toEqual(expect.objectContaining(props));
  });
});

