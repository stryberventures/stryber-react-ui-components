import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioField } from './RadioField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Radio field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <RadioField
          name="answer"
          placeholder="A"
          value="something"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
        <RadioField
          name="answer"
          placeholder="B"
          value="other"
          onChange={ (d: any) => console.log('InputField value:', d.target.value) }
        />
      </Wrapper>
    );
  });
