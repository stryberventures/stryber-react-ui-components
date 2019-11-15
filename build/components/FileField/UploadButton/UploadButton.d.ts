import * as React from 'react';
import { WithStyles } from 'react-jss';
/** Interfaces */
interface IAppendContentProps {
    files: any;
    errorMsg: string;
    classes: string;
    onClick: (e: any) => any;
    disabled?: boolean;
}
/** Wrappers */
declare const StyledUploadButton: React.ComponentType<Pick<IAppendContentProps & WithStyles<(theme: any) => {
    uploadButton: {
        marginRight: number;
        padding: string;
        borderRadius: number;
        fontSize: number;
        fontWeight: number;
        lineHeight: string;
        cursor: string;
        '&.fileNotSelected': {
            color: string;
            border: string;
            backgroundColor: string;
            '&.error': {
                borderColor: any;
                color: any;
            };
        };
        '&.disabled': {
            borderColor: any;
            color: any;
        };
        '&.fileSelected': {
            color: string;
            border: string;
            backgroundColor: string;
            '&.error': {
                borderColor: any;
                backgroundColor: any;
            };
        };
    };
}>, "files" | "errorMsg" | "onClick" | "disabled"> & {
    classes?: Partial<string & Record<"uploadButton", string>> | undefined;
}>;
export default StyledUploadButton;
/** Exports */
export { StyledUploadButton as UploadButton, };
