import * as React from 'react';
interface ITagProps {
    sizeVariant?: 'normal' | 'small' | 'large' | 'mini';
    shape?: 'flat' | 'round' | 'circle';
    className?: any;
    initials?: string;
    image?: string;
    onClick?: (e: React.SyntheticEvent) => void;
}
declare const Avatar: (props: ITagProps & React.HTMLAttributes<HTMLInputElement>) => JSX.Element;
export default Avatar;
