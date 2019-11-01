import * as React from 'react';
import { ThemeProvider } from '../../../components/ThemeProvider';

const Wrapper = (props: any) => (
  <ThemeProvider>
    { props.children }
  </ThemeProvider>
);

export { Wrapper };
