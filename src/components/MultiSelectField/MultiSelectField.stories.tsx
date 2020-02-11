import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiSelectField } from './MultiSelectField';
import { Wrapper } from '../../storybook/components/Wrapper';

const CHOICES = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' },
  { value: '6', label: 'Six' },
  { value: '7', label: 'Seven' },
  { value: '8', label: 'Eight' },
  { value: '9', label: 'Nine' },
  { value: '10', label: 'Ten' },
  { value: '11', label: 'Eleven' },
  { value: '12', label: 'Twelve' },
  { value: '13', label: 'Thirteen' },
  { value: '14', label: 'Fourteen' },
];

storiesOf('Multi Select field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <MultiSelectField
          name="option"
          choices={CHOICES.slice(0, 8)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <MultiSelectField
          name="option"
          placeholder="Option"
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <MultiSelectField
          name="option"
          showBadgeChoices={false}
          placeholder="SearchField"
          search={true}
          choices={[...CHOICES]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <MultiSelectField
          name="option"
          placeholder="Append content"
          appendContent={'Content '}
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          values={['1']}
        />
        <MultiSelectField
          name="option"
          placeholder="Option"
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          values={['1']}
        />
        <MultiSelectField
          name="option"
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          values={['1']}
        />
        <MultiSelectField
          name="option"
          placeholder="No badge values"
          showBadgeChoices={false}
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
      </Wrapper>
    );
  })
  .add('Mini' , () => {
    return (
      <Wrapper>
        <MultiSelectField
          name="option"
          placeholder="Mini multiselect"
          showBadgeChoices={false}
          choices={[...CHOICES]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          sizeVariant="mini"
        />
        <MultiSelectField
          name="option"
          placeholder="Mini multiselect custom font placeholder"
          customPlaceholderFont={true}
          showBadgeChoices={false}
          choices={[...CHOICES]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          sizeVariant="mini"
        />
        <MultiSelectField
          search
          name="option"
          placeholder="Mini multiselect with search"
          showBadgeChoices={false}
          choices={[...CHOICES]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          sizeVariant="mini"
        />
      </Wrapper>
    );
  });
