import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import TextInput from "./TextInput";
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('TextInput tests', () => {

  it('renders without crashing', () => {
    shallow(<TextInput />);
  });
});

