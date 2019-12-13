import * as React from 'react';
import TableContext, { VARIANT_HEAD } from '../Table/TableContext';

interface ITableHeadProps {
  children?: any;
  className?: any;
}

const TableHead = ({children, className}: ITableHeadProps) => (
  <TableContext.Provider value={{variant:VARIANT_HEAD}}>
    <thead className={className}>
      {children}
    </thead>
  </TableContext.Provider>
);

export default TableHead;
export { TableHead };
