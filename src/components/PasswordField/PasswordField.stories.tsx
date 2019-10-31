import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PasswordField } from './PasswordField';
import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Password field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <PasswordField
          variant="primary"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
      </Wrapper>
    );
  });
