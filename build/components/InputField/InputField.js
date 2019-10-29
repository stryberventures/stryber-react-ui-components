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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var classnames_1 = require("classnames");
var InputField_styles_1 = require("./InputField.styles");
var Form_1 = require("../Form");
var InputField = function (props) {
    var classes = props.classes, disabled = props.disabled, placeholder = props.placeholder, name = props.name, errorMessage = props.errorMessage, onChange = props.onChange, _a = props.type, type = _a === void 0 ? 'text' : _a, rest = __rest(props, ["classes", "disabled", "placeholder", "name", "errorMessage", "onChange", "type"]);
    var _b = __read(React.useState(false), 2), isFocused = _b[0], setFocused = _b[1];
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _c = React.useContext(Form_1.FormContext), formOnChange = _c.onChange, formValues = _c.formValues, formErrors = _c.formErrors, formTouched = _c.formTouched, onBlur = _c.onBlur;
    var errorMsg = formTouched[name] && formErrors[name];
    var _d = __read(React.useState(formValues && formValues[name]), 2), internalValue = _d[0], setInternalValue = _d[1];
    var onFocusWrapper = function (e) {
        setFocused(true);
    };
    var onBlurWrapper = function (e) {
        onBlur && onBlur(e);
        setFocused(false);
    };
    var onChangeWrapper = function (e) {
        formOnChange && formOnChange(e);
        onChange && onChange(e);
        var value = e.target.value;
        setInternalValue(value);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames_1.default([
                errorMsg ? classes.invalidRoot : null,
                classes.root,
            ]) },
            React.createElement("div", { className: classnames_1.default([
                    errorMsg ? classes.invalidPrepend : null,
                    classes.prepend,
                ]) }),
            React.createElement("div", { className: classes.inputWrapper },
                placeholder ?
                    (React.createElement("div", { className: classnames_1.default([
                            (internalValue || isFocused) ? classes.placeholderCollapsed : null,
                            errorMsg ? classes.invalidPlaceholder : null,
                            classes.placeholder,
                        ]) }, placeholder)) : null,
                React.createElement("input", __assign({ onChange: onChangeWrapper, onBlur: onBlurWrapper, onFocus: onFocusWrapper }, rest, { className: classnames_1.default([
                        classes.input,
                    ]), value: internalValue, name: name, type: type }))),
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