import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Button.styles';

/** Interfaces */
export interface IButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  children: any;
  variant?: 'primary' | 'secondary';
  sizeVariant?: 'normal' | 'mini';
}

/** Main component */
const Button = (props: IButtonProps & React.HTMLProps<HTMLButtonElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    children,
    onClick,
    disabled = false,
    sizeVariant = 'normal',
    variant = 'primary',
    ...rest
  } = props;
  return (
    <button
      { ...rest }
      disabled={disabled}
      className={ classNames([
        classes.root,
        classes[sizeVariant],
        !disabled ? classes[variant] : null,
        disabled ? classes.disabled : null,
      ]) }
      onClick={ onClick }>
      { children }
    </button>
  );
};

/** Wrappings */
const StyledButton = withStyles(styles)(Button);
const PropsWrappedStyledButton = (props: IButtonProps & React.HTMLProps<HTMLButtonElement>) => <StyledButton {...props} />;

/** Exports */
export default PropsWrappedStyledButton;
export {
  PropsWrappedStyledButton as Button,
};
