/// <reference types="react" />
interface IPaginationProps {
    currPage: number;
    pageCount: number;
    onChange: (index: number) => void;
    collapseFactor?: number;
    className?: string;
}
declare const PropsWrappedStyledPagination: (props: IPaginationProps) => JSX.Element;
export default PropsWrappedStyledPagination;
export { PropsWrappedStyledPagination as Pagination };
