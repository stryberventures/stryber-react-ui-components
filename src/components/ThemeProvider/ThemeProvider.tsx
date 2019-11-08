import * as React from 'react';
import { ThemeProvider as JssThemeProvider } from 'react-jss';
import { GlobalStyles } from './GlobalStyles';

import defaultTheme from '../../styles/theme';

/** Interfaces */
export interface IThemeProviderProps {
  theme?: any;
  children: any;
}

/** Main component */
const ThemeProvider = (props: IThemeProviderProps) => {
  const { theme, children } = props;
  return (
    <JssThemeProvider theme={{ ...defaultTheme, theme }}>
      <GlobalStyles>
        { children }
      </GlobalStyles>
    </JssThemeProvider>
  );
};

/** Exports */
export default ThemeProvider;
export {
  ThemeProvider,
};
