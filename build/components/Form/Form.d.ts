import * as React from 'react';
import { WithStyles } from 'react-jss';
/** Context used by input fields within the form */
export interface IFormContext {
    formValues: any;
    formErrors: any;
    onChange: (data: any) => void;
    initialValues?: any;
}
export declare const FormContext: React.Context<IFormContext>;
/** Form props */
interface FormProps {
    onSubmit: (formData: any) => void;
    children: any;
    initialValues?: any;
    validationSchema?: any;
    [key: string]: any;
}
declare const StyledForm: React.ComponentType<Pick<FormProps & React.HTMLProps<HTMLFormElement> & WithStyles<(theme: any) => {
    root: {
        borderRadius: number;
        padding: number;
        border: string;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"root", string>> | undefined;
}>;
export default StyledForm;
export { StyledForm as Form };
