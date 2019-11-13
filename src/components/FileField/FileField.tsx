import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import { FormContext } from '../Form';
import { InputFieldLayout } from '../InputFieldLayout';
import styles from './FileField.styles';

/** Interfaces */
export interface IFileFieldProps {
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  multiple?: boolean;
  accept: string;
  disabled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  errorMessage?: string;
  message: (files: any) => string;
  prependContent?: any;
  appendContent?: (files: any, errorMsg: string) => any;
  clearFormValueOnUnmount?: boolean;
}

/** Main component */
const FileField = (props: IFileFieldProps & WithStyles<typeof styles>) => {
  const {
    id,
    name,
    classes,
    errorMessage,
    message,
    disabled,
    accept,
    multiple,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    value,
    clearFormValueOnUnmount = true,
    prependContent,
    appendContent,
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

  /** Create input ref and an event to click it */
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onFileSelect = () => {
    (inputRef && inputRef.current) && inputRef.current.click();
  };

  /** Focus status (needed for styles) */
  const [isFocused, setFocused] = React.useState(false);

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((name && formValues && formValues[name]) || value);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, files: targetFiles } = e.target;
    /** Getting array of multiple files */
    const multipleFiles = Object.values(targetFiles).reduce(
      (acc: any[], file: any) => [ ...acc, file],
      []
    );
    /** Getting files to be added to formData */
    const files = multiple ? multipleFiles : targetFiles[0];
    /** Getting files to be shown in the input filed */
    const fileNames = targetFiles.length
      ? Object.values(targetFiles).map((file: any) => file.name)
      : '';
    /** Internal value update */
    setInternalValue(fileNames);
    /** Passthrough to form context */
    formValues && updateFormValue(name, files);
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
    name && updateFormValue(name, internalValue);
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      name && clearFormValueOnUnmount && unsetFormValue && unsetFormValue(name);
    };
  }, []);

  /** Set placeholder appearance */
  const isPlaceholderCollapsed = !!((typeof internalValue !== 'undefined' && internalValue !== '') || isFocused);

  return (
    <>
      <InputFieldLayout
        prependContent={prependContent}
        appendContent={appendContent ? appendContent(internalValue, errorMsg) : null}
        isPlaceholderCollapsed={isPlaceholderCollapsed}
        errorMsg={errorMsg}
        disabled={disabled}
        placeholder={placeholder}
      >
        <div
          tabIndex={0}
          onClick={onFileSelect}
          onFocus={onFocusWrapper}
          onBlur={onBlurWrapper}
          className={classes.inputFieldWrapper}
        >
          <div className={classes.inputWithPlaceholder}>
            {internalValue && internalValue.length ? internalValue.join(', ') : ''}
          </div>
          <input
            ref={inputRef}
            name={name}
            id={id}
            type="file"
            accept={accept}
            multiple={multiple}
            value={value}
            className={classes.input}
            onChange={onChangeWrapper}
          />
        </div>
      </InputFieldLayout>
      {
        internalValue ?
          (
            <div
              className={classes.message}
            >
              {message(internalValue)}
            </div>
          ) : null
      }
    </>
  );
};

/** Wrappers */
const StyledFileField = withStyles(styles)(FileField);
const PropsWrappedStyledStyledFileField = (props: IFileFieldProps) => <StyledFileField {...props} />;

/** Exports */
export default PropsWrappedStyledStyledFileField;

export {
  PropsWrappedStyledStyledFileField as FileField,
};
