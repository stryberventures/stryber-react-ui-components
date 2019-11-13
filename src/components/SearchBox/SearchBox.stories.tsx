import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchBox } from './SearchBox';

import { Wrapper } from '../../storybook/components/Wrapper';

const SearchBoxTestComponent1 = (props: any) => {
  fetch('https://jsonplaceholder.typicode.com/users').then((results: any) => {
    console.log('results!!', results);
  });
  const [results] = React.useState([{ label: 'one' }, { label: 'two' }]);
  return(
    <SearchBox
      onChange={ (d: any) => console.log('SearchBox value:', d) }
      results={results}
    />
  );
};

storiesOf('Search Box', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <SearchBoxTestComponent1 />
        <SearchBox
          collapsiblePlaceholder={false}
          onChange={ (d: any) => console.log('SearchBox value:', d) }
        />
      </Wrapper>
    );
  });
