import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';
import { InputField } from '../InputField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Form', module)
  .add('Login', () => {
    return (
      <Wrapper>
        <Form onSubmit={(formData: any) => {
          console.log('onSubmit external', formData);
        }}>
          <InputField
            name="email"
            placeholder="Email"
            type="email"
          />
          <div>
            <InputField
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <InputField
            name="Submit"
            value="Submit"
            placeholder="Submit"
            type="submit"
          />
        </Form>
      </Wrapper>
    );
  });
