import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PasswordField } from './PasswordField';
import { Wrapper } from '../../storybook/components/Wrapper';

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
  .add('Loading', () => {
    return (
      <Wrapper>
        <PasswordField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          loading={true}
        />
      </Wrapper>
    );
  });
