import * as React from 'react';

import { FormContext } from '../Form';
import { TextField } from './Fields/TextField';

export interface IInputFieldProps {
  name?: string;
  type?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  clearFormValueOnUnmount?: boolean;
  prependContent?: any;
  appendContent?: any;
  errorMessage?: string;
  [key: string]: any;
}

const InputField = (props: IInputFieldProps & React.HTMLProps<HTMLInputElement>) => {
  const {
    classes,
    name = 'unnamed',
    value,
    type = 'text',
    placeholder,
    disabled,
    onChange,
    onFocus,
    onBlur,
    clearFormValueOnUnmount = true,
    prependContent,
    appendContent,
    errorMessage,
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

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched[name] && formErrors[name]) || errorMessage;

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((name && formValues && formValues[name]) || value);

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, value: targetValue } = e.target;
    updateFormValue && updateFormValue(name, targetValue);
    onChange && onChange(e);
    setInternalValue(targetValue);
  };
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

  /** On mount/unmount logic */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    name && updateFormValue(name, internalValue);
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      name && clearFormValueOnUnmount && unsetFormValue && unsetFormValue(name);
    };
  }, []);

  /** Switch depending on the type of the desired input field */
  switch(type) {
    case 'text':
    case 'number':
    case 'email':
    case 'password':
      return (
        <TextField
          {...rest}
          isFocused={isFocused}
          onFocus={onFocusWrapper}
          onBlur={onBlurWrapper}
          onChange={onChangeWrapper}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          name={name}
          errorMsg={errorMsg}
          value={internalValue}
          appendContent={appendContent}
          prependContent={prependContent}
        />
      );
  }
  return <input {...props}/>;
};

export default InputField;
export { InputField };
