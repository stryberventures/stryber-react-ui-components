import * as React from 'react';
import { InputFieldLayout } from '../InputFieldLayout';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './MultiSelectField.styles';
import { FormContext } from '../Form';
import { CheckboxField } from '../CheckboxField';
import { ValueBadge } from './ValueBadge';
import { DownArrow } from '../Icons';

export interface IChoiceData {
  label: any;
  value: any;
}

export interface IMultiSelectFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  choices: IChoiceData[];
  values?: any[];
  disabled?: boolean;
  onChange?: (value: any) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  clearFormValueOnUnmount?: boolean;
  prependContent?: any;
  appendContent?: any;
  errorMessage?: string;
  [key: string]: any;
}

const MultiSelectField = (props: IMultiSelectFieldProps & WithStyles<typeof styles>) => {
  const {
    name,
    classes,
    errorMessage,
    disabled,
    onChange,
    onFocus,
    onBlur,
    values,
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

  /** Focus status (needed for styles) */
  const [isFocused, setFocused] = React.useState(false);
  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValues, setInternalValues] = React.useState(formValues ? formValues[name] : (values || []));

  /** Selected choice */
  const selectedChoices = choices.filter((d: IChoiceData) => (internalValues || []).indexOf(d.value) > -1);

  /** Select Field State */
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  console.log('selectedChoices', selectedChoices);

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (values: any[]) => {
    /** Passthrough to form context */
    formValues && updateFormValue(name, internalValues);
    /** Independent callback */
    onChange && onChange(internalValues);
  };
  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    setFocused(true);
    /** Independent callback */
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    setFocused(false);
    /** Passthrough to form context */
    formTouched && updateFormTouched(name, true);
    /** Independent callback */
    onBlur && onBlur(e);
  };

  /** Helper function */
  const clickAwayOnClick = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    setDropdownOpen(() => false);
  };
  const selectedBadgeOnClose = (value: any) => {
    return (e: React.BaseSyntheticEvent) => {
      e.stopPropagation();
      removeSelectionLabel(value);
    };
  };
  const removeSelectionLabel = (value: any) => {
    setDropdownOpen(() => false);
    setInternalValues((civ: any[]) => civ.filter(d => d !== value));
  };
  const inputLabelOnClick = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    setDropdownOpen(v => !v);
  };
  const checkboxOnChangeWrapper = (e: React.BaseSyntheticEvent) => {
    const { name, checked } = e.target;
    setInternalValues((oiv: any[]) => {
        let newValues = [];
      if (checked) {
        newValues = oiv.filter((d: any) => d !== name).concat([name]);
      } else {
        newValues = oiv.filter((d: any) => d !== name);
      }
      onChangeWrapper(newValues);

      return newValues;
    });
  };

  /** Append content arrow */
  const appendContent = (
    <DownArrow
      className={classNames([
        classes.dropdownArrow,
        isDropdownOpen ? classes.dropdownArrowOpen : null,
        isFocused ? classes.dropdownArrowFocused : null,
      ])}
    />
  );

  return (
    <>
      {/** Clickaway element */}
      {
        isDropdownOpen
          ? (
            <div
              className={classes.clickaway}
              onClick={clickAwayOnClick}
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
          isPlaceholderCollapsed={selectedChoices.length > 0}
          errorMsg={errorMsg}
          disabled={disabled}
          placeholder={placeholder}
          appendContent={appendContent}
          onClick={inputLabelOnClick}
        >
          <div
            tabIndex={0}
            onBlur={onBlurWrapper}
            onFocus={onFocusWrapper}
            className={classNames([
              classes.selectLabel,
              placeholder ? classes.selectLabelWithPlaceholder : null,
              errorMsg ? classes.selectLabelInvalid : null,
            ])}
          >
            {
              selectedChoices.map(({ label, value }: IChoiceData) => (
                <ValueBadge
                  key={value}
                  onClose={selectedBadgeOnClose(value)}
                >
                  { label }
                </ValueBadge>
              ))
            }
          </div>
        </InputFieldLayout>
        {/** Multi Select dropdown */}
        {
          isDropdownOpen
            ? (
              <div
                className={classes.dropdownWrapper}
              >
                {
                  choices
                    .map((choiceData: IChoiceData, i: number) => (
                      <CheckboxField
                        className={classes.dropdownItem}
                        key={i}
                        placeholder={choiceData.label}
                        name={choiceData.value}
                        checked={!!selectedChoices.find(d => d.value === choiceData.value)}
                        onChange={checkboxOnChangeWrapper}
                      />
                    ))
                }
              </div>
            ) : null
        }
      </div>
      {/** Error message */}
      {
        errorMsg ? (<div className={classes.errorMessage}>{errorMsg}</div>) : null
      }
    </>
  );
};

const StyledMultiSelectField = withStyles(styles)(MultiSelectField);

export default StyledMultiSelectField;
export { StyledMultiSelectField as MultiSelectField };
