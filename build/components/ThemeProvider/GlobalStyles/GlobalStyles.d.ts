import * as React from 'react';
import { WithStyles } from 'react-jss';
interface IProps {
    children: any;
}
declare const WrappedGlobalStyles: React.ComponentType<Pick<IProps & WithStyles<(theme: any) => {
    '@global': {
        '@import': any[];
        html: {
            height: string;
            width: string;
        };
        body: {
            fontFamily: any;
            fontWeight: any;
            height: string;
            width: string;
            padding: number;
            margin: number;
            backgroundColor: any;
            color: any;
        };
        h1: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
        };
        h2: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
        };
        h3: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
        };
        h4: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
        };
        p: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
        };
        b: {
            fontFamily: any;
            fontWeight: any;
        };
        '#root': {
            height: string;
        };
        'button:focus': {
            outline: string;
        };
        '*, ::after, ::before': {
            boxSizing: string;
        };
        a: {
            color: any;
            textDecoration: string;
            '&:hover': {
                textDecoration: string;
            };
        };
    };
}>, "children"> & {
    classes?: Partial<Record<"@global", string>> | undefined;
}>;
export { WrappedGlobalStyles as GlobalStyles };
