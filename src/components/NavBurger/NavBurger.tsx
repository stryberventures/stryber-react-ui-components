import * as React from 'react';
import classNames from 'classnames';

import useStyles from './NavBurger.styles';
import { useState } from 'react';

interface INavBurgerProps {
  onClick?: (e: React.SyntheticEvent) => void;
  className?: any;
  active?: boolean;
}

const NavBurger = (props: INavBurgerProps & React.HTMLAttributes<HTMLDivElement>) => {
  const {
    active,
    onClick,
    ...rest
  } = props;

  const classes = useStyles();

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
          <g id="icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect id="topRectangle" fill="#000000" x="3" y="3" width="42" height="4"/>
            <rect id="middleRectangle" onAnimationEnd={() => setAnimation(false)} className={classes.middleRectangle} fill="#000000" x="3" y="17" width="21" height="4"/>
            <rect id="middleRectangle2" onAnimationEnd={() => setAnimation(false)} className={classNames(classes.middleRectangle2, classes.middleRectangle)} fill="#000000" x="24" y="17" width="21" height="4"/>
            <rect id="bottomRectangle" fill="#000000" x="3" y="31" width="42" height="4"/>
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
