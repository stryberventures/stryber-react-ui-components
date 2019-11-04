import * as React from "react";
import withStyles, { WithStyles } from 'react-jss';
import styles from './CheckboxField.styles';
import { FormContext } from "../Form";

interface ICheckboxFieldProps {
  name: string;
  value?: any;
  placeholder?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  variant?: 'checkmark' | 'switch';
  errorMessage?: string;
}

const CheckboxField = (props: ICheckboxFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  /** Get props */
  const {
    classes,
    value,
    name,
    checked,
    placeholder,
    errorMessage,
    onChange,
    onFocus,
    variant,
    ...rest
  } = props;

  /** Ref */
  const inputRef = React.createRef<HTMLInputElement>();

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    formValues,
    formErrors,
    updateFormTouched,
    formTouched,
  } = React.useContext(FormContext);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Get checked value when using within a form or solo */
  const checkedValue = formValues ? formValues[name] : undefined;

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, checked } = e.target;
    /** Passthrough to form context */
    formValues && updateFormValue(name, checked);
    /** Independent callback */
    onChange && onChange(e);
  };
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    /** Passthrough to form context */
    formTouched && updateFormTouched(name, true);
    /** Independent callback */
    onFocus && onFocus(e);
  };

  /** On mount/unmount logic */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    if (formValues) {
      updateFormValue(name, !!checked);
    } else {
      /** Set initial input field checked value */
      //@ts-ignore
      inputRef.current.checked = checked;
    }
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      formValues && updateFormValue(name, undefined);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <label className={classes.root}>
        <input
          {...rest}
          ref={inputRef}
          type="checkbox"
          className={classes.input}
          name={name}
          value={value}
          checked={checkedValue}
          onChange={onChangeWrapper}
          onFocus={onFocusWrapper}
        />
        <span className={ variant === 'switch' ? classes.switch : classes.checkmark }>
        </span>
        <div className={classes.placeholder}>
          { placeholder }
        </div>
      </label>
      { errorMsg ?
        (<div className={classes.errorMessage}>
          { errorMsg }
        </div>) : null
      }
    </div>
  );
};

const StyledCheckboxField = withStyles(styles)(CheckboxField);
export default StyledCheckboxField;
export {
  StyledCheckboxField as CheckboxField
};
