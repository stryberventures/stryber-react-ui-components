import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TableData from './TableData';
import { Wrapper } from '../../storybook/components/Wrapper';
import { SearchBox } from '../SearchBox';

const headRow = [
  {label: 'Name', id: 'name'},
  {label: 'Website', id: 'id'},
  {label: 'City', id: 'city'},
  {label: 'Date created', id: 'date'},
];
const rows = [
  {date: '2019-01-01', city: 'Boston', id: 'https://www.stackinfra.com/', name: 'Stack Infrastructure'},
  {date: '2019-01-01', city: 'Philadelphia', id: 'https://www.theprsreit.com/', name: 'Clear Creek Midstream'},
  {date: '2019-01-01', city: 'Menlo Park', id: 'http://madewithmotif.com/', name: 'The PRS REIT'},
  {date: '2019-01-01', city: 'New York', id: 'http://www.ajaxhealth.com', name: 'Motif FoodWorks'},
  {date: '2019-01-01', city: 'George Town', id: 'http://en.evcar.com/', name: 'Passage Bio'},
  {date: '2019-01-01', city: 'Denver', id: 'http://authenticbrandsgroup.com', name: 'Cygnus'},
  {date: '2019-01-01', city: 'Manchester', id: 'https://www.cavalcademidstream.com/', name: 'Zhidou'},
];
storiesOf('Data Table', module)
  .add('default', () => (
    <Wrapper>
      <div style={{width: '100%', padding: '15px'}}>
        <TableData
          headRow={headRow}
          rows={rows}
        />
      </div>
    </Wrapper>
  ))
  .add('loading', () => (
    <Wrapper>
      <div style={{width: '100%', padding: '15px'}}>
        <TableData
          loading={true}
          headRow={headRow}
          rows={rows}
        />
      </div>
    </Wrapper>
  ))
  .add('With title', () => (
    <Wrapper>
      <div style={{width: '100%', padding: '15px'}}>
        <TableData
          headerLabel={'Title'}
          headRow={headRow}
          rows={rows}
        />
      </div>
    </Wrapper>
  ))
  .add('With title and component', () => (
    <Wrapper>
      <div style={{width: '100%', padding: '15px'}}>
        <TableData
          headerLabel={'Title and component'}
          headRow={headRow}
          rows={rows}
          headerComponent={
            <div style={{width: '200px'}}>
              <SearchBox onChange={(d: any) => console.log('SearchBox value:', d)}/>
            </div>
          }
        />
      </div>
    </Wrapper>
  ));
