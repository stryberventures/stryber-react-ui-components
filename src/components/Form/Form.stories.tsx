import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';
import { InputField } from '../InputField';
import { Button } from '../Button';
import * as yup from 'yup';

import { Wrapper } from '../../storybook/components/Wrapper';

const ExternalFormControlExample = (props: any) => {
  const [currentFormState, updateFormState]: [any, any] = React.useState({});
  return (
    <Form
      {...props}
      onSubmit={(formData: any) => console.log('onSubmit external', formData)}
      onChange={(formData: any) => { console.log('onChange external', formData); updateFormState(formData) }}
      onError={(errorData: any, formData: any) => console.log('onError external', errorData, formData)}
      validationSchema={yup.object({
        email: yup.string().email().required(),
        age: yup.number().required(),
      })}
    >
      <InputField
        name="email"
        placeholder="Email"
      />
      {
        currentFormState.email ?
          (<InputField
            name="street"
            placeholder="Street"
            type="text"
          />) : null
      }
      {
        currentFormState.street ?
          (<InputField
            name="age"
            placeholder="Age"
          />) : null
      }
      <Button
        name="Submit"
        value="Submit"
        placeholder="Submit"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

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
          <Button
            name="Submit"
            value="Submit"
            placeholder="Submit"
            type="submit"
          >
            Submit
          </Button>
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
          <Button
            name="Submit"
            value="Submit"
            placeholder="Submit"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Wrapper>
    );
  })
  .add('With Validation', () => {
    return (
      <Wrapper>
        <Form
          onSubmit={(formData: any) => console.log('onSubmit external', formData)}
          onChange={(formData: any) => console.log('onChange external', formData)}
          onError={(errorData: any, formData: any) => console.log('onError external', errorData, formData)}
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
          <Button
            name="Submit"
            value="Submit"
            placeholder="Submit"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Wrapper>
    );
  })
  .add('With external control', () => {
    return (
      <Wrapper>
        <ExternalFormControlExample />
      </Wrapper>
    );
  })
