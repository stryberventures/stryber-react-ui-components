import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Container.styles';

interface ContainerProps {
  children?: any;
  [key: string]: any;
}

const Container = ({
  children,
  classes,
  ...rest
}: ContainerProps & WithStyles<typeof styles>) => {
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
