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
    var classes = props.classes, disabled = props.disabled, placeholder = props.placeholder, name = props.name, errorMessage = props.errorMessage, value = props.value, onChange = props.onChange, _a = props.clearFormValueOnUnmount, clearFormValueOnUnmount = _a === void 0 ? true : _a, _b = props.type, type = _b === void 0 ? 'text' : _b, rest = __rest(props, ["classes", "disabled", "placeholder", "name", "errorMessage", "value", "onChange", "clearFormValueOnUnmount", "type"]);
    /** Focus status (needed for styles) */
    var _c = __read(React.useState(false), 2), isFocused = _c[0], setFocused = _c[1];
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _d = React.useContext(Form_1.FormContext), updateFormValue = _d.updateFormValue, updateFormTouched = _d.updateFormTouched, unsetFormValue = _d.unsetFormValue, formValues = _d.formValues, formErrors = _d.formErrors, formTouched = _d.formTouched;
    var errorMsg = formTouched[name] && formErrors[name];
    var _e = __read(React.useState((formValues && formValues[name]) || value), 2), internalValue = _e[0], setInternalValue = _e[1];
    /** Wrappers to merge form and props methods */
    var onFocusWrapper = function (e) {
        setFocused(true);
    };
    var onBlurWrapper = function (e) {
        var _a = e.target, name = _a.name, targetValue = _a.value;
        updateFormTouched && updateFormTouched(name, targetValue);
        setFocused(false);
    };
    var onChangeWrapper = function (e) {
        var _a = e.target, name = _a.name, targetValue = _a.value;
        updateFormValue && updateFormValue(name, targetValue);
        onChange && onChange(e);
        setInternalValue(targetValue);
    };
    /** On mount/unmount */
    React.useEffect(function () {
        /** On mount */
        /** Update form with internal value on mount */
        updateFormValue(name, internalValue);
        /** On unmount */
        return function () {
            clearFormValueOnUnmount && unsetFormValue && unsetFormValue(name);
        };
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames_1.default([
                errorMsg ? classes.invalidRoot : null,
                disabled ? classes.disabledRoot : null,
                classes.root,
            ]) },
            React.createElement("div", { className: classnames_1.default([
                    errorMsg ? classes.invalidPrepend : null,
                    classes.prepend,
                ]) }),
            React.createElement("div", { className: classes.inputWrapper },
                placeholder ?
                    (React.createElement("div", { className: classnames_1.default([
                            classes.placeholder,
                            (internalValue || isFocused) ? classes.placeholderCollapsed : null,
                            errorMsg ? classes.invalidPlaceholder : null,
                        ]) }, placeholder)) : null,
                React.createElement("input", __assign({ onChange: onChangeWrapper, onBlur: onBlurWrapper, onFocus: onFocusWrapper }, rest, { className: classnames_1.default([
                        classes.input,
                        placeholder ? classes.inputWithPlaceholder : null,
                        errorMsg ? classes.invalidInput : null,
                    ]), disabled: disabled, value: internalValue, name: name, type: type }))),
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