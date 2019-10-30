import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InputField } from './InputField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Input field', module)
  .add('Text field', () => {
    return (
      <Wrapper>
        <InputField
          variant="primary"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <InputField
          variant="primary"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Some text field"
        />
        <InputField
          variant="primary"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Text field with initial value"
          value="Some initial value 123"
        />
        <InputField
          variant="primary"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Disabled text field"
          value="Some uneditable value"
          disabled
        />
      </Wrapper>
    );
  });
