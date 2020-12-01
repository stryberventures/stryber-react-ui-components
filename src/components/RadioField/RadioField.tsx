import * as React from "react";
import withStyles, { WithStyles } from 'react-jss';
import styles from './RadioField.styles';
import { FormContext } from "../Form";
import classNames from 'classnames';

/** Interfaces */
export interface IRadioFieldProps {
  name: string;
  value: any;
  placeholder?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  sizeVariant?: 'small' | 'normal' | 'large';
  errorMessage?: string;
  textColor?: string;
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
}

/** Main component */
const RadioField = (props: IRadioFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  /** Get props */
  const {
    classes,
    value,
    name,
    checked,
    placeholder,
    onChange,
    sizeVariant = 'normal',
    errorMessage,
    textColor,
    loading = false,
    loadingClassName,
    loadingStyle = {},
    ...rest
  } = props;

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    formValues,
    formTouched,
    formErrors,
    loading: formLoading,
  } = React.useContext(FormContext);

  /** Ref */
  const inputRef = React.createRef<HTMLInputElement>();

  /** Get checked value when using within a form or solo */
  const checkedValue = formValues ? formValues[name] === value : undefined;

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, value: targetValue } = e.target;
    formValues && updateFormValue(name, targetValue);
    onChange && onChange(e);
  };
  /** On mount/unmount logic */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    if(formValues) {

    } else if (!formLoading && !loading) {
      /** Set initial checked value when used independently */
      //@ts-ignore
      inputRef.current.checked = checked;
    }
    checked && formValues && updateFormValue(name, value, true);


    return () => {
      /** On unmount */
      /** Clear Form value if needed */
    };
  }, []);

  if (formLoading || loading) {
    return <div className={classNames(classes.loadingContainer, loadingClassName)} style={loadingStyle}>
      <div className={classNames(
        'loadingAnimation',
        classes.radioLoading,
        { [classes.radioSmallLoading]: sizeVariant === 'small' },
        { [classes.radioLargeLoading]: sizeVariant === 'large' },
      )}/>
      <div className={classNames(
        classes.labelLoading,
        'loadingAnimation',
        { [classes.labelLargeLoading]: sizeVariant === 'large' }
      )}/>
    </div>
  }

  return (
    <div className={errorMsg ? classes.error : undefined}>
      <label className={classNames(classes.root, classes[sizeVariant])}>
        <input
          {...rest}
          ref={inputRef}
          type="radio"
          className={classes.input}
          name={name}
          value={value}
          checked={checkedValue}
          onChange={onChangeWrapper}
        />
        <span className={classes.checkmark}>
        </span>
        <div className={classes.placeholder} style={{color:textColor ? textColor : undefined}}>
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

/** Wrappers */
const StyledRadioField = withStyles(styles)(RadioField);
const PropsWrappedStyledRadioField = (props: IRadioFieldProps & React.HTMLProps<HTMLInputElement>) => <StyledRadioField {...props} />;

/** Exports */
export default PropsWrappedStyledRadioField;
export {
  PropsWrappedStyledRadioField as RadioField,
};
