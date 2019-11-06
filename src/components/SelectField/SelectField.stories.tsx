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
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
          value={'1'}
        />
        <SelectField
          name="option"
          placeholder="Option"
          choices={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
      </Wrapper>
    );
  });
