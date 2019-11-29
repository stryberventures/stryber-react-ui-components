import * as React from 'react';
/** Interfaces */
export interface IButtonProps {
    onClick?: (e: React.SyntheticEvent) => void;
    disabled?: boolean;
    children: any;
    variant?: 'primary' | 'secondary';
    sizeVariant?: 'normal' | 'mini';
}
declare const PropsWrappedStyledButton: (props: IButtonProps & React.HTMLProps<HTMLButtonElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledButton;
export { PropsWrappedStyledButton as Button, };
