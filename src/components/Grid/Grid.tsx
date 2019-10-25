import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Grid.styles';

/** Row */
interface RowProps {
  children?: any;
  [key: string]: any;
}

const Row = (props: RowProps & WithStyles<typeof styles>) => {
  const {
    children,
    classes,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.row,
      ]) }
    >
      { children }
    </div>
  );
};

/** Col */
interface ColProps {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
  children?: any;
  [key: string]: any;
}

const Col = (props: ColProps & WithStyles<typeof styles>) => {
  const {
    children,
    xl, lg, md, sm, xs,
    classes,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.col,
      ]) }
    >
      { children }
    </div>
  );
};

const StyledRow = withStyles(styles)(Row);
const StyledCol = withStyles(styles)(Col);

export {
  StyledRow as Row,
  StyledCol as Col,
};
