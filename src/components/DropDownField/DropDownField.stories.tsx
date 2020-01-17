import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DropDownField from './DropDownField';
import { Wrapper } from '../../storybook/components/Wrapper';
import { RadioField } from '../RadioField';

storiesOf('DropDownField', module)
  .add('normal', () => {
    return (
      <Wrapper>
        <DropDownField
          onClose={() => {console.log("Dropdown onClose")}}
          placeholder={"Dropdown with text"}
        >
          Some custom content here
        </DropDownField>
        <DropDownField
          onClose={() => {console.log("Dropdown onClose")}}
          placeholder={"Dropdown with text"}
          appendContent={"append content"}
        >
          Some custom content here
        </DropDownField>
        <DropDownField
          placeholder={"Drop down with Radio buttons"}
        >
          <RadioField
            name="answer"
            placeholder="Option A"
            checked
            value="a"
            onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          />
          <RadioField
            name="answer"
            placeholder="Option B"
            value="b"
            onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          />
          <RadioField
            name="answer"
            placeholder="Option C"
            checked
            value="c"
            onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          />
          <RadioField
            name="answer"
            placeholder="Option D"
            value="d"
            onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          />
        </DropDownField>
      </Wrapper>
    );
  });

