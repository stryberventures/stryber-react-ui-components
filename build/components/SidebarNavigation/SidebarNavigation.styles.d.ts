declare const _default: (theme: any) => {
    /** Container / Wrapper */
    container: {
        padding: string;
        backgroundColor: any;
        height: string;
        display: string;
        flexDirection: string;
    };
    /** Section */
    section: {
        cursor: string;
        userSelect: string;
        borderRight: string;
        borderLeft: string;
        margin: string;
        padding: string;
        transition: string;
        '&:hover': {
            color: any;
        };
        '&:active': {
            color: any;
        };
    };
    sectionSelected: {
        color: any;
        borderLeft: string;
        '&:hover': {
            color: any;
        };
        '&:active': {
            color: any;
        };
    };
    sectionHeader: {
        display: string;
        flexDirection: string;
    };
    sectionInfoContainer: {
        display: string;
        flexDirection: string;
        flex: number;
    };
    sectionTitle: {
        marginTop: number;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
        color: any;
    };
    sectionDescription: {
        marginTop: number;
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
        color: any;
    };
    expandIconContainer: {
        paddingTop: number;
    };
    expandIcon: {
        transition: string;
        width: number;
        fill: any;
    };
    expandIconCollapsed: {
        transform: string;
    };
    sectionChildren: {
        padding: number;
        maxHeight: number;
        transition: string;
    };
    sectionChildrenHidden: {
        opacity: number;
        maxHeight: string;
        padding: number;
    };
    /** Item */
    item: {
        cursor: string;
        transition: string;
        color: any;
        fontSize: number;
        padding: string;
        fontFamily: any;
        fontWeight: any;
        '&:hover': {
            color: any;
        };
        '&:active': {
            color: any;
        };
    };
    itemSelected: {
        fontWeight: any;
        color: any;
        '&:hover': {
            color: any;
        };
        '&:active': {
            color: any;
        };
    };
};
export default _default;
