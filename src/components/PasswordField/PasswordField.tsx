import * as React from 'react';
import { Eye, EyeDisabled } from '../Icons';
import { InputField, IInputFieldProps } from '../InputField';
import withStyles, { WithStyles } from 'react-jss';
import styles from './PasswordField.styles';

/** Interfaces */
export interface IPasswordFieldProps {
  showPasswordByDefault?: boolean;
}

/** Main component */
const PasswordField = (props: IPasswordFieldProps & IInputFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  const {
    showPasswordByDefault = false,
    classes,
    type,
    ...rest
  } = props;

  /** Toggle show password state */
  const [showPassword, setShowPassword] = React.useState(showPasswordByDefault);

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

/** Wrappers */
const StyledPasswordField = withStyles(styles)(PasswordField);
const PropsWrappedStyledPasswordField = (props: IPasswordFieldProps & IInputFieldProps & React.HTMLProps<HTMLInputElement>) => <StyledPasswordField {...props} />;

/** Exports */
export default PropsWrappedStyledPasswordField;
export {
  PropsWrappedStyledPasswordField as PasswordField,
};
