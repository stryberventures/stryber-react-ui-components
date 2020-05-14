import * as React from 'react';
import { InputFieldLayout } from '../InputFieldLayout';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './MultiSelectField.styles';
import { defaultFormContextValues, FormContext} from '../Form';
import { CheckboxField } from '../CheckboxField';
import { ValueBadge } from '../ValueBadge';
import { DownArrow } from '../Icons';
import { SearchField } from '../SearchField';

/** Interfaces */
export interface IMultiChoiceData {
  label: any;
  value: any;
}

export interface IMultiSelectFieldProps {
  name: string;
  placeholder?: string;
  choices: IMultiChoiceData[];
  values?: any[];
  controlled?: boolean;
  disabled?: boolean;
  onChange?: (value: any) => void;
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
  clearFormValueOnUnmount?: boolean;
  appendContent?: React.ReactNode;
  sizeVariant?: 'normal' | 'mini';
  customPlaceholderFont?: boolean;
  placeholderClassName?: string;
  errorMessage?: string;
  showBadgeChoices?: boolean;
  refApi?: any;
  search?: boolean;
}

/** Main component */
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
    controlled,
    placeholder,
    choices,
    clearFormValueOnUnmount,
    appendContent,
    refApi,
    search,
    customPlaceholderFont,
    placeholderClassName,
    showBadgeChoices = true,
    sizeVariant = 'normal',
  } = props;

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    updateFormValue,
    updateFormTouched,
    formValues,
    formErrors,
    formTouched,
    unsetFormValue,
  } = React.useContext(FormContext);

  /** Getting error message from form errors */
  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  /** Focus status (needed for styles) */
  const [isFocused, setFocused] = React.useState(false);
  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValues, setInternalValues] = React.useState(formValues ? formValues[name] : (values || []));

  /** Selected choice */
  const selectedChoices = choices.filter((d: IMultiChoiceData) => (controlled ? values : (internalValues || [])).indexOf(d.value.toString()) > -1);

  /** Select Field State */
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  /** Search Value State */
  const [searchValue, setSearchValue] = React.useState<string>('');

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (values: any[]) => {
    /** Passthrough to form context */
    formValues && updateFormValue(name, values);
    /** Independent callback */
    onChange && onChange(values);
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
  const removeSelectionLabel = (value: any) => {
    setDropdownOpen(() => false);
    setInternalValues((oiv: any[]) => {
      const newValues = (oiv || []).filter(d => d !== value.toString());
      onChangeWrapper(newValues);
      return newValues;
    });
  };
  const selectedBadgeOnClose = (value: any) => {
    return (e: React.BaseSyntheticEvent) => {
      e.stopPropagation();
      removeSelectionLabel(value);
    };
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
        newValues = (oiv || []).filter((d: any) => d !== name).concat([name]);
      } else {
        newValues = (oiv || []).filter((d: any) => d !== name);
      }
      onChangeWrapper(newValues);

      return newValues;
    });
  };

  /** Append content and down arrow */
  const appendContentWithArrow = (
    <>
      {appendContent ? appendContent : null}
      <DownArrow
        className={classNames([
          classes.dropdownArrow,
          sizeVariant === 'normal' ? classes.dropdownArrowNormal : null,
          isDropdownOpen ? classes.dropdownArrowOpen : null,
          isFocused ? classes.dropdownArrowFocused : null,
        ])}
      />
    </>
  );

  const isChoiceSelected = (option:IMultiChoiceData) => !!selectedChoices.find(d => d.value === option.value);

  const getChoices = (choices:IMultiChoiceData[]) => {
    return (
      choices.map((choice: IMultiChoiceData, i: number) => {
        return (
          <CheckboxField
            className={classNames([
              classes.dropdownItem,
              sizeVariant === 'mini' ? classes.dropdownItemMini : null,
            ])}
            sizeVariant="small"
            key={search ? choice.value : i}
            placeholder={choice.label}
            name={choice.value}
            checked={isChoiceSelected(choice)}
            onChange={checkboxOnChangeWrapper}
          />
        )
      })
    );
  };

  const getSearchChoices = (choices:IMultiChoiceData[], value: string) => {
    const matchedChoices = choices.filter(choice => choice.label.toUpperCase().indexOf(value.toUpperCase()) === 0);

    const pickedChoices = matchedChoices.filter(choice => isChoiceSelected(choice));
    const unpickedChoices = matchedChoices.filter(choice => !isChoiceSelected(choice));

    return getChoices([...pickedChoices, ...unpickedChoices]);
  };

  const getBadgeChoices = () => {
    return selectedChoices.map(({ label, value }: IMultiChoiceData) => {
      return (
        <ValueBadge
          key={value}
          onClose={selectedBadgeOnClose(value)}
        >
          { label }
        </ValueBadge>
      );
    });
  };

  React.useImperativeHandle(refApi, () => ({
    clear: () => {
      setInternalValues([]);
      search && setSearchValue('');
    }
  }));

  /** Mount / unmount logic */
  React.useEffect(() => {
    /** Running first validation on mount */
    if (updateFormValue) updateFormValue(name, internalValues);
    return () => {
      if (unsetFormValue && clearFormValueOnUnmount) unsetFormValue(name);
    };
  }, []);
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
        ref={refApi}
        className={classNames([
          classes.root,
          isDropdownOpen ? classes.rootOpen : null,
        ])}
      >
        {/** Value & Placeholder / Header */}
        <InputFieldLayout
          isPlaceholderCollapsed={showBadgeChoices ? selectedChoices.length > 0 : false}
          errorMsg={errorMsg}
          disabled={disabled}
          placeholder={placeholder}
          appendContent={appendContentWithArrow}
          sizeVariant={sizeVariant}
          showPrependBackground={sizeVariant !== 'mini'}
          customPlaceholderFont={customPlaceholderFont}
          placeholderClassName={placeholderClassName}
          onClick={inputLabelOnClick}
        >
          <div
            tabIndex={0}
            onBlur={onBlurWrapper}
            onFocus={onFocusWrapper}
            className={classNames([
              classes.selectLabel,
              placeholder ? classes.selectLabelWithPlaceholder : null,
              sizeVariant === 'mini' ? classes.selectLabelMini : classes.selectLabelNormal,
              errorMsg ? classes.selectLabelInvalid : null,
            ])}
          >
            {showBadgeChoices ? getBadgeChoices() : null}
          </div>
        </InputFieldLayout>
        {/** Multi Select dropdown */}
        {
          isDropdownOpen
            ? (
              <FormContext.Provider
                value={defaultFormContextValues}
              >
              <div
                className={classNames([
                  classes.dropdownWrapper,
                  !search && (sizeVariant === 'mini'
                    ? classes.dropdownWrapperMini
                    : classes.dropdownWrapperNormal),
                ])}
              >
                {
                  search ? (
                    <>
                      <SearchField
                        value={searchValue}
                        collapsiblePlaceholder={false}
                        onChange={value => {setSearchValue(value)}}
                        sizeVariant={sizeVariant}
                      />
                      <div className={classNames(classes.dropdownSearchItemsWrapper, [
                        sizeVariant === 'mini'
                          ? classes.dropdownSearchItemsWrapperMini
                          : classes.dropdownSearchItemsWrapperNormal,
                      ])}>
                        {getSearchChoices(choices, searchValue)}
                      </div>
                    </>
                  ) : getChoices(choices)
                }
              </div>
              </FormContext.Provider>
            ) : null
        }
      </div>
    </>
  );
};

/** Wrappers */
const StyledMultiSelectField = withStyles(styles)(MultiSelectField);
const PropsWrappedStyledMultiSelectField = React.forwardRef((props: IMultiSelectFieldProps, ref) =>
  <StyledMultiSelectField {...props} refApi={ref}/>
);

/** Exports */
export default PropsWrappedStyledMultiSelectField;
export {
  PropsWrappedStyledMultiSelectField as MultiSelectField,
};
