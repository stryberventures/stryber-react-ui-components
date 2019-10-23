import * as React from 'react';
import { ThemeProvider } from '../../../components/ThemeProvider';
import { GlobalStyles } from "../../../components/GlobalStyles";

const Wrapper = (props: any) => (
  <ThemeProvider>
    <GlobalStyles>
      { props.children }
    </GlobalStyles>
  </ThemeProvider>
);

export { Wrapper };
