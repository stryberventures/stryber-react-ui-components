import React from 'react';
import { shallow} from 'enzyme';
import Card from "./Card";
import { Wrapper } from '../../storybook/components/Wrapper';

describe('Card tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><Card children="testUI" /></Wrapper>);
  });

  it('renders with props', () => {
    const props = {
      className:'testUI',
      children:'testUI',
      shadow: 'normal',
      loading:false,
    };
    const component = shallow(<Wrapper><Card {...props}/></Wrapper>);
    expect(component.props().children.props).toMatchObject(props);
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest'
    };
    const component = shallow(<Wrapper><Card {...props}/></Wrapper>);
    expect(component.props().children.props).toMatchObject(props);
  });

});

