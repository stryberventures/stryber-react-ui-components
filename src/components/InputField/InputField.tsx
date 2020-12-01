import * as React from 'react';
import classNames from 'classnames';

import { FormContext } from '../Form';
import { TextInput } from './Inputs/TextInput';
import { Button } from '../Button';

import useStyles from './Input.styles';

/** Interfaces */
export interface IInputFieldProps {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: any;
  disabled?: boolean;
  controlled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  clearFormValueOnUnmount?: boolean;
  appendContent?: any;
  errorMessage?: string;
  layout?: 'default' | 'simple' | 'bare';
  sizeVariant?: 'mini' | "normal";
  label?: string;
  large?: boolean;
  labelClassName?: any;
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
}

/** Main component */
const InputField = (props: IInputFieldProps & React.HTMLProps<HTMLInputElement>) => {
  const {
    name = 'unnamed',
    value,
    type = 'text',
    layout = "default",
    sizeVariant = "normal",
    placeholder,
    disabled,
    onChange,
    onFocus,
    onBlur,
    clearFormValueOnUnmount = true,
    appendContent,
    controlled,
    errorMessage,
    loading = false,
    large,
    label,
    loadingClassName,
    loadingStyle = {},
    ...rest
  } = props;
  const classes = useStyles();

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
    loading: formLoading
  } = React.useContext(FormContext);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((name && formValues && formValues[name]) || value);

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, value: targetValue } = e.target;
    /** Internal value update */
    setInternalValue(() => targetValue);
    /** Passthrough to form context */
    formValues && updateFormValue(name, targetValue);
    /** Independent callback */
    onChange && onChange(e);
  };
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    /** Internal value update */
    setFocused(true);
    /** Independent callback */
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    /** Internal value update */
    setFocused(false);
    /** Passthrough to form context */
    formTouched && updateFormTouched(name, true);
    /** Independent callback */
    onBlur && onBlur(e);
  };

  /** On mount/unmount logic */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    formValues && updateFormValue(name, internalValue, true);
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      clearFormValueOnUnmount && formValues && unsetFormValue(name);
    };
  }, []);

  if (formLoading || loading) {
    return (<div style={loadingStyle} className={loadingClassName}>
      {label && <div className={classNames(
        'loadingAnimation',
        classes.labelLoading,
        { [classes.labelLargeLoading]: label && large }
      )}/>}
      <div className={classNames(
      'loadingAnimation',
      classes.inputLoading,
      { [classes.inputLargeLoading]: large },
      { [classes.inputMiniLoading]: sizeVariant === 'mini' }
    )}/>
    </div>)
  }

  /** Switch depending on the type of the desired input field */
  switch (type) {
    case 'submit':
    case 'reset':
      return (
        <Button
          type={type}
        >
          {value || type}
        </Button>
      );
    case 'text':
    case 'number':
    case 'email':
    case 'password':
      return (
        <TextInput
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
          value={controlled ? value : internalValue}
          appendContent={appendContent}
          layout={layout}
          sizeVariant={sizeVariant}
          large={large}
          label={label}
        />
      );
  }
  return <input {...props} />;
};

/** Exports */
export default InputField;
export {
  InputField,
};
