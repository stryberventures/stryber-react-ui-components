import * as React from 'react';
/** Interfaces */
export interface IBadgeProps extends React.HTMLProps<HTMLDivElement> {
    children: any;
    className?: any;
    label: any;
}
declare const PropsWrappedStyledBadge: (props: IBadgeProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledBadge;
export { PropsWrappedStyledBadge as Badge, };
