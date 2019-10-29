"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var theme_1 = require("../../styles/theme");
var ThemeProvider = function (props) {
    var children = props.children;
    return (React.createElement(react_jss_1.ThemeProvider, { theme: theme_1.default }, children));
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map