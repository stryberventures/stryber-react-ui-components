import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Table.styles';

interface TableProps {
  rows: any[];
  headRow: {label: string, id: string}[];
  headerLabel: string;
  perPage?: number;
  currPage?: number;
}

const Table = (props: TableProps & WithStyles<typeof styles>) => {
  const { headerLabel, headRow, rows, classes } = props;
  const getHeadRow = () =>
    headRow.map(cell =>
      <th key={cell.id} className={classes.cell}>{cell.label}</th>);

  const getRows = () => rows.map(row => (
    <tr key={row.id} className={classes.row}>
      {headRow.map((cell, index) => <td key={index} className={classes.cell}>{row[cell.id]}</td>)}
    </tr>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerLabel}>{headerLabel}</div>
      </div>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
        <tr className={classes.row}>
          {getHeadRow()}
        </tr>
        </thead>
        <tbody>
          {getRows()}
        </tbody>
      </table>
    </div>
  );
};

const StyledTable = withStyles(styles)(Table);

export default StyledTable;

export { StyledTable as Table };
