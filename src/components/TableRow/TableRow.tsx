import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './TableRow.styles';
import classNames from 'classnames';

interface ITableRowProps {
  [key: string]: any;
  children?: any;
  className?: any;
}

const TableRow = (props: ITableRowProps & WithStyles<typeof styles>) => {
  const { children, classes, className, ...otherProps } = props;

  return (
    <tr className={classNames(classes.root, className)} { ...otherProps }>
      {children}
    </tr>
  );
};

const StyledTableRow = withStyles(styles)(TableRow);
const PropsWrappedStyledTableRow = (props: ITableRowProps) => <StyledTableRow {...props} />;

export default PropsWrappedStyledTableRow;

export { PropsWrappedStyledTableRow as TableRow };
