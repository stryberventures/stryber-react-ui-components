import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './InputField.styles';

import { FormContext } from '../Form';

interface InputFieldProps {
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  onChange?: (e: React.SyntheticEvent) => void;
  placeholder?: string;
  name: string;
  label?: string;
  type?: string;
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
    onChange,
    type = 'text',
    ...rest
  } = props;

  const [isFocused, setFocused] = React.useState(false);

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    onChange: formOnChange,
    formValues,
    formErrors,
    formTouched,
    onBlur,
  } = React.useContext(FormContext);
  const errorMsg = formTouched[name] && formErrors[name];
  const [internalValue, setInternalValue] = React.useState((formValues && formValues[name]) || value);

  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    setFocused(true);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    onBlur && onBlur(e);
    setFocused(false);
  };
  const onChangeWrapper = (e: any) => {
    formOnChange && formOnChange(e);
    onChange && onChange(e);
    const value = e.target.value;
    setInternalValue(value);
  };

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
