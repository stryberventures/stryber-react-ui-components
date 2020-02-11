import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchField } from './SearchField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Search Field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <SearchField
          onChange={ (d: any) => console.log('SearchBox value:', d) }
        />
        <SearchField
          collapsiblePlaceholder={false}
          onChange={ (d: any) => console.log('SearchBox value:', d) }
        />
        <SearchField
          sizeVariant='mini'
          placeholder='Search mini'
          collapsiblePlaceholder={false}
          onChange={ (d: any) => console.log('SearchBox value:', d) }
        />
      </Wrapper>
    );
  });
