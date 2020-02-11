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
          placeholder={"Dropdown with custom content"}
        >
          Some custom content here
        </DropDownField>
        <DropDownField
          onClose={() => {console.log("Dropdown onClose")}}
          placeholder={"Dropdown with label append content"}
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
  }).add('mini', () => {
    return (
      <Wrapper>
        <DropDownField
          onClose={() => {console.log("Dropdown onClose")}}
          placeholder={"Dropdown mini custom content custom  placeholder font"}
          customPlaceholderFont={true}
          sizeVariant={'mini'}
        >
          Some custom content here
        </DropDownField>
        <DropDownField
          placeholder={"Dropdown mini with radio buttons"}
          sizeVariant={'mini'}
        >
          <RadioField
            name="answer"
            placeholder="Option A"
            sizeVariant={'mini'}
            checked
            value="a"
            onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          />
          <RadioField
            name="answer"
            placeholder="Option B"
            sizeVariant={'mini'}
            value="b"
            onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          />
          <RadioField
            name="answer"
            placeholder="Option C"
            sizeVariant={'mini'}
            checked
            value="c"
            onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          />
          <RadioField
            name="answer"
            placeholder="Option D"
            sizeVariant={'mini'}
            value="d"
            onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          />
        </DropDownField>
      </Wrapper>
    );
  });

