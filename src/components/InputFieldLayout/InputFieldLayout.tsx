import * as React from "react";
import classNames from "classnames";
import { PrependBackground } from '../Icons';
import withStyles, { WithStyles } from 'react-jss';
import styles from './InputFieldLayout.styles';

/** Interfaces */
export interface IInputFieldLayoutProps {
  placeholder?: string;
  placeholderClassName?: string;
  disabled?: boolean;
  isPlaceholderCollapsed: boolean;
  errorMsg?: string;
  prependContent?: any;
  appendContent?: any;
  showPrependBackground?: boolean;
  children?: any;
  sizeVariant?: 'normal' | 'mini' | 'micro';
  customPlaceholderFont?: boolean;
}

/** Main component */
const InputFieldLayout = (props: IInputFieldLayoutProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    classes,
    errorMsg,
    disabled,
    prependContent,
    appendContent,
    placeholder,
    isPlaceholderCollapsed,
    children,
    placeholderClassName,
    showPrependBackground = true,
    customPlaceholderFont = false,
    sizeVariant = 'normal',
    ...rest
  } = props;
  return (
    <>
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
            showPrependBackground ? classes.prependBackgroundColor: null,
            (showPrependBackground && prependContent) ? classes.prependMargin : null,
            disabled ? classes.prependDisabled : null,
            errorMsg ? classes.prependInvalid : null,
          ])}
        >
          { prependContent 
            ? <div className={classNames({
                [classes.prependContent]: ['mini', 'normal'].includes(sizeVariant),
                [classes.prependContentMicro]: sizeVariant === 'micro'
              })              
              }>
                {prependContent}
              </div>
            : null}
          { (prependContent && showPrependBackground) ? <PrependBackground className={classes.prependBackgroundIcon}/> : null}
        </div>
        <div className={classes.fieldWrapper}>
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
                { placeholder }
              </div>) : null
          }
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
    </>
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
