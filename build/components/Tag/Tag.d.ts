import * as React from 'react';
import { ReactNode } from 'react';
interface ITagProps {
    children: ReactNode;
    sizeVariant?: 'normal' | 'small' | 'large';
    shape?: 'flat' | 'round' | 'circle';
    onClick?: (e: React.SyntheticEvent) => void;
    onClose?: (e: React.SyntheticEvent) => void;
    className?: any;
}
declare const PropsWrappedStyledTag: (props: ITagProps) => JSX.Element;
/** Exports */
export default PropsWrappedStyledTag;
export { PropsWrappedStyledTag as Tag, };
