import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ISearchResult , SearchBox} from './SearchBox';

import { Wrapper } from '../../storybook/components/Wrapper';

const SearchBoxTestComponent1 = (props: any) => {
  const [results, setResults] = React.useState([{ label: 'one' }, { label: 'two' }]);

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) => setResults(data.map((d: any) => ({ label: d.name }))));
  return(
    <SearchBox
      onChange={ (d: any) => console.log('SearchBox value:', d) }
      results={results}
    />
  );
};

const SearchBoxTestComponent2 = (props: any) => {
  const names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
  const [results, setResults] = React.useState(names.map((d) => ({ label: d })) as ISearchResult[]);

  return(
    <SearchBox
      onChange={ (d: string) => setResults(names.filter((n: string) => (n || '').toLowerCase().includes(d.toLowerCase())).map(d => ({ label: d }))) }
      results={results}
    />
  );
};

storiesOf('Search Box', module)
  .add('Normal', () => {
    return (
      <Wrapper>
        <SearchBoxTestComponent1 />
        <SearchBoxTestComponent2 />
      </Wrapper>
    );
  });
