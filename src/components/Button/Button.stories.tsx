import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Button', module)
  .add('with text', () => {
    const fakedClickHandler = () => console.log('Button clicked!');
    return (
      <Wrapper>
        <Button type="submit" variant="primary" onClick={ fakedClickHandler }>Primary</Button>
        <Button variant="secondary" onClick={ fakedClickHandler }>Secondary</Button>
      </Wrapper>
    );
  })
  .add('with some emoji', () => (
    <Wrapper>
      <Button>😀 😎 👍 💯</Button>
    </Wrapper>
  ));
