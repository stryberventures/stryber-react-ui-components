import * as React from 'react';
import classNames from 'classnames';

import useStyles from './NavbarDropdown.styles';
import { DownArrow } from  '../../Icons/index';
import {useEffect, useRef, useState} from 'react';

interface INavbarDropdownOption {
  text: string;
  onClick?: any;
  newPrependContent?: any;
  newTitle?: string;
}

interface INavbarDropdownProps {
  className?: any;
  title: string;
  prependContent?: any;
  options?: INavbarDropdownOption[];
}

const NavbarDropdown: React.FC<INavbarDropdownProps & React.HTMLProps<HTMLDivElement>> = (props) => {
  const { className, title, prependContent, options } = props;

  const classes = useStyles();

  const [showOptions, setShowOptions] = useState(false);
  const [titleItem, setTitleItem] = useState(title);
  const [prependItem, setPrependItem] = useState(prependContent)
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  })

  return (
    <div
      {...props}
      className={classNames(classes.navbarDropdown, className)}
      onClick={() => setShowOptions(!showOptions)}
    >
      {prependItem}
      <div className={classes.title}>{titleItem}</div>
      <DownArrow className={classes.downArrow} width={12} />
      {(options && showOptions) && (<div ref={optionsRef} className={classes.options}>
        {options.map((option: INavbarDropdownOption) =>
          (<button
            className={classes.optionButton}
            onClick={() => {
              option.onClick && option.onClick();
              option.newTitle && setTitleItem(option.newTitle);
              option.newPrependContent && setPrependItem(option.newPrependContent);
            }}>
          {option.text}
        </button>))}
      </div>)}
    </div>
  );
};

export default NavbarDropdown;
