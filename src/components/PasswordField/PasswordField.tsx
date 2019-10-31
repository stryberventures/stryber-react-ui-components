import * as React from 'react';
import { Eye, EyeDisabled } from '../Icons';
import { InputField, IInputFieldProps } from '../InputField';
import withStyles, { WithStyles } from 'react-jss';
import styles from './PasswordField.styles';

const PasswordField = (props: IInputFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    type,
    ...rest
  } = props;

  /** Toggle show password state */
  const [showPassword, setShowPassword] = React.useState(false);

  /** Toggle show password Icons */
  const appendContent = (
    <div
      className={classes.append}
      onClick={() => setShowPassword(currVal => !currVal)}
    >
      { showPassword ? (<Eye className={classes.icon} />) : (<EyeDisabled className={classes.icon} />) }
    </div>
  );

  return (
    <InputField
      {...rest}
      type={showPassword ? 'text' : 'password'}
      appendContent={appendContent}
    />
  );
};

const StyledPasswordField = withStyles(styles)(PasswordField);

export default StyledPasswordField;
export { StyledPasswordField as PasswordField };
