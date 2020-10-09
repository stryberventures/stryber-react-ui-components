import * as React from "react";
import classNames from "classnames";
import withStyles, { WithStyles } from 'react-jss';
import styles from './CheckboxField.styles';
import { FormContext } from "../Form";

export interface ICheckboxFieldProps {
  name: string;
  value?: any;
  placeholder?: any | React.Component;
  checked?: boolean;
  disabled?: boolean;
  controlled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  variant?: 'checkmark' | 'switch';
  errorMessage?: string;
  textColor?: string;
  sizeVariant?: 'small' | 'normal' | 'large';
}

const CheckboxField = (props: ICheckboxFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  /** Get props */
  const {
    classes,
    className,
    value,
    controlled,
    name,
    checked,
    placeholder,
    errorMessage,
    onChange,
    onFocus,
    variant,
    textColor,
    sizeVariant = 'normal',
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

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((formValues && formValues[name]) || checked);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Get checked value when using within a form or solo */
  // const checkedValue = formValues ? formValues[name] : undefined;

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, checked } = e.target;
    /** Set intenal value */
    setInternalValue(checked);
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
      updateFormValue(name, !!checked, true);
    } else {
      /** Set initial input field checked value */
    }
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      formValues && updateFormValue(name, undefined, true);
    };
  }, []);

  return (
    <div className={classNames([
      classes.wrapper,
      classes[sizeVariant],
      errorMsg ? classes.error : null,
      className
    ])}>
      <label className={classes.root}>
        <input
          {...rest}
          type="checkbox"
          className={classes.input}
          name={name}
          value={value}
          checked={controlled ? checked : internalValue}
          onChange={onChangeWrapper}
          onFocus={onFocusWrapper}
        />
        <span className={ variant === 'switch' ? classes.switch : classes.checkmark }>
        </span>
        <div
          className={classNames([
            classes.placeholder,
            errorMsg ? classes.placeholderInvalid : null,
          ])}
          style={{color:textColor ? textColor : undefined}}
        >
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

/** Wrappings */
const StyledCheckboxField = withStyles(styles)(CheckboxField);
const PropsWrappedStyledCheckboxField = (props: ICheckboxFieldProps & React.HTMLProps<HTMLInputElement>) => <StyledCheckboxField {...props} />;

/** Exports */
export default PropsWrappedStyledCheckboxField;
export {
  PropsWrappedStyledCheckboxField as CheckboxField,
};
