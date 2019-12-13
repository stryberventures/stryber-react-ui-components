import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table';
import { Wrapper } from '../../storybook/components/Wrapper';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';

const HEAD_ROW = [
  {label: 'Name', id: 'name'},
  {label: 'Website', id: 'website'},
  {label: 'City', id: 'city'},
  {label: 'Date created', id: 'date'},
];

const ROWS = [
  {id: 1, date: '2019-01-01', city: 'Boston', website: 'https://www.stackinfra.com/', name: 'Stack Infrastructure'},
  {id: 2, date: '2019-01-01', city: 'Philadelphia', website: 'https://www.theprsreit.com/', name: 'Clear Creek Midstream'},
  {id: 3, date: '2019-01-01', city: 'Menlo Park', website: 'http://madewithmotif.com/', name: 'The PRS REIT'},
  {id: 4, date: '2019-01-01', city: 'New York', website: 'http://www.ajaxhealth.com', name: 'Motif FoodWorks'},
  {id: 5, date: '2019-01-01', city: 'George Town', website: 'http://en.evcar.com/', name: 'Passage Bio'},
  {id: 6, date: '2019-01-01', city: 'Denver', website: 'http://authenticbrandsgroup.com', name: 'Cygnus'},
  {id: 7, date: '2019-01-01', city: 'Manchester', website: 'https://www.cavalcademidstream.com/', name: 'Zhidou'},
];

storiesOf('Table', module)
  .add('Based on table components', () => {
    const getContent = (id:string, content: string) => {
      switch(id) {
        case 'website':
          return <a href={content} target="_blank">{content}</a>;
        case 'name':
          return <h5>{content}</h5>;
        default:
          return content;
      }
    };

    return (
      <Wrapper>
        <div style={{width: '100%', padding: '15px'}}>
          <Table>
            <TableHead>
              <TableRow>
                {
                  HEAD_ROW.map(({label})=>
                    <TableCell key={label}>
                      {label}
                    </TableCell>
                  )
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                ROWS.map((rowItem)=>
                  <TableRow key={rowItem.id}>
                    {
                      HEAD_ROW.map(({id}, index) =>
                        <TableCell key={index}>
                          {getContent(id, rowItem[id])}
                        </TableCell>
                      )
                    }
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </div>
      </Wrapper>
    );
  });
