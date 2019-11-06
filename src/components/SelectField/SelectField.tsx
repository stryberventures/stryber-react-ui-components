import * as React from 'react';
import { InputFieldLayout } from '../InputFieldLayout';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './SelectField.styles';
import { FormContext } from '../Form';

export interface IChoiceData {
  label: string;
  value: string;
}

export interface ISelectFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  choices: IChoiceData[];
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  clearFormValueOnUnmount?: boolean;
  prependContent?: any;
  appendContent?: any;
  errorMessage?: string;
  [key: string]: any;
}

const SelectField = (props: ISelectFieldProps & WithStyles<typeof styles>) => {
  const {
    name,
    classes,
    errorMessage,
    disabled,
    onChange,
    onFocus,
    onBlur,
    value,
    placeholder,
    choices,
  } = props;

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    updateFormTouched,
    formValues,
    formErrors,
    formTouched,
  } = React.useContext(FormContext);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = React.useState((formValues && formValues[name]) || value);
  const [hoverIndex, setHoverIndex] = React.useState(-1);

  /** Selected choice */
  const selectChoiceIndex = choices.findIndex((d) => d.value === internalValue);
  const selectedChoice = selectChoiceIndex > -1 ? choices[selectChoiceIndex] : null;

  /** Select Field State */
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);


  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, value: targetValue } = e.target;
    /** Internal value update */
    setInternalValue(() => targetValue);
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
  const onKeyDownWrapper = (e: React.KeyboardEvent) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      if (isDropdownOpen) {
        setHoverIndex(() => -1);
        setInternalValue(() => choices[hoverIndex].value);
      } else {
        setHoverIndex(() => selectChoiceIndex);
      }
      setDropdownOpen(v => !v);
    }
    if (e.keyCode === 38) {
      setHoverIndex(v => v > 0 ? v - 1 : v);
    }
    if (e.keyCode === 40) {
      setHoverIndex(v => v < choices.length - 1 ? v + 1 : v);
    }
  };

  /** Append content arrow */
  const appendContent = (
    <div
      className={classNames([
        classes.dropdownArrow,
        isDropdownOpen ? classes.dropdownArrowOpen : null,
      ])}
    >
    </div>
  )

  return (
    <>
      {/** Clickaway element */}
      {
        isDropdownOpen
          ? (
            <div
              className={classes.clickaway}
              onClick={() => setDropdownOpen(() => false)}
            >
            </div>
          ) : null
      }
      {/** Root wrapper */}
      <div
        className={classNames([
          classes.root,
          isDropdownOpen ? classes.rootOpen : null,
        ])}
      >
        {/** Value & Placeholder / Header */}
        <InputFieldLayout
          isPlaceholderCollapsed={!!selectedChoice}
          errorMsg={errorMsg}
          disabled={disabled}
          placeholder={placeholder}
          appendContent={appendContent}
          onClick={() => setDropdownOpen(v => !v)}
        >
          {/** Input filed layout content */}
          <select
            className={classes.selectElement}
            onChange={onChangeWrapper}
            onBlur={onBlurWrapper}
            onFocus={onFocusWrapper}
            onKeyDown={onKeyDownWrapper}
          >
          </select>
          <div
            className={classNames([
              classes.selectLabel,
              placeholder ? classes.selectLabelWithPlaceholder : null,
              errorMsg ? classes.selectLabelInvalid : null,
            ])}
          >
            { selectedChoice ? selectedChoice.label : null }
          </div>
        </InputFieldLayout>
        {/** Select dropdown */}
        {
          isDropdownOpen
            ? (
              <div
                className={classes.dropdownWrapper}
              >
              {
                choices
                  .map(({ label, value }: IChoiceData, i: number) => (
                    <div
                      className={classNames([
                        classes.dropdownItem,
                        internalValue === value ? classes.dropdownItemSelected : null,
                        hoverIndex === i ? classes.dropdownItemHover : null,
                      ])}
                      onMouseOver={() => {
                        setHoverIndex(() => i);
                      }}
                      onClick={() => {
                        setInternalValue(() => value);
                        setDropdownOpen(() => false);
                      }}
                      key={i}
                    >
                      { label }
                    </div>
                  ))
              }
              </div>
            ) : null
        }
      </div>
    </>
  );
};

const StyledSelectField = withStyles(styles)(SelectField);

export default StyledSelectField;
export { StyledSelectField as SelectField };
