import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Table.styles';
import classNames from 'classnames';

interface ITableProps {
  children?: any;
  className?: any;
  headerComponent?: any;
  border?: boolean;
  headerLabel?: string;
}

const Table = (props: ITableProps & WithStyles<typeof styles>) => {
  const { border = true, children, classes, className, headerLabel, headerComponent } = props;

  if (!headerLabel && !headerComponent) {
    return (
      <table className={classNames(classes.root, classes.table, className, {
        'withBorder': border,
      })}>
        {children}
      </table>
    );
  }

  return (
    <div className={classNames(classes.root, className, {
      'withBorder': border,
    })}>
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

/** Wrappers */
const StyledTable = withStyles(styles)(Table);
const PropsWrappedStyledTable = (props: ITableProps) => <StyledTable {...props} />;

export default PropsWrappedStyledTable;

export { PropsWrappedStyledTable as Table };
