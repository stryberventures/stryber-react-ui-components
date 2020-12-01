import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './Pagination';

import { Wrapper } from '../../storybook/components/Wrapper';

const PaginationWithCollapseFactorExample = () => {
  const [currPage, updatePage] = React.useState(0);
  return (
    <Wrapper>
      <div style={{width: '100%', padding: '15px'}}>
        <div style={{padding: '15px 0'}}>Collapse factor 1</div>
        <Pagination
          onChange={(index)=>{updatePage(index)}}
          currPage={currPage}
          pageCount={15}
          collapseFactor={1}
        />
        <div style={{padding: '15px 0'}}>Collapse factor 2</div>
        <Pagination
          onChange={(index)=>{updatePage(index)}}
          currPage={currPage}
          pageCount={14204}
          collapseFactor={2}
        />
      </div>
    </Wrapper>
  );
};
storiesOf('Pagination', module)
  .add('default', () => {
    return (
      <Wrapper>
        <div style={{width: '100%', padding: '15px'}}>
          <Pagination
            onChange={(index)=>{console.log('Move to ', index + 1)}}
            currPage={2}
            pageCount={9}
          />
        </div>
      </Wrapper>
    );
  })
  .add('with collapse factor', () => <PaginationWithCollapseFactorExample/>)
  .add('loading', () => {
    return (
      <Wrapper>
        <div style={{width: '100%', padding: '15px'}}>
          <Pagination
            onChange={(index)=>{console.log('Move to ', index + 1)}}
            currPage={2}
            pageCount={9}
            loading={true}
          />
        </div>
      </Wrapper>
    );
  });

