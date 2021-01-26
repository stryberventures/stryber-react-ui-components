import React from 'react';
import { shallow } from 'enzyme';
import TextEditor from "./TextEditor";

describe('TextEditor tests', () => {

  it('renders without crashing', () => {
    shallow(<TextEditor />);
  });
});

