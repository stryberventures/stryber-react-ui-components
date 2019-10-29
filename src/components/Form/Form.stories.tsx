import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';
import { InputField } from '../InputField';
import * as yup from 'yup';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Form', module)
  .add('Login', () => {
    return (
      <Wrapper>
        <Form
          onSubmit={(formData: any) => {
            console.log('onSubmit external', formData);
          }}
        >
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
  })
  .add('Initial values', () => {
    return (
      <Wrapper>
        <Form
          onSubmit={(formData: any) => {
            console.log('onSubmit external', formData);
          }}
          initialValues={{
            id: 12,
            gender: 'Male',
            first_name: 'Elon',
            last_name: 'Musk'
          }}
        >
          <InputField
            name="id"
            placeholder="ID"
          />
          <InputField
            name="first_name"
            placeholder="First Name"
          />
          <InputField
            name="last_name"
            placeholder="Last Name"
          />
          <InputField
            name="gender"
            placeholder="Gender"
          />
          <InputField
            name="Submit"
            value="Submit"
            placeholder="Submit"
            type="submit"
          />
        </Form>
      </Wrapper>
    );
  })
  .add('With Validation', () => {
    return (
      <Wrapper>
        <Form
          onSubmit={(formData: any) => {
            console.log('onSubmit external', formData);
          }}
          initialValues={{
            age: '',
            email: '',
          }}
          validationSchema={yup.object({
            email: yup.string().email().required(),
            age: yup.number().required(),
          })}
        >
          <InputField
            name="email"
            placeholder="Email"
          />
          <InputField
            name="age"
            placeholder="Age"
          />
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
