import * as React from 'react';
import TableCell from '../TableCell'
import { TableRow } from '../TableRow';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { Table } from '../Table';
import classNames from 'classnames';
import useStyles from './TableData.styles';

interface ITableDataProps {
  rows: any[];
  headerComponent?: any;
  headerLabel?: string;
  headRow: {label: string, id: string}[];
  perPage?: number;
  currPage?: number;
  className?: any;
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
}

const TableData = (props: ITableDataProps) => {
  const {
    headerLabel,
    headerComponent,
    headRow,
    rows,
    className,
    loading,
    loadingClassName,
    loadingStyle = {},
    ...rest
  } = props;

  const classes = useStyles();

  const getHeadRow = () =>
    headRow.map(cell =>
      <TableCell key={cell.id}>{cell.label}</TableCell>);

  const getRows = () => rows.map(row => (
    <TableRow key={row.id}>
      {headRow.map((cell, index) =>
        <TableCell key={index}>{row[cell.id]}</TableCell>)}
    </TableRow>
  ));

  if (loading) {
    return <div className={classNames(
      'loadingAnimation',
      classes.tableLoading,
      loadingClassName
    )} style={loadingStyle} />
  }

  return (
    <Table
      className={className}
      headerLabel={headerLabel}
      headerComponent={headerComponent}
      {...rest}
    >
      <TableHead>
        <TableRow>
          {getHeadRow()}
        </TableRow>
      </TableHead>
      <TableBody>
        {getRows()}
      </TableBody>
    </Table>
  );
};

export default TableData;

export { TableData };

