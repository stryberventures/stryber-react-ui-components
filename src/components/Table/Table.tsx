import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Table.styles';
import classNames from 'classnames';

interface ITableProps {
  children?: any;
  className?: any;
  headerComponent?: any;
  headerLabel?: string;
}

const Table = (props: ITableProps & WithStyles<typeof styles>) => {
  const { children, classes, className, headerLabel, headerComponent } = props;

  if (!headerLabel && !headerComponent) {
    return (
      <table className={classNames(classes.root, classes.table, className)}>
        {children}
      </table>
    );
  }

  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.header}>
        {headerLabel && <div className={classes.headerLabel}>{headerLabel}</div>}
        {headerComponent && <div className={classes.headerComponent}>{headerComponent}</div>}
      </div>
      <table className={classes.table}>
        {children}
      </table>
    </div>
  );
};

const StyledTable = withStyles(styles)(Table);

export default StyledTable;

export { StyledTable as Table };
