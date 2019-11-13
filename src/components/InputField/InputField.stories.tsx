import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InputField } from './InputField';
import { Profile as ProfileIcon } from '../Icons';

import { Wrapper } from '../../storybook/components/Wrapper';
import { FileField } from '../FileField';
import AppendContent from '../FileField/AppendContent';

storiesOf('Input field', module)
  .add('Text input', () => {
    return (
      <Wrapper>
        <FileField
          id="cv"
          name="cv"
          accept=".pdf"
          placeholder="Single file field"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          appendContent={(files, errorMsg) => <AppendContent files={files} errorMsg={errorMsg} />}
          inputText={(filesNumber: number) => `${filesNumber} uploaded ${filesNumber === 1 ? 'file' : 'files'}`}
        />
        <FileField
          id="additionalFiles"
          name="additionalFiles"
          accept=".pdf"
          placeholder="Multiple files field with error"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          appendContent={(files, errorMsg) => <AppendContent files={files} errorMsg={errorMsg} />}
          errorMessage="Error message"
          inputText={(filesNumber: number) => `${filesNumber} uploaded ${filesNumber === 1 ? 'file' : 'files'}`}
          multiple
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Some text field"
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Text field with initial value"
          value="Some initial value 123"
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Disabled text field"
          disabled
        />
        <InputField
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Disabled text field"
          value="Some uneditable value"
          disabled
        />
        <InputField
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Disabled text field"
          value="Some uneditable value"
          disabled
        />
        <InputField
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Error text field"
          value="Error value"
          errorMessage="Error message"
        />
        <InputField
          prependContent={<ProfileIcon />}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Text field with prepend"
          value="Hello"
        />
        <InputField
          appendContent={<div>yyy</div>}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          placeholder="Text field with append"
          value="Value"
        />
          <InputField
            prependContent={<ProfileIcon />}
            appendContent={<div>yyy</div>}
            onChange={ (d: any) => console.log('InputField value:', d.target.value) }
            placeholder="Text field with append and prepend"
            value="Value"
          />
      </Wrapper>
    );
  });
