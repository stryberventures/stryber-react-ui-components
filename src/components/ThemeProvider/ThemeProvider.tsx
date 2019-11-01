import * as React from 'react';
import { ThemeProvider as JssThemeProvider } from 'react-jss';
import { GlobalStyles } from './GlobalStyles';

import defaultTheme from '../../styles/theme';

interface ThemeProviderProps {
  theme?: any;
  children: any;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme, children } = props;
  return (
    <JssThemeProvider theme={{ ...defaultTheme, theme }}>
      <GlobalStyles>
        { children }
      </GlobalStyles>
    </JssThemeProvider>
  );
};

export { ThemeProvider };
