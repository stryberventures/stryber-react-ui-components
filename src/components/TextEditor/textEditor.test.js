import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import TextEditor from "./TextEditor";

describe('TextEditor tests', () => {

  it('renders without crashing', () => {
    shallow(<TextEditor />);
  });
});

