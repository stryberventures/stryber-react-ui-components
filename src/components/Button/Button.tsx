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
}

/** Main component */
const Button = (props: IButtonProps & React.HTMLProps<HTMLButtonElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    children,
    disabled,
    onClick,
    variant = 'primary',
    ...rest
  } = props;
  const renderContent = () => <span className={ classes.content }>{ children }</span>;
  return (
    <button
      { ...rest }
      className={ classNames([
        classes.root,
        disabled ? classes.disabled : null,
        classes[variant],
      ]) }
      onClick={ onClick }>
      { renderContent() }
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
