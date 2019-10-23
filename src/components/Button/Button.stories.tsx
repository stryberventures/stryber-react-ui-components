import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Button', module)
  .add('with text', () => {
    const fakedClickHandler = () => alert('Hello world');
    return (
      <Wrapper>
        <Button variant="primary" onClick={ fakedClickHandler }>Primary</Button>
        <br/>
        <Button variant="secondary" onClick={ fakedClickHandler }>Secondary</Button>
      </Wrapper>
    );
  })
  .add('with some emoji', () => (
    <Wrapper>
      <Button>😀 😎 👍 💯</Button>
    </Wrapper>
  ));
