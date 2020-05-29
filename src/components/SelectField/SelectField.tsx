import * as React from 'react';
import { InputFieldLayout } from '../InputFieldLayout';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './SelectField.styles';
import { FormContext } from '../Form';
import { DownArrow } from '../Icons';

/** Interfaces */
export interface IChoiceData {
  label: any;
  value: any;
}

export interface ISelectFieldProps {
  name: string;
  placeholder?: string;
  choices: IChoiceData[];
  value?: any;
  controlled?: boolean;
  disabled?: boolean;
  onChange?: (value: any) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  clearFormValueOnUnmount?: boolean;
  prependContent?: any;
  appendContent?: any;
  errorMessage?: string;
  className?: any;
  showPrependBackground?: boolean;
}

/** Main component */
const SelectField = (props: ISelectFieldProps & WithStyles<typeof styles>) => {
  const {
    name,
    classes,
    className,
    errorMessage,
    disabled,
    onChange,
    onFocus,
    onBlur,
    value,
    controlled,
    placeholder,
    choices,
    clearFormValueOnUnmount,
    showPrependBackground = true,
  } = props;

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    updateFormTouched,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
  } = React.useContext(FormContext);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Focus status (needed for styles) */
  const [isFocused, setFocused] = React.useState(false);
  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((formValues && formValues[name]) || value);
  const [hoverIndex, setHoverIndex] = React.useState(-1);

  /** Selected choice */
  const selectChoiceIndex = choices.findIndex((d) => d.value === (controlled ? value : internalValue));
  const selectedChoice = selectChoiceIndex > -1 ? choices[selectChoiceIndex] : null;

  /** Select Field State */
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (value: any) => {
    /** Internal value update */
    setInternalValue(() => value);
    setDropdownOpen(() => false);
    /** Passthrough to form context */
    formValues && updateFormValue(name, value);
    /** Independent callback */
    onChange && onChange(value);
  };
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    setFocused(true);
    /** Independent callback */
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    setFocused(false);
    /** Passthrough to form context */
    formTouched && updateFormTouched(name, true);
    /** Independent callback */
    onBlur && onBlur(e);
  };
  const onKeyDownWrapper = (e: React.KeyboardEvent) => {
    /** Hitting Enter or Space */
    if (e.keyCode === 32 || e.keyCode === 13) {
      if (isDropdownOpen) {
        if (hoverIndex > -1) {
          onChangeWrapper(choices[hoverIndex].value);
        }
        setHoverIndex(-1);
      } else {
        setHoverIndex(selectChoiceIndex);
        setDropdownOpen(true);
      }
    }
    /** Key up */
    if (e.keyCode === 38) {
      setHoverIndex(v => v > 0 ? v - 1 : v);
    }
    /** Key down */
    if (e.keyCode === 40) {
      setHoverIndex(v => v < choices.length - 1 ? v + 1 : v);
    }
  };

  /** Append content arrow */
  const appendContent = (
    <DownArrow
      className={classNames([
        classes.dropdownArrow,
        isDropdownOpen ? classes.dropdownArrowOpen : null,
        isFocused ? classes.dropdownArrowFocused : null,
      ])}
    />
  );

  /** Mount / unmount logic */
  React.useEffect(() => {
    /** Running first validation on mount */
    if (updateFormValue) updateFormValue(name, internalValue);
    return () => {
      if (unsetFormValue && clearFormValueOnUnmount) unsetFormValue(name);
    };
  }, []);

  return (
    <>
      {/** Clickaway element */}
      {
        isDropdownOpen
          ? (
            <div
              className={classes.clickaway}
              onClick={() => setDropdownOpen(() => false)}
            >
            </div>
          ) : null
      }
      {/** Root wrapper */}
      <div
        className={classNames([
          className,
          classes.root,
          isDropdownOpen ? classes.rootOpen : null,
        ])}
      >
        {/** Value & Placeholder / Header */}
        <InputFieldLayout
          isPlaceholderCollapsed={!!selectedChoice}
          errorMsg={errorMsg}
          disabled={disabled}
          placeholder={placeholder}
          appendContent={appendContent}
          onClick={() => setDropdownOpen(v => !v)}
          showPrependBackground={showPrependBackground}
        >
          {/** Input filed layout content */}
          <div
            tabIndex={0}
            onBlur={onBlurWrapper}
            onFocus={onFocusWrapper}
            onKeyDown={onKeyDownWrapper}
            className={classNames([
              classes.selectLabel,
              placeholder ? classes.selectLabelWithPlaceholder : null,
              errorMsg ? classes.selectLabelInvalid : null,
            ])}
          >
            { selectedChoice ? selectedChoice.label : null }
          </div>
        </InputFieldLayout>
        {/** Select dropdown */}
        {
          isDropdownOpen
            ? (
              <div
                className={classes.dropdownWrapper}
              >
              {
                choices
                  .map(({ label, value }: IChoiceData, i: number) => (
                    <div
                      className={classNames([
                        classes.dropdownItem,
                        hoverIndex === i ? classes.dropdownItemHover : null,
                      ])}
                      onMouseOver={() => setHoverIndex(() => i)}
                      onClick={() => onChangeWrapper(value)}
                      key={i}
                    >
                      { label }
                    </div>
                  ))
              }
              </div>
            ) : null
        }
      </div>
    </>
  );
};

/** Wrappers */
const StyledSelectField = withStyles(styles)(SelectField);
const PropsWrappedStyledSelectField = (props: ISelectFieldProps) => <StyledSelectField {...props} />;

/** Exports */
export default PropsWrappedStyledSelectField;
export {
  PropsWrappedStyledSelectField as SelectField,
};
