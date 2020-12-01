import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Slider.styles';
import {useEffect, useRef, useState} from "react";
import {FormContext} from "../Form";

export interface ISliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  errorMessage?: string;
  controlled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  name?: string;
  clearFormValueOnUnmount?: boolean;
  containerClassName?: any;
  className?: any;
  sizeVariant?: 'normal' | 'small' | 'large';
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
}

const Slider = (props: ISliderProps & React.HTMLProps<HTMLInputElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    name = 'unnamed',
    min = 0,
    max = 100,
    step = 1,
    value = 0,
    onChange,
    onFocus,
    onBlur,
    errorMessage,
    clearFormValueOnUnmount = true,
    controlled,
    sizeVariant = 'normal',
    containerClassName,
    className,
    loading,
    loadingStyle = {},
    loadingClassName,
    ...rest
  } = props;

  /** Form-methods start */
  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
    updateFormTouched,
    loading: formLoading
  } = React.useContext(FormContext);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((name && formValues && formValues[name]) || value);

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, value: targetValue } = e.target;
    /** Internal value update */
    setInternalValue(targetValue);
    /** Passthrough to form context */
    formValues && updateFormValue(name, targetValue);
    /** Independent callback */
    onChange && onChange(e);
  };

  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    /** Independent callback */
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    /** Passthrough to form context */
    formTouched && updateFormTouched(name, true);
    /** Independent callback */
    onBlur && onBlur(e);
  };

  /** On mount/unmount logic */
  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    formValues && updateFormValue(name, internalValue, true);
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      clearFormValueOnUnmount && formValues && unsetFormValue(name);
    };
  }, []);
  /** Form-methods end */

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const inputElement: any = inputRef.current;
    const getPercent = (): number => ((inputElement.value - inputElement.min) / (inputElement.max - inputElement.min)) * 100;

    const handleMove = () => {
      if (!isChanging) return;
      inputElement.style.setProperty("--webkitProgressPercent", `${getPercent()}%`);
    };
    const handleUpAndLeave = () => setIsChanging(false);
    const handleDown = () => setIsChanging(true);

    if (!formLoading && !loading) {
      inputElement.style.setProperty('--webkitProgressPercent', `${getPercent()}%`);
      inputElement.addEventListener("mousemove", handleMove);
      inputElement.addEventListener("mousedown", handleDown);
      inputElement.addEventListener("mouseup", handleUpAndLeave);
      inputElement.addEventListener("mouseleave", handleUpAndLeave);
    }
    return () => {
      if (!formLoading && !loading) {
        inputElement.removeEventListener("mousemove", handleMove);
        inputElement.removeEventListener("mousedown", handleDown);
        inputElement.removeEventListener("mouseup", handleUpAndLeave);
        inputElement.removeEventListener("mouseleave", handleUpAndLeave);
      }
    };
  }, [isChanging]);

  if (formLoading || loading) {
    return (
      <div className={classNames(classes.loadingContainer, loadingClassName)} style={loadingStyle}>
        <div className={classNames(
          'loadingAnimation',
          classes.sliderLoading,
          { [classes.sliderSmallLoading]: sizeVariant === 'small' },
          { [classes.sliderLargeLoading]: sizeVariant === 'large' },
        )}/>
        <div className={classNames(
          'loadingAnimation',
          classes.loadingCircle,
          { [classes.loadingSmallCircle]: sizeVariant === 'small' },
          { [classes.loadingLargeCircle]: sizeVariant === 'large' },
        )}/>
      </div>
      )
  }

  return <div className={classNames([containerClassName, classes.root, classes[sizeVariant]])}>
    <input
      type="range"
      ref={inputRef}
      min={min}
      max={max}
      value={controlled ? value : internalValue}
      step={step}
      onChange={onChangeWrapper}
      onFocus={onFocusWrapper}
      onBlur={onBlurWrapper}
      className={classNames([className, classes.slider])}
      name={name}
      {...rest}
    />
    <div className={classes.error}>{errorMsg}</div>
  </div>
};

/** Wrappings */
const StyledSlider = withStyles(styles)(Slider);
const PropsWrappedStyledSlider = (props: ISliderProps & React.HTMLProps<HTMLInputElement>) => <StyledSlider {...props} />;

/** Exports */
export default PropsWrappedStyledSlider;
export {
  PropsWrappedStyledSlider as Slider,
};
