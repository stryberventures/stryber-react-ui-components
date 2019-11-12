import * as React from 'react';

import { FormContext } from '../../../Form';
// import { InputFieldLayout } from '../InputFieldLayout';
// import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './FileInputField.styles';
import { InputFieldLayout } from '../../../InputFieldLayout';
import classNames from "classnames";
// import { defaultFormContextValues, FormContext} from '../Form';
// import { CheckboxField } from '../CheckboxField';
// import { DownArrow } from '../Icons';

/** Interfaces */
export interface IFileInputFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  // choices: IMultiChoiceData[];
  value?: string;
  disabled?: boolean;
  // onFocus?: (e: React.BaseSyntheticEvent) => void;
  // onBlur?: (e: React.BaseSyntheticEvent) => void;
  clearFormValueOnUnmount?: boolean;
  // prependContent: any;
  appendContent?: any;
  errorMessage?: string;
}

/** Main component */
const FileInputField = (props: IFileInputFieldProps & WithStyles<typeof styles>) => {
  const {
    name,
    classes,
    errorMessage,
    disabled,
  //   onFocus,
  //   onBlur,
    value,
    placeholder,
    clearFormValueOnUnmount = true,
    appendContent,
  } = props;

  /** Focus status (needed for styles) */
  const [isFocused] = React.useState(false);


  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    //   updateFormTouched,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
  } = React.useContext(FormContext);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  console.log('formValues ===>>> ', formValues);
  const [internalValue] = React.useState((name && formValues && formValues[name]) || value);


  const label = <label htmlFor="fileInput" className={classes.inputLabel}>Upload</label>;
  const appendedComponent = appendContent ? appendContent : label;

  /** On mount/unmount logic */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    name && updateFormValue(name, internalValue);
    console.log('internalValue ===>>> ', internalValue);
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      name && clearFormValueOnUnmount && unsetFormValue && unsetFormValue(name);
    };
  }, []);

  return (
    <InputFieldLayout
      appendContent={appendedComponent}
      isPlaceholderCollapsed={!!((typeof value !== 'undefined' && value !== '') || isFocused)}
      errorMsg={errorMsg}
      disabled={disabled}
      placeholder={placeholder}
    >
      <div
        className={classNames([
          classes.inputFieldWrapper,
          errorMsg ? classes.inputLabelInvalid : null,
        ])}
      >
        <input id="fileInput" className={classes.fileInput} type="file" value={internalValue} />
      </div>
    </InputFieldLayout>
  );
};

/** Wrappers */
const StyledFileInputField = withStyles(styles)(FileInputField);
const PropsWrappedStyledStyledFileInputField = (props: IFileInputFieldProps) => <StyledFileInputField {...props} />;

/** Exports */
export default PropsWrappedStyledStyledFileInputField;

export {
  PropsWrappedStyledStyledFileInputField as FileInputField,
};
