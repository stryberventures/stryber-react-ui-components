import * as React from 'react';
import { ISearchFieldProps } from '../SearchField';
/** Interfaces */
export interface ISearchResult {
    label: string;
    href?: string;
    value?: string;
    onClick?: (e: React.BaseSyntheticEvent) => void;
}
interface ISearchBoxPropsBase extends ISearchFieldProps {
    onSelect?: (result: ISearchResult) => void;
}
interface ISearchBoxPropsWithFetch extends ISearchBoxPropsBase {
    /** Fetch info */
    requestInfo?: (input: string) => string | RequestInfo;
    fetchTimeout?: number;
    parseResponse?: (response: any) => ISearchResult[];
}
interface ISearchBoxPropsWithResults extends ISearchBoxPropsBase {
    /** External results */
    results?: ISearchResult[];
}
export declare type ISearchBoxProps = ISearchBoxPropsWithFetch & ISearchBoxPropsWithResults;
declare const PropsWrappedStyledSearchBox: (props: ISearchBoxProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledSearchBox;
export { PropsWrappedStyledSearchBox as SearchBox, };
