import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Button.styles';

/** Interfaces */
export interface IButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  children: any;
  variant?: 'primary' | 'secondary' | 'tertiary';
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
  const BtnComponent = ({ children, ...rest }: any) => (
    variant === 'tertiary'
      ? <a {...rest}>{ children }</a>
      : <button {...rest}>{ children }</button>
  );
  return (
    <BtnComponent
      { ...rest }
      disabled={disabled}
      className={ classNames([
        classes.root,
        classes[variant],
        classes[sizeVariant],
        disabled && classes.disabled,
        disabled && 'disabled',
      ]) }
      onClick={ onClick }>
      { children }
    </BtnComponent>
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
