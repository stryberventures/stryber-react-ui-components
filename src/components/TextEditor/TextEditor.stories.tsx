import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Wrapper } from '../../storybook/components/Wrapper';
import TextEditor from "./TextEditor";

storiesOf('TextEditor', module)
  .add('Default', () => {
    return (
      <Wrapper>
        <TextEditor />
      </Wrapper>
    );
  });
