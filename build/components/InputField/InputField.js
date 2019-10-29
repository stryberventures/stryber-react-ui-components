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
var InputField_styles_1 = require("./InputField.styles");
var Form_1 = require("../Form");
var InputField = function (props) {
    var classes = props.classes, disabled = props.disabled, placeholder = props.placeholder, name = props.name, errorMessage = props.errorMessage, _a = props.type, type = _a === void 0 ? 'text' : _a, rest = __rest(props, ["classes", "disabled", "placeholder", "name", "errorMessage", "type"]);
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _b = React.useContext(Form_1.FormContext), onChange = _b.onChange, formValues = _b.formValues, formErrors = _b.formErrors, formTouched = _b.formTouched, onBlur = _b.onBlur;
    var errorMsg = formTouched[name] && formErrors[name];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames_1.default([
                errorMsg ? classes.invalidRoot : null,
                classes.root,
            ]) },
            React.createElement("div", { className: classnames_1.default([
                    errorMsg ? classes.invalidPrepend : null,
                    classes.prepend,
                ]) }),
            React.createElement("input", __assign({ onChange: onChange, onBlur: onBlur }, rest, { className: classnames_1.default([
                    classes.input,
                ]), value: formValues && formValues[name], name: name, type: type, placeholder: placeholder })),
            React.createElement("div", { className: classnames_1.default([
                    classes.append,
                ]) })),
        errorMsg ?
            (React.createElement("div", { className: classes.errorMessage }, errorMsg)) : null));
};
var StyledInputField = react_jss_1.default(InputField_styles_1.default)(InputField);
exports.InputField = StyledInputField;
exports.default = StyledInputField;
//# sourceMappingURL=InputField.js.map