import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../../../styles/globalStyles';

interface IProps {
  children: any;
}

const GlobalStyles = (props: IProps & WithStyles<typeof styles>) => {
  const { children } = props;
  return (
    <>
      { children }
    </>
  );
};

const WrappedGlobalStyles = withStyles(styles)(GlobalStyles);
export { WrappedGlobalStyles as GlobalStyles };
