import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';
import { InputField } from '../InputField';
import { FileField } from '../FileField';
import { RadioField } from '../RadioField';
import { CheckboxField } from '../CheckboxField';
import { Slider } from '../Slider';
import { Button } from '../Button';
import TextEditor from '../TextEditor';
import * as yup from 'yup';

import { Wrapper } from '../../storybook/components/Wrapper';
import { SelectField } from '../SelectField';
import { MultiSelectField } from '../MultiSelectField';

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
            type="number"
          />) : null
      }
      {
        currentFormState.age ?
          (<>
            <RadioField
              name="select"
              placeholder="Option 1"
              value="option 1"
            />
            <RadioField
              name="select"
              placeholder="Option 2"
              value="option 2"
            />
            <RadioField
              name="select"
              placeholder="Option 3"
              value="option 3"
              disabled
            />
            <CheckboxField
              name="agree"
              placeholder="Terms and conditions"
            />
          </>) : null
      }
      <Button
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
          onReset={(formData: any) => {
            console.log('onReset external', formData);
          }}
          initialValues={{
            slider: 10,
            id: 12,
            gender: 'Male',
            first_name: 'Elon',
            last_name: 'Musk',
            select: 'option 1',
            textEditor: 'This is text editor'
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
          <RadioField
            name="select"
            placeholder="Option 1"
            value="option 1"
          />
          <RadioField
            name="select"
            placeholder="Option 2"
            value="option 2"
          />
          <RadioField
            name="select"
            placeholder="Option 3"
            value="option 3"
            disabled
          />
          <Slider
            name="slider"
          />
          <SelectField
            name="DropdownSelect"
            placeholder="Dropdown select value"
            choices={[
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
              { value: 3, label: 'Three' },
              { value: 4, label: 'Four' },
              { value: 5, label: 'Five' },
            ]}
          />
          <MultiSelectField
            name="DropdownMultiSelect"
            placeholder="Dropdown multi select value"
            choices={[
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
              { value: 3, label: 'Three' },
              { value: 4, label: 'Four' },
              { value: 5, label: 'Five' },
            ]}
          />
          <TextEditor
          name="textEditor"
          placeholder="Text Editor"
          />
          <CheckboxField
            name="agree"
            placeholder="Terms and conditions"
          />
          <Button
            type="reset"
          >
            Reset
          </Button>
          <Button
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
            cv: yup.string().required(),
            email: yup.string().email().required(),
            age: yup.number().required(),
            agree: yup.boolean().oneOf([true], 'Field must be checked'),
            someSelectField: yup.string().required(),
            someMultiSelectField: yup.string().required(),
            textEditor: yup.string().required()
          })}
        >
          <FileField
            name="additionalDocuments"
            accept=".pdf"
            placeholder="Multiple files input"
            multiple
          />
          <SelectField
            name="someSelectField"
            choices={[
              { label: 'Hello', value: 'hello' },
              { label: 'World', value: 'world' },
            ]}
          />
          <MultiSelectField
            name="someMultiSelectField"
            choices={[
              { label: 'Hello', value: 'hello' },
              { label: 'World', value: 'world' },
            ]}
          />
          <RadioField
            name="select"
            placeholder="Option 1"
            value="option 1"
          />
          <RadioField
            name="select"
            placeholder="Option 2"
            value="option 2"
          />
          <CheckboxField
            variant="switch"
            name="lights"
            placeholder="Lights"
          />
          <TextEditor
            name="textEditor"
            placeholder="Text Editor"
          />
          <CheckboxField
            name="agree"
            placeholder="Terms and conditions"
          />
          <Button
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
  });
