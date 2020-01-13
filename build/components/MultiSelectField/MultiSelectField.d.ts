import * as React from 'react';
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
    disabled?: boolean;
    onChange?: (value: any) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    clearFormValueOnUnmount?: boolean;
    prependContent?: any;
    errorMessage?: string;
    showBadgeChoices?: boolean;
    refApi?: any;
}
declare const PropsWrappedStyledMultiSelectField: React.ForwardRefExoticComponent<IMultiSelectFieldProps & React.RefAttributes<{}>>;
/** Exports */
export default PropsWrappedStyledMultiSelectField;
export { PropsWrappedStyledMultiSelectField as MultiSelectField, };
