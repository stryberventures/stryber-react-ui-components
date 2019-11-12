import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';

import { FormContext } from '../Form';
// import { InputFieldLayout } from '../InputFieldLayout';
import styles from './FileField.styles';
import { InputFieldLayout } from '../InputFieldLayout';
// import { defaultFormContextValues, FormContext} from '../Form';
// import { CheckboxField } from '../CheckboxField';
// import { DownArrow } from '../Icons';

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
  prependContent?: any;
  appendContent?: any;
  clearFormValueOnUnmount?: boolean;
}

/** Main component */
const FileField = (props: IFileFieldProps & WithStyles<typeof styles>) => {
  const {
    name,
    classes,
    errorMessage,
    disabled,
    accept,
    multiple,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    value,
    clearFormValueOnUnmount = true,
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

  /** Focus status (needed for styles) */
  const [isFocused, setFocused] = React.useState(false);

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((name && formValues && formValues[name]) || value);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Getting component to append */
  const label = (
    <label
      htmlFor="fileInput"
      className={classNames([
        classes.append,
        internalValue ? 'fileSelected' : 'fileNotSelected'
      ])}>
      {internalValue ? 'Change' : 'Upload'}
    </label>
  );
  const appendedComponent = appendContent ? appendContent : label;

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, files: targetFiles } = e.target;
    const fileNames = Object.values(targetFiles)
      .map((file: any) => file.name);

    /** Internal value update */
    setInternalValue(fileNames);
    /** Passthrough to form context */
    formValues && updateFormValue(name, fileNames);
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
  }, [internalValue]);

  const message = internalValue ? `You selected ${internalValue.map((fileName: string) => `"${fileName}"`).join(', ')}` : '';

  return (
    <InputFieldLayout
      appendContent={appendedComponent}
      isPlaceholderCollapsed={!!((typeof internalValue !== 'undefined' && internalValue !== '') || isFocused)}
      errorMsg={errorMsg}
      message={message}
      disabled={disabled}
      placeholder={placeholder}
    >
      <div
        tabIndex={0}
        onFocus={onFocusWrapper}
        onBlur={onBlurWrapper}
        className={classes.inputFieldWrapper}
      >
        { internalValue
          ? <div className={classes.inputWithPlaceholder}>{internalValue.join(', ')}</div>
          : null
        }
        <input
          id="fileInput"
          type="file"
          accept={accept}
          multiple={multiple}
          value={value}
          className={classes.input}
          onChange={onChangeWrapper}
        />
      </div>
    </InputFieldLayout>
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
