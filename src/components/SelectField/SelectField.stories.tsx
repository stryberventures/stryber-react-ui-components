import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SelectField } from './SelectField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Select field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <SelectField
          name="option"
          placeholder="Option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          value={'1'}
        />
        <SelectField
          name="option"
          placeholder="Option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
        <SelectField
          name="option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          value={'1'}
          showPrependBackground={false}
        />
        <SelectField
          name="option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
        />
      </Wrapper>
    );
  })
  .add('loading', () => {
    return (
      <Wrapper>
        <SelectField
          name="option"
          placeholder="Option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          loading={true}
        />
        <SelectField
          name="option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={ (d: any) => console.log('SelectField value:', d) }
          value={'1'}
          showPrependBackground={false}
          loading={true}
        />
      </Wrapper>
    );
  });
