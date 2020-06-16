declare const _default: (theme: any) => {
    /** Container / Wrapper */
    container: {
        padding: string;
        backgroundColor: any;
        height: string;
        display: string;
        flexDirection: string;
        boxShadow: string;
    };
    /** Section */
    section: {
        cursor: string;
        userSelect: string;
        transition: string;
    };
    sectionSelected: {
        backgroundColor: string;
        '& $sectionHeader': {
            backgroundColor: any;
            borderLeft: string;
            '&:hover': {
                color: string;
            };
        };
    };
    sectionHeader: {
        display: string;
        flexDirection: string;
        padding: string;
        borderRight: string;
        borderLeft: string;
        '&:hover': {
            color: any;
        };
        '&:active': {
            color: any;
        };
    };
    sectionInfoContainer: {
        display: string;
        flexDirection: string;
        flex: number;
        justifyContent: string;
    };
    sectionTitle: {
        fontFamily: any;
        fontWeight: any;
        fontSize: number;
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
        color: string;
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
        borderLeft: string;
    };
    itemSelected: {
        fontWeight: any;
        color: any;
        backgroundColor: any;
        '&:hover': {
            color: any;
        };
        '&:active': {
            color: any;
        };
    };
    titleContainer: {
        display: string;
        alignItems: string;
        padding: string;
    };
    avatar: {
        width: number;
        height: number;
        backgroundColor: string;
        borderRadius: number;
        marginRight: number;
    };
    titleSection: {};
    title: {
        margin: number;
        fontSize: number;
    };
    description: {
        margin: number;
        fontSize: number;
        color: string;
        opacity: number;
    };
};
export default _default;
