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
          onEnter={ value => console.log(`onEnter('${value}')`)}
        />
        <SearchField
          collapsiblePlaceholder={false}
          onChange={ (d: any) => console.log('SearchBox value:', d) }
          onEnter={ value => console.log(`onEnter('${value}')`)}
        />
        <SearchField
          sizeVariant='mini'
          placeholder='Search mini'
          collapsiblePlaceholder={false}
          onChange={ (d: any) => console.log('SearchBox value:', d) }
          onEnter={ value => console.log(`onEnter('${value}')`)}
        />
        <SearchField
          sizeVariant='small'
          placeholder='Search small'
          collapsiblePlaceholder={false}
          onChange={ (d: any) => console.log('SearchBox small value:', d) }
          onEnter={ value => console.log(`onEnter('${value}')`)}
        />
      </Wrapper>
    );
  });
