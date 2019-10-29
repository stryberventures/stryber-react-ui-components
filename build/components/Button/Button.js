"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var classnames_1 = require("classnames");
var Button_styles_1 = require("./Button.styles");
var Button = function (props) {
    var classes = props.classes, children = props.children, disabled = props.disabled, onClick = props.onClick, _a = props.variant, variant = _a === void 0 ? 'primary' : _a, rest = __rest(props, ["classes", "children", "disabled", "onClick", "variant"]);
    var renderContent = function () { return React.createElement("span", { className: classes.content }, children); };
    return (React.createElement("button", __assign({}, rest, { className: classnames_1.default([
            classes.root,
            disabled ? classes.disabled : null,
            classes[variant],
        ]), onClick: onClick }), renderContent()));
};
var StyledButton = react_jss_1.default(Button_styles_1.default)(Button);
exports.Button = StyledButton;
exports.default = StyledButton;
//# sourceMappingURL=Button.js.map