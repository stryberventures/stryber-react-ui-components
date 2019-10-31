import * as React from "react";
import classNames from "classnames";
import { PrependBackground } from "../../../Icons";
import withStyles, { WithStyles } from 'react-jss';
import styles from './TextInput.styles';

interface ITextFieldProps {
  name: string;
  type: string;
  placeholder?: string;
  value: any;
  disabled?: boolean;
  onChange: (e: React.BaseSyntheticEvent) => void;
  onFocus: (e: React.BaseSyntheticEvent) => void;
  onBlur: (e: React.BaseSyntheticEvent) => void;
  isFocused?: any;
  errorMsg?: string;
  prependContent?: any;
  appendContent?: any;
}

const TextInput = (props: ITextFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    errorMsg,
    disabled,
    prependContent,
    appendContent,
    placeholder,
    isFocused,
    value,
    ...rest
  } = props;
  return (
    <>
      <div
        className={classNames([
          classes.root,
          errorMsg ? classes.invalidRoot : null,
          disabled ? classes.disabledRoot : null,
        ])}
      >
        <div
          className={classNames([
            classes.prepend,
            prependContent ? classes.prependMargin : null,
            errorMsg ? classes.invalidPrepend : null,
          ])}
        >
          { prependContent ? <div className={classes.prependContent}>{prependContent}</div> : null}
          { prependContent ? <PrependBackground className={classes.prependBackground}/> : null}
        </div>
        <div className={classes.inputWrapper}>
          {
            placeholder ?
              (<div
                className={classNames([
                  classes.placeholder,
                  ((typeof value !== 'undefined' && value !== '') || isFocused) ? classes.placeholderCollapsed : null,
                  errorMsg ? classes.invalidPlaceholder : null,
                ])}
              >
                {placeholder}
              </div>) : null
          }
          <input
            {...rest}
            className={classNames([
              classes.input,
              placeholder ? classes.inputWithPlaceholder : null,
              errorMsg ? classes.invalidInput : null,
            ])}
            disabled={disabled}
            value={value || ''}
          />
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
              {errorMsg}
            </div>
          ) : null
      }
    </>
  );
};

const StyledTextInput = withStyles(styles)(TextInput);
export default StyledTextInput;
export {
  StyledTextInput as TextInput
};
