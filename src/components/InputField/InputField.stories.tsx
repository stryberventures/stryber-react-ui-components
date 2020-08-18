import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InputField } from './InputField';

import { Wrapper } from '../../storybook/components/Wrapper';

const ControlledInputField = () => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    if (value === 'clear') {
      setValue('');
    };
  }, [value]);

  return (
    <InputField
      controlled
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

storiesOf('Input field', module)
  .add('Text input', () => {
    return (
      <Wrapper>
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
        />
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Some text field"
        />
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Some initial value 123"
        />
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Disabled text field"
          disabled
        />
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Disabled text field"
          value="Some uneditable value"
          disabled
        />
        <InputField
          appendContent={<div>yyy</div>}
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with append"
          value="Value"
        />
        <ControlledInputField />
        <InputField
          large
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Some initial value 123"
        />
        <InputField
          large
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value=""
        />
        <InputField
          large
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value=""
          errorMessage="Error"
        />
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Bare component"
          large
          layout="bare"
        />
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Bare component ERROR"
          large
          layout="bare"
          errorMessage="Error"
        />
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Bare component"
          type="password"
          layout="bare"
        />
        <InputField
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Bare component ERROR"
          large
          type="password"
          layout="bare"
          errorMessage="Error"
        />
      </Wrapper>
    );
  })
  .add('Simple input', () => {
    return (
      <Wrapper>
        <InputField
          label="Label"
          layout="simple"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value=""
        />
        <InputField
          label="Label"
          layout="simple"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Text field with value"
        />
        <InputField
          label="Label"
          layout="simple"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Error value"
          errorMessage="Error message"
        />
        <InputField
          disabled
          label="Label"
          layout="simple"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Text field with value"
        />
        <InputField
          large
          label="Label"
          layout="simple"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value=""
        />
        <InputField
          large
          label="Label"
          layout="simple"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Text field with value"
        />
        <InputField
          large
          label="Label"
          layout="simple"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Error value"
          errorMessage="Error message"
        />
        <InputField
          large
          disabled
          label="Label"
          layout="simple"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Text field with value"
        />
        <InputField
          large
          label="Label InputField(simmple, mini)"
          layout="simple"
          sizeVariant="mini"
          onChange={(d: any) => console.log('InputField value:', d.target.value)}
          placeholder="Text field with initial value"
          value="Text field with value"
        />
      </Wrapper>
    );
  });
