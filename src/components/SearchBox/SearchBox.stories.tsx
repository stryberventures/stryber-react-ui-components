import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ISearchResult , SearchBox} from './SearchBox';

import { Wrapper } from '../../storybook/components/Wrapper';

const SearchBoxTestComponent1 = (props: any) => {
  const [results, setResults] = React.useState([{ label: 'one' }, { label: 'two' }]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => setResults(data.map((d: any) => ({
        label: d.name,
        href: 'https://jsonplaceholder.typicode.com/users',
      }))));
  }, []);
  return(
    <SearchBox
      onChange={ (d: any) => console.log('SearchBox value:', d) }
      results={results}
    />
  );
};

const SearchBoxTestComponent2 = (props: any) => {
  const names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
  const filterResults = (value: string) => {
    return names
      .filter((n: string) => (n || '').toLowerCase().includes(value.toLowerCase()))
      .map((d) => ({
        label: d,
        onClick: () => alert(d),
      })) as ISearchResult[];
  };
  const [results, setResults] = React.useState(filterResults(''));

  return(
    <SearchBox
      onChange={ (d: string) => setResults(() => filterResults(d)) }
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
