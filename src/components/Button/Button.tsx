import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Button.styles';
import { FormContext } from '../Form';

/** Interfaces */
export interface IButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  children: any;
  variant?: 'primary' | 'secondary' | 'tertiary';
  sizeVariant?: 'normal' | 'mini' | 'small' | 'large';
  shape?: 'flat' | 'round' | 'circle';
  className?: any;
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
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
    shape = 'round',
    className,
    loading,
    loadingStyle = {},
    loadingClassName,
    ...rest
  } = props;

  /** Getting loading property from Form context (if the field is wrapped inside a form */
  const {
    loading: formLoading,
  } = React.useContext(FormContext);

  const BtnComponent = ({ children, ...rest }: any) => (
    variant === 'tertiary'
      ? <a {...rest}>{ children }</a>
      : <button {...rest}>{ children }</button>
  );

  if (formLoading || loading) {
    return (
      <div
        style={loadingStyle}
        className={classNames(
        'loadingAnimation',
        classes.buttonLoading,
        { [classes.buttonLargeLoading]: sizeVariant === 'large' },
        { [classes.buttonSmallLoading]: sizeVariant === 'small' },
        { [classes.buttonMiniLoading]: sizeVariant === 'mini' },
          loadingClassName
      )} />
    )
  }

  return (
    <BtnComponent
      { ...rest }
      disabled={disabled}
      className={ classNames([
        classes.root,
        classes[variant],
        classes[sizeVariant],
        classes[shape],
        disabled && classes.disabled,
        disabled && 'disabled',
        className,
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
