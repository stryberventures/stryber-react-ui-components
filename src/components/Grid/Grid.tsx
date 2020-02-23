import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Grid.styles';

/** Row */
export interface IRowProps {
  children?: any;
  className?: any;
}

const Row = (props: IRowProps & WithStyles<typeof styles>) => {
  const {
    children,
    classes,
    className,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.row,
        className,
      ]) }
    >
      { children }
    </div>
  );
};

/** Col */
export interface IColProps {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  children?: any;
  className?: any;
}

const Col = (props: IColProps & WithStyles<typeof styles>) => {
  const {
    children,
    xl, lg, md, sm, xs,
    classes,
    className,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.col,
        className,
      ]) }
    >
      { children }
    </div>
  );
};

/** Wrappers */
const StyledRow = withStyles(styles)(Row);
const PropsWrappedStyledRow = (props: IRowProps) => <StyledRow {...props} />;
const StyledCol = withStyles(styles)(Col);
const PropsWrappedStyledCol = (props: IColProps) => <StyledCol {...props} />;

/** Exports */
export default Row;
export {
  PropsWrappedStyledRow as Row,
  PropsWrappedStyledCol as Col,
};
