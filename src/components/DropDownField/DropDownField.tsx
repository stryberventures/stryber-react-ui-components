import * as React from "react";
import styles from './DropDownField.styles';
import withStyles, { WithStyles } from 'react-jss';
import { DownArrow } from '../Icons';
import classNames from 'classnames';
import { InputFieldLayout } from '../InputFieldLayout';
import { SimpleInputLayout } from '../SimpleInputLayout';
import { FormContext } from '../Form';

interface IDropDownFieldProps {
  placeholder?: string;
  children: React.ReactNode;
  appendContent?: any;
  onClose?: () => void;
  disabled?: boolean;
  className?: string;
  listClassName?: string;
  sizeVariant?: 'normal' | 'mini';
  customPlaceholderFont?: boolean;
  placeholderClassName?: string;
  layout?: 'default' | 'simple';
  label?: string;
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
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
    layout = 'default',
    label,
    loading = false,
    loadingClassName,
    loadingStyle = {},
  } = props;

  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  const [isFocused, setFocused] = React.useState(false);

  /** Getting values from Form context (if the field is wrapped inside a form */
  const { loading: formLoading } = React.useContext(FormContext);

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

  let LayoutComponent;
  switch (layout) {
    case 'simple':
      LayoutComponent = SimpleInputLayout;
      break;
    default:
      LayoutComponent = InputFieldLayout;
      break;
  }

  if (formLoading || loading) {
    return (<div className={loadingClassName} style={loadingStyle}>
      {label && <div className={classNames(
        'loadingAnimation',
        classes.labelLoading,
      )}/>}
      <div className={classNames(
        'loadingAnimation',
        classes.inputLoading,
        { [classes.inputMiniLoading]: sizeVariant === 'mini' }
      )}/>
    </div>)
  }

  return (
    <>
      {isDropdownOpen && (
        <div
          className={classes.clickaway}
          onClick={clickAwayOnClick}
        />
      )}
      <div className={classNames(classes.root, { [classes.rootOpen]: isDropdownOpen }, className)}>
        <LayoutComponent
          isPlaceholderCollapsed={false}
          disabled={disabled}
          placeholder={placeholder}
          sizeVariant={sizeVariant}
          customPlaceholderFont={customPlaceholderFont}
          placeholderClassName={placeholderClassName}
          showPrependBackground={sizeVariant !== 'mini'}
          onFocus={() => { setFocused(true) }}
          onBlur={() => { setFocused(false) }}
          appendContent={appendContentWithArrow}
          onClick={toggleDropdown}
          tabIndex={0}
          label={label}
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
