import * as React from 'react';
/** Interfaces */
export interface INavigationContainerProps {
    onRouteChange?: (newRoute: any) => void;
    initialRoute?: any;
    children?: any;
    variant?: 'normal' | 'underlined';
}
export interface INavigationRouteProps {
    route: any;
    children?: any;
    selected?: boolean;
}
/** Context used by navigation components */
export interface INavbarNavigationContext {
    updateSelectedRoute: (route: any) => void;
    selectedRoute: any;
    variant: 'normal' | 'underlined';
}
/** Creating form context with default values */
export declare const defaultNavbarNavigationContextValues: {
    updateSelectedRoute: () => void;
    selectedRoute: undefined;
    variant: "normal" | "underlined";
};
export declare const NavbarNavigationContext: React.Context<INavbarNavigationContext>;
declare const PropsWrappedStyledNavigationContainer: (props: INavigationContainerProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
declare const PropsWrappedStyledNavigationRoute: (props: INavigationRouteProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledNavigationContainer;
export { PropsWrappedStyledNavigationRoute as NavigationRoute, PropsWrappedStyledNavigationContainer as NavigationContainer, };
