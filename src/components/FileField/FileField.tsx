import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import { FormContext } from '../Form';
import { InputFieldLayout } from '../InputFieldLayout';
import SelectedFile from './SelectedFile';
import styles from './FileField.styles';
import UploadButton from './UploadButton';

/** Interfaces */
export interface IFileFieldProps {
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
  inputText?: (filesNumber: number) => string;
  prependContent?: any;
  appendContent?: (files: any, errorMsg: string, clickFileInput: (e: any) => any) => any;
  clearFormValueOnUnmount?: boolean;
}

/** Main component */
const FileField = (props: IFileFieldProps & WithStyles<typeof styles>) => {
  const {
    name,
    classes,
    errorMessage,
    inputText,
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
  const clickFileInput = () => {
    (inputRef && inputRef.current) && inputRef.current.click();
  };

  /** Focus status (needed for styles) */
  const [isFocused, setFocused] = React.useState(false);

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((name && formValues && formValues[name]) || value);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Getting files names */
  const getFileNames = (files: any) => {
    if (files && files.name) {
      return [files.name];
    }

    return (files && files.length)
      ? Object.values(files).map((file: any) => file.name)
      : [];
  };

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, files: targetFiles } = e.target;
    /** Getting array of multiple files */
    const multipleFiles = Array.from(targetFiles);
    /** Getting files to be added to formData */
    const files = multiple ? multipleFiles : targetFiles[0];
    /** Internal value update */
    setInternalValue(files);
    /** Passthrough to form context */
    formValues && updateFormValue(name, files);
    /** Independent callback */
    onChange && onChange(files);
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

  /** Remove file from internalValue */
  const removeFile = (fileName: string) => {
    const files = multiple ? (internalValue).filter((file: any) => file.name !== fileName) : undefined;
    setInternalValue(files);
    /** Passthrough to form context */
    formValues && updateFormValue(name, files);
    onChange && onChange(files);
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
  const isPlaceholderCollapsed = !!((typeof internalValue !== 'undefined' && internalValue !== '' && (internalValue.name || internalValue.length)) || isFocused);
  /** Default components */
  const appendContentDefault = <UploadButton files={internalValue} errorMsg={errorMsg} onClick={clickFileInput} />;
  const inputTextDefault = multiple ? (`${internalValue && internalValue.length} uploaded ${internalValue && internalValue.length > 1 ? 'files' : 'file'}`) : '1 uploaded file';

  return (
    <>
      <InputFieldLayout
        prependContent={prependContent}
        appendContent={appendContent ? appendContent : appendContentDefault}
        isPlaceholderCollapsed={isPlaceholderCollapsed}
        errorMsg={errorMsg}
        disabled={disabled}
        placeholder={placeholder}
      >
        <div
          tabIndex={0}
          onClick={clickFileInput}
          onFocus={onFocusWrapper}
          onBlur={onBlurWrapper}
          className={classes.inputFieldWrapper}
        >
          <div className={classes.inputWithPlaceholder}>
            {internalValue && internalValue.length ? (inputText ? inputText : inputTextDefault) : null}
          </div>
          <input
            ref={inputRef}
            name={name}
            type="file"
            accept={accept}
            multiple={multiple}
            value={value}
            key={internalValue}
            className={classes.input}
            onChange={onChangeWrapper}
          />
        </div>
      </InputFieldLayout>
      {internalValue ?
        (
          <ul className={classes.selectedFiles}>
            {getFileNames(internalValue).map((fileName: string) => (
                <SelectedFile key={fileName} fileName={fileName} removeFile={removeFile} />
              )
            )}
          </ul>
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
