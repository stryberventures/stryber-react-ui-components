import * as React from "react";
/** Interfaces */
export interface IButtonsData {
    label: string;
    onClick: any;
}
export interface IButtonsSetProps extends React.HTMLProps<HTMLDivElement> {
    className?: any;
    buttonsData: IButtonsData[];
    active?: number;
}
declare const PropsWrappedStyledBadge: (props: IButtonsSetProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledBadge;
export { PropsWrappedStyledBadge as ButtonsSet };
