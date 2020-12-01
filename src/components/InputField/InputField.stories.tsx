import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InputField } from './InputField';
import * as Grid from '../Grid';

import { Wrapper } from '../../storybook/components/Wrapper';

const ControlledInputField = () => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    if (value === 'clear') {
      setValue('');
    }
  }, [value]);

  return (
    <InputField
      controlled
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

const LoadingExample = () => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  })

  return (
    <>
      <InputField
        onChange={(d: any) => console.log('InputField value:', d.target.value)}
        placeholder="Text field with initial value"
        value="Text field with value"
        loading={isLoading}
      />
      <InputField
        onChange={(d: any) => console.log('InputField value:', d.target.value)}
        placeholder="Text field with initial value"
        value="Text field with value"
        loading={isLoading}
        large
      />
      <InputField
        onChange={(d: any) => console.log('InputField value:', d.target.value)}
        placeholder="Text field with initial value"
        value="Text field with value"
        loading={isLoading}
        large
        layout="simple"
        label="Test"
      />
      <InputField
        onChange={(d: any) => console.log('InputField value:', d.target.value)}
        placeholder="Text field with initial value"
        value="Text field with value"
        loading={isLoading}
        layout="simple"
        label="Test"
      />
      <InputField
        onChange={(d: any) => console.log('InputField value:', d.target.value)}
        placeholder="Text field with initial value"
        value="Text field with value"
        loading={isLoading}
        sizeVariant="mini"
      />
    </>
  )
}

storiesOf('Input field', module)
  .add('All types', () => {
    return (
      <Wrapper>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                name="name"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                name="id"
                errorMessage="Some generic error message"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                name="name"
                placeholder="First name"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                name="id"
                placeholder="Last name"
                errorMessage="Some generic error message"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="password"
                name="pass"
                placeholder="Password"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="password"
                name="pass"
                placeholder="Password"
                errorMessage="Some generic error message"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="number"
                name="age"
                placeholder="Age"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="number"
                name="age"
                placeholder="Age"
                errorMessage="Some generic error message"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                errorMessage="Some generic error message"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                name="name"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                name="id"
                errorMessage="Some generic error message"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                name="name"
                placeholder="First name"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                name="id"
                placeholder="Last name"
                errorMessage="Some generic error message"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="password"
                name="pass"
                placeholder="Password"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="password"
                name="pass"
                placeholder="Password"
                errorMessage="Some generic error message"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="number"
                name="age"
                placeholder="Age"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="number"
                name="age"
                placeholder="Age"
                errorMessage="Some generic error message"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
        <div>
          <Grid.Row>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                errorMessage="Some generic error message"
                layout="simple"
                label="Label"
              />
            </Grid.Col>
          </Grid.Row>
        </div>
      </Wrapper>
    )
  })
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
  })
  .add('Loading state', () => {
    return (
      <Wrapper>
        {/*<InputField*/}
        {/*  large*/}
        {/*  label="Label InputField(simmple, mini)"*/}
        {/*  layout="simple"*/}
        {/*  sizeVariant="mini"*/}
        {/*  onChange={(d: any) => console.log('InputField value:', d.target.value)}*/}
        {/*  placeholder="Text field with initial value"*/}
        {/*  value="Text field with value"*/}
        {/*  loading*/}
        {/*/>*/}
        <LoadingExample />
      </Wrapper>
    );
  });
