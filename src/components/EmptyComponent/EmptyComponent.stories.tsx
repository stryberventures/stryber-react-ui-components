import * as React from 'react';
import { storiesOf } from '@storybook/react';
import EmptyComponent from './EmptyComponent';

storiesOf('EmptyComponent', module)
  .add('with text', () => {
    return (
      <div>
        <EmptyComponent />
      </div>
    );
  });
