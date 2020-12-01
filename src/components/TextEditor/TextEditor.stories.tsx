import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Wrapper } from '../../storybook/components/Wrapper';
import TextEditor from "./TextEditor";

storiesOf('TextEditor', module)
  .add('Default', () => {
    return (
      <Wrapper>
        <TextEditor
          placeholder="Text Editor"
          label="Text editor"
        />
        <TextEditor
          placeholder="Text Editor"
          label="Text editor"
          errorMessage="Something went wrong"
          value="Default value"
        />
      </Wrapper>
    );
  })
  .add('Loading', () => {
    return (
      <Wrapper>
        <TextEditor
          placeholder="Text Editor"
          label="Text editor"
          loading={true}
        />
      </Wrapper>
    );
  });
