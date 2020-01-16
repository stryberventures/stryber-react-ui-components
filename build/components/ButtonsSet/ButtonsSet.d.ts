import * as React from "react";
/** Interfaces */
export interface IButtonsData {
    label: string;
    active: boolean;
    onClick: (e: React.SyntheticEvent) => void;
}
export interface IButtonsSetProps extends React.HTMLProps<HTMLDivElement> {
    className?: any;
    buttonsData: IButtonsData[];
}
declare const PropsWrappedStyledBadge: (props: IButtonsSetProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledBadge;
export { PropsWrappedStyledBadge as ButtonsSet };
