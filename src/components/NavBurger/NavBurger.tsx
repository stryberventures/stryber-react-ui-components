import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';

import styles from './NavBurger.styles';
import { useState } from 'react';


interface ITagProps {
  onClick?: (e: React.SyntheticEvent) => void;
  className?: any;
  active?: boolean;
  animationDuration?: number;
}

const NavBurger = (props: ITagProps & React.HTMLAttributes<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    active,
    onClick,
    animationDuration = 0.5,
    ...rest
  } = props;

  const [animation, setAnimation] = useState(false);

  return (
    <div
      className={classNames([classes.root, classNames])}
      onClick={(e) => {
        setAnimation(true);
        onClick && onClick(e);
      }}
      {...rest}
    >
      <div className={classNames(classes.navburgerWrapper)}>
        <svg className={classNames({ [classes.inactiveBurger]: animation }, { [classes.activeBurger]: active })} width="24px" height="24px" viewBox="0 0 49 40" version="1.1">
          <title>icon</title>
          <desc>Created with Sketch.</desc>
          <g id="icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect id="topRectangle" fill="#000000" x="3" y="3" width="42" height="4"></rect>
            <rect id="middleRectangle" className={classes.middleRectangle} fill="#000000" x="3" y="17" width="21" height="4"></rect>
            <rect id="middleRectangle2" className={classNames(classes.middleRectangle2, classes.middleRectangle)} fill="#000000" x="24" y="17" width="21" height="4"></rect>
            <rect id="bottomRectangle" fill="#000000" x="3" y="31" width="42" height="4"></rect>
          </g>
        </svg>
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
