import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';

import styles from './NavBurger.styles';
import { Hamburger } from '../Icons';


interface ITagProps {
  onClick?: (e: React.SyntheticEvent) => void;
  className?: any;
  active?: boolean;
}

const NavBurger = (props: ITagProps & React.HTMLAttributes<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    active,
    onClick,
    ...rest
  } = props;
  return (
    <div
      className={classNames([classes.root, classNames])}
      onClick={onClick}
      {...rest}
    >
      <div className={classes.navburgerWrapper}>
        <Hamburger />
        {active && (<div className={classes.octagonWrapper}>
          <div className={classes.octagon}>
            <div className={classes.octagonInner}/>
          </div>
        </div>)}
        </div>
    </div>)
}

/** Wrappers */
const StyledNavBurger = withStyles(styles)(NavBurger);
const PropsWrappedStyledNavBurger = (props: ITagProps & React.HTMLAttributes<HTMLDivElement>) => <StyledNavBurger {...props} />;

/** Exports */
export default PropsWrappedStyledNavBurger;
export {
  PropsWrappedStyledNavBurger as NavBurger,
};
