import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table';
import { Wrapper } from '../../storybook/components/Wrapper';

storiesOf('Table', module)
  .add('default', () => {
    const headRow = [
      {label: 'ID', id: 'id'},
      {label: 'Name', id: 'name'},
      {label: 'Email', id: 'email'},
      {label: 'Date created', id: 'date'},
    ];
    const rows = [
      {date: '1', email: 'some1@gmail.com', id: 'someid0', name: 'John 1'},
      {date: '2', email: 'some2@gmail.com', id: 'someid1', name: 'John 2'},
      {date: '3', email: 'some3@gmail.com', id: 'someid2', name: 'John 3'},
      {date: '4', email: 'some4@gmail.com', id: 'someid3', name: 'John 4'},
      {date: '5', email: 'some5@gmail.com', id: 'someid4', name: 'John 5'},
    ];
    return (
      <Wrapper>
        <div style={{width: '100%', padding: '15px'}}>
          <Table
            headerLabel={'Filters'}
            headRow={headRow}
            rows={rows}
          />
        </div>
      </Wrapper>
    );
  });
