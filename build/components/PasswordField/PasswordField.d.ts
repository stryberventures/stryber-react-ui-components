import * as React from 'react';
import { IInputFieldProps } from '../InputField';
/** Interfaces */
export interface IPasswordFieldProps {
    showPasswordByDefault?: boolean;
}
declare const PropsWrappedStyledPasswordField: (props: IPasswordFieldProps & IInputFieldProps & React.HTMLProps<HTMLInputElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledPasswordField;
export { PropsWrappedStyledPasswordField as PasswordField, };
