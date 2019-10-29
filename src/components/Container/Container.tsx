import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Container.styles';

interface ContainerProps {
  children?: any;
  [key: string]: any;
}

const Container = (props: ContainerProps & WithStyles<typeof styles>) => {
  const {
    children,
    classes,
    ...rest
  } = props;
  return (
    <div
      { ...rest }
      className={ classNames([
        classes.root,
      ]) }
    >
      { children }
    </div>
  );
};

const StyledContainer = withStyles(styles)(Container);

export {
  StyledContainer as Container,
};
