import * as React from "react";
import classNames from "classnames";
import withStyles, { WithStyles } from 'react-jss';
import styles from './BareInputLayout.styles';

/** Interfaces */
export interface IBareInputLayoutProps {
  placeholder?: string;
  placeholderClassName?: string;
  disabled?: boolean;
  isPlaceholderCollapsed: boolean;
  errorMsg?: string;
  prependContent?: any;
  appendContent?: any;
  showPrependBackground?: boolean;
  children?: any;
  sizeVariant?: 'normal' | 'mini';
  customPlaceholderFont?: boolean;
  label?: string;
  large?: boolean;
  labelClassName?: any;
}

/** Main component */
const BareInputLayout = (props: IBareInputLayoutProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    labelClassName,
    className,
    classes,
    errorMsg,
    disabled,
    appendContent,
    placeholder,
    isPlaceholderCollapsed,
    children,
    placeholderClassName,
    customPlaceholderFont = false,
    sizeVariant = 'normal',
    label,
    large = false,
    ...rest
  } = props;
  return (
    <div className={large ? classes.large : ''}>
      {label ? (<div className={classNames([labelClassName, classes.label, {error: !!errorMsg}, {disabledLabel: disabled}])}>
        {label}
        </div>)
        :
        null
        }
      <div
        {...rest}
        className={classNames([
          classes.root,
          className,
          disabled ? classes.rootDisabled : null,
          errorMsg ? classes.rootInvalid : null,
        ])}
      >
        <div className={classes.fieldWrapper}>
          { children }
        </div>
        <div
          className={classNames([
            classes.append,
          ])}
        >
          { appendContent }
        </div>
      </div>
      {/** Error message */}
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
    </div>
  );
};

/** Wrappers */
const StyledInputFieldLayout = withStyles(styles)(BareInputLayout);
const PropsWrappedStyledBareInputLayout = (props: IBareInputLayoutProps & React.HTMLProps<HTMLDivElement>) => <StyledInputFieldLayout {...props} />;

/** Exports */
export default PropsWrappedStyledBareInputLayout;
export {
  PropsWrappedStyledBareInputLayout as BareInputLayout,
};
