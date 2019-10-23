import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import styles from '../../styles/globalStyles';

interface IProps {
  children: any;
}

const GlobalStyles = ({
  children,
}: IProps & WithStyles<typeof styles>) => {
  return (
    <div>
      { children }
    </div>
  );
};

const WrappedGlobalStyles = withStyles(styles)(GlobalStyles);

export { WrappedGlobalStyles as GlobalStyles };
