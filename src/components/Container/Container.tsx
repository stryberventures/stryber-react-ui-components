import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';
import styles from './Container.styles';

/** Interfaces */
export interface IContainerProps {
  className?: string;
  children?: any;
}

/** Main component */
const Container = (props: IContainerProps & WithStyles<typeof styles>) => {
  const {
    children,
    className,
    classes,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        className,
        classes.root,
      ]) }
    >
      { children }
    </div>
  );
};

/** Wrappers */
const StyledContainer = withStyles(styles)(Container);
const PropsWrappedStyledContainer = (props: IContainerProps) => <StyledContainer {...props} />;

/** Exports */
export default PropsWrappedStyledContainer;
export {
  PropsWrappedStyledContainer as Container,
};
