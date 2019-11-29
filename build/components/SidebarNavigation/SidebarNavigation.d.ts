import * as React from 'react';
/** Interfaces */
export interface ISidebarNavigationContainerProps {
    onRouteChange?: (section: any, route: any) => void;
    initialSection?: any;
    initialRoute?: any;
    children?: any;
}
export interface ISidebarNavigationSection {
    title: any;
    description: any;
    route: any;
    children?: any;
}
export interface ISidebarNavigationRouteProps {
    route: any;
    children?: any;
}
/** Context used by navigation components */
export interface ISidebarNavigationContext {
    updateSelectedSection: (section: any) => void;
    updateSelectedRoute: (route: any) => void;
    selectedSection: any;
    selectedRoute: any;
}
/** Creating form context with default values */
export declare const defaultSidebarNavigationContext: {
    updateSelectedSection: () => void;
    updateSelectedRoute: () => void;
    selectedSection: undefined;
    selectedRoute: undefined;
};
export declare const SidebarNavigationContext: React.Context<ISidebarNavigationContext>;
declare const PropsWrappedStyledSidebarNavigationContainer: (props: ISidebarNavigationContainerProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
declare const PropsWrappedStyledSidebarNavigationSection: (props: ISidebarNavigationSection & React.HTMLProps<HTMLDivElement>) => JSX.Element;
declare const PropsWrappedStyledSidebarNavigationRoute: (props: ISidebarNavigationRouteProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledSidebarNavigationContainer;
export { PropsWrappedStyledSidebarNavigationContainer as SidebarNavigationContainer, PropsWrappedStyledSidebarNavigationSection as SidebarNavigationSection, PropsWrappedStyledSidebarNavigationRoute as SidebarNavigationRoute, };
