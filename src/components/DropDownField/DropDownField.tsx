import * as React from "react";
import styles from './DropDownField.styles';
import withStyles, { WithStyles } from 'react-jss';
import { DownArrow } from '../Icons';
import classNames from 'classnames';
import { InputFieldLayout } from '../InputFieldLayout';

interface IDropDownFieldProps {
  placeholder: string;
  children: any;
  appendContent?: any;
  onClose?: () => void;
  disabled?: boolean;
  className?: string;
}

const DropDownField = (props: IDropDownFieldProps & WithStyles<typeof styles>) => {
  const {
    classes,
    disabled,
    placeholder,
    children,
    className,
    appendContent,
    onClose,
  } = props;

  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);

  const appendContentWithArrow = (
    <>
      {appendContent ? appendContent : null}
      <DownArrow
        className={classNames(classes.dropdownArrow, {
          [classes.dropdownArrowOpen]: isDropdownOpen,
          [classes.dropdownArrowFocused]: isFocused
        })}
      />
    </>
  );

  const clickAwayOnClick = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    setDropdownOpen(false);
    onClose && onClose();
  };

  const toggleDropdown = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    setDropdownOpen(!isDropdownOpen);
    isDropdownOpen && onClose && onClose();
  };

  return (
    <>
      {isDropdownOpen && (
        <div
          className={classes.clickaway}
          onClick={clickAwayOnClick}
        />
      )}
      <div className={classNames(classes.root, {[classes.rootOpen]: isDropdownOpen}, className)}>
        <InputFieldLayout
          className={classes.input}
          isPlaceholderCollapsed={false}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={() => {setFocused(true)}}
          onBlur={()=> {setFocused(false)}}
          appendContent={appendContentWithArrow}
          onClick={toggleDropdown}
          tabIndex={0}
        />
        {isDropdownOpen && (
          <div className={classes.dropdownWrapper}>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default withStyles(styles)(DropDownField)
