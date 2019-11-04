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
    onFocus,
    ...rest
  } = props;

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
  const checkedValue = formValues ? formValues[name] : checked;

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, checked } = e.target;
    updateFormValue && updateFormValue(name, checked);
  };
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    updateFormTouched && updateFormTouched(name, true);
    onFocus && onFocus(e);
  };
  /** On mount/unmount logic */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    updateFormValue && updateFormValue(name, !!checked);
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      updateFormValue && updateFormValue(name, undefined);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <label className={classes.root}>
        <input
          {...rest}
          type="checkbox"
          className={classes.input}
          name={name}
          value={value}
          checked={checkedValue || false}
          onChange={onChangeWrapper}
          onFocus={onFocusWrapper}
        />
        <span className={classes.checkmark}>
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
