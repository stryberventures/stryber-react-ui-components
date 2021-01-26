import React from 'react';
import { shallow } from 'enzyme';
import { Wrapper } from '../../storybook/components/Wrapper';
import SelectField from "./SelectField";

describe('SelectField tests', () => {

  it('renders without crashing', () => {
    shallow(<Wrapper><SelectField  name="option"
                          choices={[
                            { value: '1', label: 'One' },
                            { value: '2', label: 'Two' },
                          ]} />
    </Wrapper>);
  });

  it('renders with props', () => {
    const props = {
      name:"option",
      placeholder:"Option",
      choices:[
          { value: '1', label: 'One' },
          { value: '2', label: 'Two' },
      ],
    onChange:jest.fn(),
    value:'1',
    };
    const component = shallow(<Wrapper><SelectField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('renders with rest', () => {
    const props = {
      testProp:'testRest',
      name:"option",
      placeholder:"Option",
      choices:[
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
      ],
      onChange:jest.fn(),
      value:'1',
    };
    const component = shallow(<Wrapper><SelectField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
  });

  it('check change event', () => {
    const event = jest.fn();
    const props = {
      name:"option",
      choices:[
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
      ],
      onChange:event,
    };
    const component = shallow(<Wrapper><SelectField {...props}/></Wrapper>);
    expect(component.props().children.props).toEqual(expect.objectContaining(props));
    component.children().simulate('change');
    expect(event).toHaveBeenCalledTimes(1)
  });

});

