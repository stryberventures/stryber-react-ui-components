import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PasswordField } from './PasswordField';
import { Wrapper } from '../../storybook/components/Wrapper';
import { Profile as ProfileIcon } from "../Icons";

storiesOf('Password field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <PasswordField
          variant="primary"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <PasswordField
          variant="primary"
          placeholder="Password"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <PasswordField
          variant="primary"
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Password field with prepend"
          value="Hello"
        />
      </Wrapper>
    );
  });
