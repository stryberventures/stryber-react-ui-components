import * as React from 'react';
/** Interfaces */
export interface INavbarProps {
    children?: any;
}
export interface INavbarSectionProps {
    align: 'left' | 'center' | 'right';
}
declare const PropsWrappedStyledNavbar: (props: INavbarProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
declare const PropsWrappedStyledNavbarSection: (props: INavbarSectionProps & React.HTMLProps<HTMLDivElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledNavbar;
export { PropsWrappedStyledNavbar as Navbar, PropsWrappedStyledNavbarSection as NavbarSection, };
