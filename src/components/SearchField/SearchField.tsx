import * as React from 'react';
import { InputFieldLayout } from '../InputFieldLayout';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './SearchField.styles';
import { CloseOutline, Search } from '../Icons';

/** Interfaces */
export interface ISearchFieldProps {
  className?: string;
  placeholder?: string;
  collapsiblePlaceholder?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (value: any) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  onEnter?: (value: string) => void;
  sizeVariant?: 'normal' | 'mini' | 'small';
}

/** Main component */
const SearchField = (props: ISearchFieldProps & WithStyles<typeof styles>) => {
  const {
    className,
    classes,
    disabled,
    onChange,
    onFocus,
    onBlur,
    onEnter,
    value,
    placeholder = 'Search',
    collapsiblePlaceholder = true,
    sizeVariant = 'normal',
  } = props;

  /** Focus status (needed for styles) */
  const [isFocused, setFocused] = React.useState(false);
  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [inputValue, setInputValue] = React.useState(value || '');

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;
    /** Internal value update */
    setInputValue(() => value);
    // setDropdownOpen(() => false);
    /** Independent callback */
    onChange && onChange(value);
  };
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    setFocused(true);
    /** Independent callback */
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    // const { name } = e.target;
    setFocused(false);
    // /** Passthrough to form context */
    // formTouched && updateFormTouched(name, true);
    /** Independent callback */
    onBlur && onBlur(e);
  };

  const onClearClickWrapper = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    setInputValue(() => '');
    onChange && onChange('');
  };

  const onKeyPressWrapper = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      e.preventDefault();

      onEnter && onEnter(inputValue);
    }
  }
  /** Prepend magnifying lens */
  const prependContent = (
    <Search className={classNames(
      classes.searchIcon,
      {[classes.searchIconSmall]: sizeVariant === 'small'}
    )} />
  );

  /** Append content arrow */
  const appendContent =
    inputValue !== '' ?
      (<CloseOutline
        onClick={onClearClickWrapper}
        className={classNames([
          classes.clearIcon,
        ])}
      />) : null;

  return (
    <InputFieldLayout
      className={className}
      isPlaceholderCollapsed={isFocused || inputValue !== ''}
      disabled={disabled}
      placeholder={collapsiblePlaceholder ? placeholder : undefined}
      prependContent={prependContent}
      appendContent={appendContent}
      showPrependBackground={false}
      sizeVariant={sizeVariant}
    >
      {/** Input field layout content */}
      <input
        type="text"
        onChange={onChangeWrapper}
        onBlur={onBlurWrapper}
        onFocus={onFocusWrapper}
        onKeyPress={onKeyPressWrapper}
        value={inputValue}
        placeholder={collapsiblePlaceholder ? undefined : placeholder}
        className={classNames([
          classes.inputField,
          sizeVariant === 'normal' ? classes.inputFieldNormal : classes.inputFieldMini,
          (placeholder && collapsiblePlaceholder) ? classes.inputFieldWithPlaceholder : null,
        ])}
      />
    </InputFieldLayout>
  );
};

/** Wrappers */
const StyledSearchField = withStyles(styles)(SearchField);
const PropsWrappedStyledSearchField = (props: ISearchFieldProps) => <StyledSearchField {...props} />;

/** Exports */
export default PropsWrappedStyledSearchField;
export {
  PropsWrappedStyledSearchField as SearchField,
};
