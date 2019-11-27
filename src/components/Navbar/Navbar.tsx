import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Navbar.styles';

/** Interfaces */
export interface INavbarProps {
  children?: any;
}

/** Main component */
const Navbar = (props: INavbarProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    ...rest
  } = props;

  return (
    <div className={classNames(className, classes.root)} {...rest}>
      { children }
    </div>
  );
};

/** Wrappers */
const StyledNavbar = withStyles(styles)(Navbar);
const PropsWrappedStyledNavbar = (props: INavbarProps & React.HTMLProps<HTMLDivElement>) => <StyledNavbar {...props} />;

/** Exports */
export default PropsWrappedStyledNavbar;
export {
  PropsWrappedStyledNavbar as Navbar,
};
