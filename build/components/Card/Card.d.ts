import * as React from 'react';
import { WithStyles } from 'react-jss';
/** Card */
export interface CardProps {
    children: any;
}
/** Title */
interface TitleProps {
    children: any;
    [key: string]: any;
}
/** Body */
interface BodyProps {
    children: any;
    [key: string]: any;
}
declare const StyledCard: React.ComponentType<Pick<CardProps & WithStyles<(theme: any) => {
    root: {
        borderRadius: number;
        display: string;
        flexFlow: string;
        boxShadow: string; /** Card */
        overflow: string;
    };
    title: {
        padding: number;
        flex: number;
    };
    body: {
        padding: number;
        flex: number;
    };
}>, "children"> & {
    classes?: Partial<Record<"root" | "title" | "body", string>> | undefined;
}>;
declare const StyledTitle: React.ComponentType<Pick<TitleProps & WithStyles<(theme: any) => {
    root: {
        borderRadius: number;
        display: string;
        flexFlow: string;
        boxShadow: string; /** Card */
        overflow: string;
    };
    title: {
        padding: number;
        flex: number;
    };
    body: {
        padding: number;
        flex: number;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"root" | "title" | "body", string>> | undefined;
}>;
declare const StyledBody: React.ComponentType<Pick<BodyProps & WithStyles<(theme: any) => {
    root: {
        borderRadius: number;
        display: string;
        flexFlow: string;
        boxShadow: string; /** Card */
        overflow: string;
    };
    title: {
        padding: number;
        flex: number;
    };
    body: {
        padding: number;
        flex: number;
    };
}>, React.ReactText> & {
    classes?: Partial<Record<"root" | "title" | "body", string>> | undefined;
}>;
export default StyledCard;
export { StyledCard as Wrapper, StyledTitle as Title, StyledBody as Body, };
