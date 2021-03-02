import * as React from "react";
import classNames from "classnames";
import withStyles, { WithStyles } from 'react-jss';
import styles from './SimpleInputLayout.styles';

/** Interfaces */
export interface ISimpleInputLayoutProps {
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
  className?: string;
}

/** Main component */
const SimpleInputLayout = (props: ISimpleInputLayoutProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    labelClassName,
    className,
    classes,
    errorMsg,
    disabled,
    appendContent,
    showPrependBackground,
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
    <div className={classNames([large ? classes.large : ''], classes[sizeVariant])}>
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
const StyledInputFieldLayout = withStyles(styles)(SimpleInputLayout);
const PropsWrappedStyledSimpleInputLayout = (props: ISimpleInputLayoutProps & React.HTMLProps<HTMLDivElement>) => <StyledInputFieldLayout {...props} />;

/** Exports */
export default PropsWrappedStyledSimpleInputLayout;
export {
  PropsWrappedStyledSimpleInputLayout as SimpleInputLayout,
};
