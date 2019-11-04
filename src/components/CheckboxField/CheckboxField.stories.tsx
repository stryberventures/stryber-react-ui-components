import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxField } from './CheckboxField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Checkbox field', module)
  .add('Checkbox', () => {
    return (
      <Wrapper>
        <CheckboxField
          placeholder="Option A"
          value="a"
          name="answer"
        />
        <CheckboxField
          placeholder="Option B"
          checked
          value="b"
          name="answer"
        />
      </Wrapper>
    );
  })
  .add('Switch', () => {
    return (
      <Wrapper>
        <CheckboxField
          placeholder="Option A"
          value="a"
          name="answer"
          variant="switch"
        />
        <CheckboxField
          placeholder="Option B"
          checked
          value="b"
          name="answer"
          variant="switch"
        />
      </Wrapper>
    );
  });

