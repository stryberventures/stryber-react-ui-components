"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) { return ({
    root: {
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
    },
    input: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        padding: 14,
        border: "solid 1px " + '#cfe2f2',
        transition: '0.5s',
        '&:focus': {
            border: "solid 1px " + '#007aff',
            outline: 'none',
        },
    },
    invalid: {
        border: "solid 1px " + '#d0021b',
    },
}); });
//# sourceMappingURL=InputField.styles.js.map