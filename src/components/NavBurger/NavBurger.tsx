import * as React from 'react';
import classNames from 'classnames';

import useStyles from './NavBurger.styles';
import { useState } from 'react';

interface INavBurgerProps {
  onClick?: (e: React.SyntheticEvent) => void;
  className?: any;
  active?: boolean;
  animationDuration?: number;
}

const NavBurger = (props: INavBurgerProps & React.HTMLAttributes<HTMLDivElement>) => {
  const {
    active,
    onClick,
    animationDuration = 0.3,
    ...rest
  } = props;

  const classes = useStyles({ animationDuration })

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
        <svg className={classNames(
          classes.inactiveBurger,
          { [classes.activeBurger]: active },
          { [classes.animate]: animation }
        )} width="24px" height="24px" viewBox="0 0 49 40" version="1.1">
          <title>icon</title>
          <desc>Created with Sketch.</desc>
          <g id="icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect id="topRectangle" fill="#000000" x="3" y="3" width="42" height="4"></rect>
            <rect id="middleRectangle" onAnimationEnd={() => setAnimation(false)} className={classes.middleRectangle} fill="#000000" x="3" y="17" width="21" height="4"></rect>
            <rect id="middleRectangle2" onAnimationEnd={() => setAnimation(false)} className={classNames(classes.middleRectangle2, classes.middleRectangle)} fill="#000000" x="24" y="17" width="21" height="4"></rect>
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

/** Exports */
export default NavBurger;
