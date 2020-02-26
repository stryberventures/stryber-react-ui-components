import * as React from 'react';
import TableContext, { VARIANT_BODY } from '../Table/TableContext';

interface ITableBodyProps {
  children?: any;
  className?: any;
}

const TableBody = ({ children, className}: ITableBodyProps) => (
  <TableContext.Provider value={{variant:VARIANT_BODY}}>
    <tbody className={className}>
      {children}
    </tbody>
  </TableContext.Provider>
);

export default TableBody;
export { TableBody };
