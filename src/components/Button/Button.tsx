import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Button.styles';

interface ButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
  children: any;
  variant?: 'primary' | 'secondary';
  [key: string]: any;
}

const Button = (props: ButtonProps & React.HTMLProps<HTMLButtonElement> & WithStyles<typeof styles>) => {
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

const StyledButton = withStyles(styles)(Button);

export default StyledButton;

export { StyledButton as Button };
