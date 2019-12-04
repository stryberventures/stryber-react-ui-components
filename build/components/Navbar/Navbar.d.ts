import * as React from 'react';
/** Interfaces */
export interface INavbarProps extends React.HTMLProps<HTMLDivElement> {
    children?: any;
}
export interface INavbarSectionProps extends React.HTMLProps<HTMLDivElement> {
    align: 'left' | 'center' | 'right';
}
declare const PropsWrappedStyledNavbar: (props: INavbarProps) => JSX.Element;
declare const PropsWrappedStyledNavbarSection: (props: INavbarSectionProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledNavbar;
export { PropsWrappedStyledNavbar as Navbar, PropsWrappedStyledNavbarSection as NavbarSection, };
