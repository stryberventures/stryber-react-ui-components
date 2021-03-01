import * as React from "react";
import classNames from "classnames";
import withStyles, { WithStyles } from 'react-jss';
import styles from './InputFieldLayout.styles';

/** Interfaces */
export interface IInputFieldLayoutProps {
  placeholder?: string;
  placeholderClassName?: string;
  disabled?: boolean;
  isPlaceholderCollapsed: boolean;
  errorMsg?: string;
  appendContent?: any;
  showPrependBackground?: boolean;
  children?: any;
  sizeVariant?: 'normal' | 'mini';
  customPlaceholderFont?: boolean;
  large?: boolean;
  labelClassName?: any;
}

/** Main component */
const InputFieldLayout = (props: IInputFieldLayoutProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    classes,
    errorMsg,
    disabled,
    appendContent,
    placeholder,
    isPlaceholderCollapsed,
    children,
    placeholderClassName,
    showPrependBackground = true,
    customPlaceholderFont = false,
    sizeVariant = 'normal',
    large = false,
    labelClassName,
    ...rest
  } = props;
  return (
    <div className={classNames([large ? classes.large : '', classes[sizeVariant]])}>
      <div
        {...rest}
        className={classNames([
          classes.root,
          className,
          disabled ? classes.rootDisabled : null,
          errorMsg ? classes.rootInvalid : null,
        ])}
      >
        <div
          className={classNames([
            classes.prepend,
            showPrependBackground ? classes.prependBackgroundColor : null,
            disabled ? classes.prependDisabled : null,
            errorMsg ? classes.prependInvalid : null,
          ])}
        />
        <div className={classNames(classes.fieldWrapper, {
          [classes.fieldWrapperMini]: sizeVariant === 'mini',
          [classes.fieldWrapperNormal]: sizeVariant === 'normal',
        })}>
          {
            placeholder ?
              (<div
                className={classNames([
                  classes.placeholder,
                  placeholderClassName,
                  sizeVariant === 'mini' ? classes.placeholderMini : classes.placeholderNormal,
                  customPlaceholderFont ? null : classes.placeholderFontFamily,
                  isPlaceholderCollapsed ? classes.placeholderCollapsed : null,
                  errorMsg ? classes.placeholderInvalid : null,
                ])}
              >
                {placeholder}
              </div>) : null
          }
          {children}
        </div>
        <div
          className={classNames([
            classes.append,
          ])}
        >
          {appendContent}
        </div>
      </div>
      {/** Error message */}
      {
        errorMsg ?
          (
            <div
              className={classes.errorMessage}
            >
              {errorMsg}
            </div>
          ) : null
      }
    </div>
  );
};

/** Wrappers */
const StyledInputFieldLayout = withStyles(styles)(InputFieldLayout);
const PropsWrappedStyledInputFieldLayout = (props: IInputFieldLayoutProps & React.HTMLProps<HTMLDivElement>) => <StyledInputFieldLayout {...props} />;

/** Exports */
export default PropsWrappedStyledInputFieldLayout;
export {
  PropsWrappedStyledInputFieldLayout as InputFieldLayout,
};
