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
          placeholder="Type something..."
        />
      </Wrapper>
    );
  });
