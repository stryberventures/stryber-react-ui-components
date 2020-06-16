import * as React from 'react';
interface ITagProps {
    onClick?: (e: React.SyntheticEvent) => void;
    className?: any;
    active?: boolean;
}
declare const PropsWrappedStyledNavBurger: (props: ITagProps & React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledNavBurger;
export { PropsWrappedStyledNavBurger as NavBurger, };
