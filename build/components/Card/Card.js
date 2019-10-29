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
var Card_styles_1 = require("./Card.styles");
var Card = function (_a) {
    var classes = _a.classes, children = _a.children, rest = __rest(_a, ["classes", "children"]);
    // const renderContent = () => <span className={ classes.content }>{ children }</span>;
    return (React.createElement("div", __assign({}, rest, { className: classnames_1.default([
            classes.root,
        ]) }), children));
};
var Title = function (_a) {
    var classes = _a.classes, children = _a.children, rest = __rest(_a, ["classes", "children"]);
    // const renderContent = () => <span className={ classes.content }>{ children }</span>;
    return (React.createElement("div", __assign({}, rest, { className: classnames_1.default([
            classes.title,
        ]) }), children));
};
var Body = function (props) {
    var classes = props.classes, children = props.children, rest = __rest(props, ["classes", "children"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames_1.default([
            classes.body,
        ]) }), children));
};
var StyledCard = react_jss_1.default(Card_styles_1.default)(Card);
exports.Wrapper = StyledCard;
var StyledTitle = react_jss_1.default(Card_styles_1.default)(Title);
exports.Title = StyledTitle;
var StyledBody = react_jss_1.default(Card_styles_1.default)(Body);
exports.Body = StyledBody;
exports.default = StyledCard;
//# sourceMappingURL=Card.js.map