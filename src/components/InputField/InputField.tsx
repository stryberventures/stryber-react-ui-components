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

const InputField = (props: InputFieldProps & WithStyles<typeof styles>) => {
  const {
    classes,
    disabled,
    placeholder,
    name,
    type = 'text',
    ...rest
  } = props;
  const { onChange, formValues } = React.useContext(FormContext);

  return (
    <input
      onChange={onChange}
      { ...rest }
      className={ classNames([
        classes.root,
      ]) }
      value={formValues && formValues[name]}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

const StyledInputField = withStyles(styles)(InputField);

export default StyledInputField;
export { StyledInputField as InputField };
