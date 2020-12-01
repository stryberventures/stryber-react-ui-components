import * as React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingSkeleton from './LoadingSkeleton';
import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('LoadingSkeleton', module)
  .add('default', () => {
    return (
      <Wrapper>
        <LoadingSkeleton style={{ height: 500 }} />
      </Wrapper>
    );
  });
