import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './TableRow.styles';
import classNames from 'classnames';

interface ITableRowProps {
  children?: any;
  className?: any;
}

const TableRow = (props: ITableRowProps & WithStyles<typeof styles>) => {
  const { children, classes, className } = props;

  return (
    <tr className={classNames(classes.root, className)}>
      {children}
    </tr>
  );
};

const StyledTableRow = withStyles(styles)(TableRow);
const PropsWrappedStyledTableRow = (props: ITableRowProps) => <StyledTableRow {...props} />;

export default PropsWrappedStyledTableRow;

export { PropsWrappedStyledTableRow as TableRow };
