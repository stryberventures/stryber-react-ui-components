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
    type = 'text',
    ...rest
  } = props;

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    onChange,
    formValues,
    formErrors,
    formTouched,
    onBlur,
  } = React.useContext(FormContext);
  const errorMsg = formTouched[name] && formErrors[name];

  return (
    <>
      <div
        className={ classNames([
          errorMsg ? classes.invalidRoot : null,
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
        <input
          onChange={onChange}
          onBlur={onBlur}
          { ...rest }
          className={ classNames([
            classes.input,
          ]) }
          value={formValues && formValues[name]}
          name={name}
          type={type}
          placeholder={placeholder}
        />
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
