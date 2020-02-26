import * as React from 'react';

export const VARIANT_HEAD = 'head';
export const VARIANT_BODY = 'body';

const TableContext = React.createContext({
  variant: ''
});

export default TableContext;
