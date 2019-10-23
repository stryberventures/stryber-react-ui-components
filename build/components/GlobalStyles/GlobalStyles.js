"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var globalStyles_1 = require("../../styles/globalStyles");
var GlobalStyles = function (_a) {
    var children = _a.children;
    return (React.createElement("div", null, children));
};
var WrappedGlobalStyles = react_jss_1.default(globalStyles_1.default)(GlobalStyles);
exports.GlobalStyles = WrappedGlobalStyles;
//# sourceMappingURL=GlobalStyles.js.map