/// <reference types="react" />
/** Interfaces */
export interface IThemeProviderProps {
    theme?: any;
    children: any;
}
/** Main component */
declare const ThemeProvider: (props: IThemeProviderProps) => JSX.Element;
/** Exports */
export default ThemeProvider;
export { ThemeProvider, };
