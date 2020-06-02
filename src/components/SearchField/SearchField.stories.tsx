import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchField } from './SearchField';

import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Search Field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <SearchField
          onChange={ (d: string) => console.log('SearchBox value:', d) }
          onEnter={ (d: string) => console.log(`onEnter('${d}')`)}
        />
        <SearchField
          collapsiblePlaceholder={false}
          onChange={ (d: string) => console.log('SearchBox value:', d) }
          onEnter={ (d: string) => console.log(`onEnter('${d}')`)}
        />
        <SearchField
          sizeVariant='mini'
          placeholder='Search mini'
          collapsiblePlaceholder={false}
          onChange={ (d: string) => console.log('SearchBox value:', d) }
          onEnter={ (d: string) => console.log(`onEnter('${d}')`)}
        />
        <SearchField
          sizeVariant='small'
          placeholder='Search small'
          collapsiblePlaceholder={false}
          onChange={ (d: string) => console.log('SearchBox small value:', d) }
          onEnter={ (d: string) => console.log(`onEnter('${d}')`)}
        />
        <SearchField
          sizeVariant='small'
          placeholder='Search Clickable'
          collapsiblePlaceholder={false}
          onChange={ (d: string) => console.log('SearchBox small value:', d) }
          onEnter={ (d: string) => console.log(`onEnter('${d}')`)}
          onSearchClick={ (d: string) => { console.log('Search clicked with value:', d)}}
          onClearClick={ (d: string) => { console.log('Clear clicked with value:', d)}}
        />
      </Wrapper>
    );
  });
