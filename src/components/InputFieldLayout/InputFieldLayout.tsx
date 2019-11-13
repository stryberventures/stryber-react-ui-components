import * as React from "react";
import classNames from "classnames";
import { PrependBackground } from '../Icons';
import withStyles, { WithStyles } from 'react-jss';
import styles from './InputFieldLayout.styles';

/** Interfaces */
export interface IInputFieldLayoutProps {
  placeholder?: string;
  disabled?: boolean;
  isPlaceholderCollapsed: boolean;
  errorMsg?: string;

  prependContent?: any;
  appendContent?: any;

  showPrependBackground?: boolean;

  children?: any;
}

/** Main component */
const InputFieldLayout = (props: IInputFieldLayoutProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    errorMsg,
    disabled,
    prependContent,
    appendContent,
    placeholder,
    isPlaceholderCollapsed,
    children,
    showPrependBackground = true,
    ...rest
  } = props;
  return (
    <>
      <div
        {...rest}
        className={classNames([
          classes.root,
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
          { prependContent ? <div className={classes.prependContent}>{prependContent}</div> : null}
          { (prependContent && showPrependBackground) ? <PrependBackground className={classes.prependBackgroundIcon}/> : null}
        </div>
        <div className={classes.fieldWrapper}>
          {
            placeholder ?
              (<div
                className={classNames([
                  classes.placeholder,
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
