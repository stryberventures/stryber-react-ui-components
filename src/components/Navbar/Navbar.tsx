import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Navbar.styles';

/** Interfaces */
export interface INavbarProps extends React.HTMLProps<HTMLDivElement> {
  children?: any;
}

export interface INavbarSectionProps extends React.HTMLProps<HTMLDivElement> {
  align: 'left' | 'center' | 'right';
}

/** Main component */
const Navbar = (props: INavbarProps & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    ...rest
  } = props;

  return (
    <div className={classNames(classes.navbar, className)} {...rest}>
      { children }
    </div>
  );
};

const NavbarSection = (props: INavbarSectionProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    align,
    ...rest
  } = props;

  return (
    <div
      className={classNames([
        classes.section,
        align && classes.align,
        align,
        className,
      ])}
      {...rest}
    >
      { children }
    </div>
  );
};

/** Wrappers */
const StyledNavbar = withStyles(styles)(Navbar);
const PropsWrappedStyledNavbar = (props: INavbarProps) => <StyledNavbar {...props} />;
const StyledNavbarSection = withStyles(styles)(NavbarSection);
const PropsWrappedStyledNavbarSection = (props: INavbarSectionProps) => <StyledNavbarSection {...props} />;

/** Exports */
export default PropsWrappedStyledNavbar;
export {
  PropsWrappedStyledNavbar as Navbar,
  PropsWrappedStyledNavbarSection as NavbarSection,
};
