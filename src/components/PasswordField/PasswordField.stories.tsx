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
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <PasswordField
          value="difjsdfs"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <PasswordField
          placeholder="Password field with placeholder"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <PasswordField
          placeholder="Password field with placeholder"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          errorMessage="Something is not right"
        />
        <PasswordField
          value="difjsdfs"
          placeholder="Password field with placeholder"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <PasswordField
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Password field with prepend"
          value="Hello"
        />
        <PasswordField
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Password field with prepend"
          value="Hello"
          errorMessage="Something is not right"
        />
        <PasswordField
          placeholder="Password BARE"
          large
          layout="bare"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <PasswordField
          placeholder="Password BARE"
          large
          layout="bare"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          errorMessage="Something is not right"
        />
      </Wrapper>
    );
  })
