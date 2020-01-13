import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiSelectField } from './MultiSelectField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Multi Select field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <MultiSelectField
          name="option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
            { value: '3', label: 'Three' },
            { value: '4', label: 'Four' },
            { value: '5', label: 'Five' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <MultiSelectField
          name="option"
          placeholder="Option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
            { value: '3', label: 'Three' },
            { value: '4', label: 'Four' },
            { value: '5', label: 'Five' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <MultiSelectField
          name="option"
          placeholder="Option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
            { value: '3', label: 'Three' },
            { value: '4', label: 'Four' },
            { value: '5', label: 'Five' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          values={['1']}
        />
        <MultiSelectField
          name="option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
            { value: '3', label: 'Three' },
            { value: '4', label: 'Four' },
            { value: '5', label: 'Five' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          values={['1']}
        />
        <MultiSelectField
          name="option"
          placeholder="No badge values"
          showBadgeChoices={false}
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
            { value: '3', label: 'Three' },
            { value: '4', label: 'Four' },
            { value: '5', label: 'Five' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
      </Wrapper>
    );
  });
