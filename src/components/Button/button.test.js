import React from 'react';
import { shallow } from 'enzyme';
import Button from "./Button";
import { Wrapper } from '../../storybook/components/Wrapper';

describe('Button tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><Button  children="testUI"/></Wrapper>);
  });

  it('renders with props', () => {
    const props = {
      className:'testUI',
      variant:'tertiary',
      disabled:true,
      shape: 'round',
      loading:false,
      children:'testUI'
    };
    const component = shallow(<Wrapper><Button {...props}/></Wrapper>);
    expect(component.props().children.props).toMatchObject(props);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Wrapper><Button {...props}/></Wrapper>);
    expect(component.props().children.props).toMatchObject(props);
  });

  it('check click event', () => {
    const clickEvent = jest.fn();
    const props = {
      onClick:clickEvent,
      children:'testUI'

    };
    const component = shallow(<Wrapper><Button {...props}/></Wrapper>);
    expect(component.props().children.props).toMatchObject(props);
    component.children().simulate("click");
    expect(clickEvent).toHaveBeenCalledTimes(1)
  });

});

