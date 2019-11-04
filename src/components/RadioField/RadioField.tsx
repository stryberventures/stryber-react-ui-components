import * as React from "react";
import withStyles, { WithStyles } from 'react-jss';
import styles from './RadioField.styles';
import { FormContext } from "../Form";

interface IRadioFieldProps {
  name: string;
  value: any;
  placeholder?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
}

const RadioField = (props: IRadioFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  /** Get props */
  const {
    classes,
    value,
    name,
    checked,
    placeholder,
    onChange,
    ...rest
  } = props;

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    formValues,
  } = React.useContext(FormContext);

  /** Get checked value when using within a form or solo */
  const checkedValue = formValues ? formValues[name] === value : checked;

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, value: targetValue } = e.target;
    updateFormValue && updateFormValue(name, targetValue);
    onChange && onChange(e);
  };
  /** On mount/unmount logic */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    checked && updateFormValue && updateFormValue(name, value);
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
    };
  }, []);

  return (
    <label className={classes.root}>
      <input
        {...rest}
        type="radio"
        className={classes.input}
        name={name}
        value={value}
        checked={checkedValue}
        onChange={onChangeWrapper}
      />
      <span className={classes.checkmark}>
      </span>
      <div className={classes.placeholder}>
      { placeholder }
      </div>
    </label>
  );
};

const StyledRadioField = withStyles(styles)(RadioField);
export default StyledRadioField;
export {
  StyledRadioField as RadioField
};
