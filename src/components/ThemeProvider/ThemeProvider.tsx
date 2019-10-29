import * as React from 'react';
import { ThemeProvider as JssThemeProvider } from 'react-jss';

import theme from '../../styles/theme';

interface ThemeProviderProps {
  children: any;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  return (
    <JssThemeProvider theme={theme}>
      { children }
    </JssThemeProvider>
  );
};

export { ThemeProvider };
