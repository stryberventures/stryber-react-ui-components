import * as React from "react";
import classNames from "classnames";
import withStyles, { WithStyles } from 'react-jss';
import styles from './TextInput.styles';
import { InputFieldLayout } from '../../../InputFieldLayout';

interface ITextInputProps {
  name: string;
  type: string;
  placeholder?: string;
  value: any;
  disabled?: boolean;
  onChange: (e: React.BaseSyntheticEvent) => void;
  onFocus: (e: React.BaseSyntheticEvent) => void;
  onBlur: (e: React.BaseSyntheticEvent) => void;
  isFocused?: boolean;
  errorMsg?: string;
  prependContent?: any;
  appendContent?: any;
}

const TextInput = (props: ITextInputProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    errorMsg,
    disabled,
    placeholder,
    isFocused,
    prependContent,
    appendContent,
    value,
    ...rest
  } = props;
  return (
    <InputFieldLayout
      appendContent={appendContent}
      prependContent={prependContent}
      isPlaceholderCollapsed={!!((typeof value !== 'undefined' && value !== '') || isFocused)}
      errorMsg={errorMsg}
      disabled={disabled}
      placeholder={placeholder}
    >
      <input
        {...rest}
        className={classNames([
          classes.input,
          placeholder ? classes.inputWithPlaceholder : null,
          errorMsg ? classes.inputInvalid : null,
        ])}
        disabled={disabled}
        value={value || ''}
      />
    </InputFieldLayout>
  );
};

const StyledTextInput = withStyles(styles)(TextInput);
export default StyledTextInput;
export {
  StyledTextInput as TextInput
};
