import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchField } from './SearchField';

import { Wrapper } from '../../storybook/components/Wrapper';
import { Tag } from '../Tag';

storiesOf('Search Field', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <SearchField
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
        />
        <SearchField
          large
          placeholder='Search large'
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox small value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
        />
        <SearchField
          layout="simple"
          placeholder='Search simple'
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
          label="Simple search layout"
        />
        <SearchField
          large
          layout="simple"
          placeholder='Search simple'
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
          label="Simple large search layout"
        />
        <SearchField
          layout="bare"
          placeholder='Search simple'
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
          label="Simple search layout"
        />
        <SearchField
          large
          layout="bare"
          placeholder='Search simple'
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
          label="Simple large search layout"
        />
        <SearchField
          layout="simple"
          placeholder='Simple layout with tag example'
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
          label="Simple layout with tag example"
        />
        <div style={{ marginTop: 12 }}>
          <Tag shape="circle">Option 1</Tag>
          <Tag shape="circle">Option 2</Tag>
        </div>
        <SearchField
          layout="simple"
          placeholder='Mini simple search'
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
          sizeVariant="mini"
        />
        <SearchField
          collapsiblePlaceholder={false}
          onChange={(d: any) => console.log('SearchBox value:', d)}
          onEnter={value => console.log(`onEnter('${value}')`)}
          onClear={value => console.log(`onClear('${value}')`)}
          sizeVariant="mini"
          placeholder="Mini defoult search"
        />
      </Wrapper>
    );
  });
