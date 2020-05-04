import * as React from "react";
import classNames from "classnames";
import withStyles, { WithStyles } from 'react-jss';
import styles from './TextInput.styles';
import { InputFieldLayout } from '../../../InputFieldLayout';
import { SimpleInputLayout } from '../../../SimpleInputLayout';

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
  layout?: 'default' | 'simple';
  label?: string;
  large?: boolean;
  labelClassName?: any;
}

const TextInput = (props: ITextInputProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  const {
    className,
    classes,
    errorMsg,
    disabled,
    placeholder,
    isFocused,
    prependContent,
    appendContent,
    value,
    label,
    layout = 'default',
    large,
    labelClassName,
    ...rest
  } = props;

  const isPlaceholderCollapsed = !!(placeholder && ((typeof value !== 'undefined' && value !== '') || isFocused));
  const isSimpleLayout = layout === 'simple';
  const LayoutComponent = isSimpleLayout ? SimpleInputLayout : InputFieldLayout;

  return (
    <LayoutComponent
      appendContent={appendContent}
      prependContent={prependContent}
      errorMsg={errorMsg}
      disabled={disabled}
      placeholder={placeholder}
      isPlaceholderCollapsed={isPlaceholderCollapsed}
      label={label}
      large={large}
      labelClassName={labelClassName}
    >
      <input
        {...rest}
        className={classNames([
          classes.input,
          placeholder ? classes.inputWithPlaceholder : null,
          (isPlaceholderCollapsed && !isSimpleLayout) ? classes.inputWithPlaceholderCollapsed : null,
          errorMsg ? classes.inputInvalid : null,
        ])}
        disabled={disabled}
        value={value || ''}
        placeholder={isSimpleLayout && placeholder || ''}
      />
    </LayoutComponent>
  );
};

const StyledTextInput = withStyles(styles)(TextInput);
export default StyledTextInput;
export {
  StyledTextInput as TextInput
};
