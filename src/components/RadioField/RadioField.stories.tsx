import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioField } from './RadioField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Selection Controls/Radio field', module)
  .add('default', () => {
    return (
      <Wrapper>
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
        <RadioField
          name="answer"
          placeholder="Option E"
          value="e"
          onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
          errorMessage="Error"
        />
      </Wrapper>
    );
  })
  .add('All unchecked', () => {
    return (
      <Wrapper>
        <RadioField
          name="answer"
          placeholder="Option A"
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
          value="c"
          onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
        />
        <RadioField
          name="answer"
          placeholder="Option D"
          value="d"
          onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
        />
      </Wrapper>
    );
  })
  .add('Radio sizes', () => {
    return (
      <Wrapper>
        <RadioField
          sizeVariant='small'
          name="answer"
          placeholder="Option A"
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
          sizeVariant='large'
          name="answer"
          placeholder="Option A"
          value="a"
          onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
        />
      </Wrapper>
    );
  })
  .add('Radio loading', () => {
    return (
      <Wrapper>
        <RadioField
          sizeVariant='small'
          name="answer"
          placeholder="Option A"
          value="a"
          loading={true}
          onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
        />
        <RadioField
          name="answer"
          placeholder="Option B"
          value="b"
          loading={true}
          onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
        />
        <RadioField
          sizeVariant='large'
          name="answer"
          placeholder="Option A"
          value="a"
          loading={true}
          onChange={ (d: any) => console.log('RadioField value:', d.target.value) }
        />
      </Wrapper>
    );
  });
