import * as React from 'react';
/** Interfaces */
/** Context used by input fields within the form */
export interface IFormContext {
    updateFormValue: (name: string, data: any, init?: boolean) => void;
    updateFormTouched: (name: string, data: any) => void;
    unsetFormValue: (name: any) => void;
    formValues: any;
    formErrors: any;
    formTouched: any;
    initialValues?: any;
}
/** Creating form context with default values */
export declare const defaultFormContextValues: {
    updateFormValue: (name: string, data: any, init?: boolean | undefined) => void;
    updateFormTouched: (name: string, data: any) => void;
    unsetFormValue: (name: any) => void;
    formValues: undefined;
    formErrors: undefined;
    formTouched: undefined;
    initialValues: undefined;
};
export declare const FormContext: React.Context<IFormContext>;
/** Form props */
export interface IFormProps {
    onSubmit?: (formData: any) => void;
    onReset?: (formData: any) => void;
    onError?: (errorData: any, formData: any) => void;
    onChange?: (newFormData: any) => void;
    onValidate?: (newFormData: any) => any;
    onValidateAsync?: (newFormData: any) => Promise<any>;
    children: any;
    initialValues?: any;
    validationSchema?: any;
}
/** Form component */
declare const Form: (props: IFormProps) => JSX.Element;
/** Exports */
export default Form;
export { Form, };
