import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './TableCell.styles';
import classNames from 'classnames';
import TableContext from '../Table/TableContext';

interface ITableCellProps {
  children?: any;
  className?: any;
  component?: any;
}


const TableCell = (props: ITableCellProps & WithStyles<typeof styles>) => {
  let Component;
  const { children, classes, className, component } = props;
  const tableContext = React.useContext(TableContext);

  if (component) {
    Component = component;
  } else {
    Component = tableContext.variant && tableContext.variant === 'head' ? 'th' : 'td';
  }

  return (
    <Component className={classNames(classes.root, className)}>
      {children}
    </Component>
  );
};

const StyledTable = withStyles(styles)(TableCell);

export default StyledTable;

export { StyledTable as TableCell };
