import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './TableRow.styles';
import classNames from 'classnames';
import {useContext} from 'react';

import TableContext, { VARIANT_BODY } from '../Table/TableContext';

interface ITableRowProps {
  [key: string]: any;
  children?: any;
  className?: any;
}

const TableRow = (props: ITableRowProps & WithStyles<typeof styles>) => {
  const { children, classes, className, ...otherProps } = props;
  const { variant } = useContext(TableContext);

  return (
    <tr className={classNames(
      classes.root,
      variant === VARIANT_BODY ? classes.bodyRow : null,
      className)} { ...otherProps }>
      {children}
    </tr>
  );
};

const StyledTableRow = withStyles(styles)(TableRow);
const PropsWrappedStyledTableRow = (props: ITableRowProps) => <StyledTableRow {...props} />;

export default PropsWrappedStyledTableRow;

export { PropsWrappedStyledTableRow as TableRow };
