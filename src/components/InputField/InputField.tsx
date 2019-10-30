import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './InputField.styles';

import { FormContext } from '../Form';

interface InputFieldProps {
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  onChange?: (e: React.BaseSyntheticEvent) => void;
  placeholder?: string;
  name: string;
  label?: string;
  type?: string;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  clearFormValueOnUnmount?: boolean;
  [key: string]: any;
}

const InputField = (props: InputFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    disabled,
    placeholder,
    name,
    errorMessage,
    value,
    onFocus,
    onBlur,
    onChange,
    clearFormValueOnUnmount = true,
    type = 'text',
    ...rest
  } = props;

  /** Focus status (needed for styles) */
  const [isFocused, setFocused] = React.useState(false);

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    updateFormTouched,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
  } = React.useContext(FormContext);
  const errorMsg = formTouched[name] && formErrors[name];
  const [internalValue, setInternalValue] = React.useState((formValues && formValues[name]) || value);

  /** Wrappers to merge form and props methods */
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    onFocus && onFocus(e);
    setFocused(true);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    onBlur && onBlur(e);
    updateFormTouched && updateFormTouched(name, true);
    setFocused(false);
  };
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, value: targetValue } = e.target;
    updateFormValue && updateFormValue(name, targetValue);
    onChange && onChange(e);
    setInternalValue(targetValue);
  };

  /** On mount/unmount */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    updateFormValue(name, internalValue);

    /** On unmount */
    return () => {
      clearFormValueOnUnmount && unsetFormValue && unsetFormValue(name);
    };
  }, []);

  return (
    <>
      <div
        className={ classNames([
          errorMsg ? classes.invalidRoot : null,
          disabled ? classes.disabledRoot : null,
          classes.root,
        ]) }
      >
        <div
          className={ classNames([
            errorMsg ? classes.invalidPrepend : null,
            classes.prepend,
          ]) }
        >
        </div>
        <div className={classes.inputWrapper}>
          {
            placeholder ?
              (<div
                className={ classNames([
                  classes.placeholder,
                  (internalValue || isFocused) ? classes.placeholderCollapsed : null,
                  errorMsg ? classes.invalidPlaceholder : null,
                ]) }
              >
                { placeholder }
              </div>) : null
          }
          <input
            onChange={onChangeWrapper}
            onBlur={onBlurWrapper}
            onFocus={onFocusWrapper}
            { ...rest }
            className={ classNames([
              classes.input,
              placeholder ? classes.inputWithPlaceholder : null,
              errorMsg ? classes.invalidInput : null,
            ]) }
            disabled={disabled}
            value={internalValue}
            name={name}
            type={type}
          />
        </div>
        <div
          className={ classNames([
            classes.append,
          ]) }
        >
        </div>
      </div>
      {
        errorMsg ?
          (
            <div
              className={classes.errorMessage}
            >
              { errorMsg }
            </div>
          ) : null
      }
    </>
  );
};

const StyledInputField = withStyles(styles)(InputField);

export default StyledInputField;
export { StyledInputField as InputField };
