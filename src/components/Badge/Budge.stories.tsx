import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';
import { Button } from '../Button';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Badge', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <Badge
          value={1}
        >
          <Button>Hello</Button>
        </Badge>
      </Wrapper>
    );
  });
