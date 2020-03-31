import * as React from 'react';
/** Card */
export interface CardProps {
    className?: any;
    children: any;
}
/** Title */
interface TitleProps {
    children: any;
    className?: any;
}
/** Body */
interface BodyProps {
    children: any;
    className?: any;
}
/** Wrappings */
declare const PropsWrappedStyledCard: (props: CardProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
declare const PropsWrappedStyledTitle: (props: TitleProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
declare const PropsWrappedStyledBody: (props: BodyProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledCard;
export { PropsWrappedStyledCard as Wrapper, PropsWrappedStyledTitle as Title, PropsWrappedStyledBody as Body, };
