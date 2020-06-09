import * as React from 'react';
import { storiesOf } from '@storybook/react';

import NavBurger from './NavBurger';
import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('NavBurger', module)
  .add('default', () => {
    return (
      <Wrapper>
        <NavBurger />
        <NavBurger active onClick={() => console.log('Test')} />
      </Wrapper>
    );
  });
