import * as React from 'react';
import { WithStyles } from 'react-jss';
interface IProps {
    children: any;
}
declare const WrappedGlobalStyles: React.ComponentType<Pick<IProps & WithStyles<(theme: any) => {
    '@global': {
        '@font-face': {
            fontFamily: any;
            src: string;
        }[];
        html: {
            height: string;
            width: string;
        };
        body: {
            fontFamily: any;
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
        };
        h2: {
            fontSize: number;
            fontFamily: any;
        };
        h3: {
            fontSize: number;
            fontFamily: any;
        };
        h4: {
            fontSize: number;
            fontFamily: any;
        };
        p: {
            fontSize: number;
            fontFamily: any;
        };
        b: {
            fontFamily: any;
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
