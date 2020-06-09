import * as React from "react";
import styles from './DropDownField.styles';
import withStyles, { WithStyles } from 'react-jss';
import { DownArrow } from '../Icons';
import classNames from 'classnames';
import { InputFieldLayout } from '../InputFieldLayout';

interface IDropDownFieldProps {
  placeholder: string;
  children: React.ReactNode;
  appendContent?: any;
  onClose?: () => void;
  disabled?: boolean;
  className?: string;
  listClassName?: string;
  sizeVariant?: 'normal' | 'mini';
  customPlaceholderFont?: boolean;
  placeholderClassName?: string;
}

const DropDownField = (props: IDropDownFieldProps & WithStyles<typeof styles>) => {
  const {
    classes,
    disabled,
    placeholder,
    children,
    className,
    listClassName,
    appendContent,
    onClose,
    placeholderClassName,
    customPlaceholderFont,
    sizeVariant = 'normal',
  } = props;

  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);

  const appendContentWithArrow = (
    <>
      {appendContent ? appendContent : null}
      <DownArrow
        className={classNames(classes.dropdownArrow, {
          [classes.dropdownArrowNormal]: sizeVariant === 'normal',
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
          className={classNames({
            [classes.inputNormal]: sizeVariant === 'normal',
          })}
          isPlaceholderCollapsed={false}
          disabled={disabled}
          placeholder={placeholder}
          sizeVariant={sizeVariant}
          customPlaceholderFont={customPlaceholderFont}
          placeholderClassName={placeholderClassName}
          showPrependBackground={sizeVariant !== 'mini'}
          onFocus={() => {setFocused(true)}}
          onBlur={()=> {setFocused(false)}}
          appendContent={appendContentWithArrow}
          onClick={toggleDropdown}
          tabIndex={0}
        />
        {isDropdownOpen && (
          <div className={classNames(classes.dropdownWrapper,
            sizeVariant === 'mini' ? classes.dropdownWrapperMini : classes.dropdownWrapperNormal,
            listClassName
          )}>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

/** Wrappings */
const StyledDropDownField = withStyles(styles)(DropDownField);
const PropsWrappedStyledDropDownField = (props: IDropDownFieldProps) => <StyledDropDownField {...props} />;

/** Exports */
export default PropsWrappedStyledDropDownField;
export {
  PropsWrappedStyledDropDownField as DropDownField,
};
