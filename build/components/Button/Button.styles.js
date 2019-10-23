"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) { return ({
    root: {
        borderRadius: 8,
        padding: 14,
        maxHeight: 44,
        border: "solid 1px",
    },
    content: {},
    disabled: {
        backgroundColor: theme.backgroundColorDisabled,
    },
    primary: {
        color: theme.backgroundColorSecondary,
        backgroundColor: theme.backgroundColorPrimary,
        '&:hover': {
            backgroundColor: theme.backgroundColorPrimaryHover,
        },
        '&:active': {
            backgroundColor: theme.backgroundColorPrimaryClick,
        },
    },
    secondary: {
        color: theme.backgroundColorPrimary,
        border: "solid 1px " + theme.backgroundColorPrimary,
        backgroundColor: theme.backgroundColorSecondary,
        '&:hover': {
            backgroundColor: theme.backgroundColorSecondaryHover,
        },
        '&:active': {
            backgroundColor: theme.backgroundColorSecondaryClick,
        },
    },
}); });
//# sourceMappingURL=Button.styles.js.map