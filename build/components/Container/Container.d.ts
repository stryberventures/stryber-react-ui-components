import * as React from 'react';
import { WithStyles } from 'react-jss';
interface ContainerProps {
    children?: any;
    [key: string]: any;
}
declare const StyledContainer: React.ComponentType<Pick<ContainerProps & WithStyles<(theme: any) => {
    root: {
        [x: string]: string | number | {
            maxWidth: any;
        };
        width: string;
        paddingRight: number;
        paddingLeft: number;
        marginRight: string;
        marginLeft: string;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"root", string>> | undefined;
}>;
export { StyledContainer as Container, };
