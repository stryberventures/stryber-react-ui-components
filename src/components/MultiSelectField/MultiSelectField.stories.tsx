import * as React from 'react';
import * as Yup from 'yup';
import { storiesOf } from '@storybook/react';
import { Wrapper } from '../../storybook/components/Wrapper';
import { Form } from '../Form';
import { Button } from '../Button';
import { MultiSelectField } from './MultiSelectField';

const CHOICES = [
  { value: 'de_CH', label: 'DE' },
  { value: 'en_US', label: 'EN' },
];
const initialValues = {
  languages: ['de_CH'],
}
const InfoSchema = Yup.object().shape({
  languages: Yup.array().required('Field is required'),
});

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
  .add('Simple', () => {
    return (
      <Wrapper>
        <MultiSelectField
          label="Label"
          layout="simple"
          name="option"
          choices={CHOICES.slice(0, 8)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <MultiSelectField
          label="Label"
          layout="simple"
          name="option"
          placeholder="Option"
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <MultiSelectField
          label="Label"
          layout="simple"
          name="option"
          showBadgeChoices={false}
          placeholder="SearchField"
          search={true}
          choices={[...CHOICES]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <MultiSelectField
          label="Label"
          layout="simple"
          name="option"
          placeholder="Append content"
          appendContent={'Content '}
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          values={['1']}
        />
        <MultiSelectField
          label="Label"
          layout="simple"
          name="option"
          placeholder="Option"
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          values={['1']}
        />
        <MultiSelectField
          label="Label"
          layout="simple"
          name="option"
          choices={CHOICES.slice(0, 5)}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          values={['1']}
        />
        <MultiSelectField
          label="Label"
          layout="simple"
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
  })
  .add('In form', () => {
    return (
      <Wrapper>
        <Form
          initialValues={initialValues}
          validationSchema={InfoSchema}
        >
          <MultiSelectField
            name="languages"
            placeholder="Option"
            choices={CHOICES}
            onChange={ (d: any) => console.log('SelectField value:', d) }
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    );
  });
