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
var Form_styles_1 = require("./Form.styles");
exports.FormContext = React.createContext({
    onChange: function (data) { },
    onBlur: function (data) { },
    formValues: {},
    formErrors: {},
    formTouched: {},
    initialValues: {},
});
/** Form component */
var Form = function (props) {
    var classes = props.classes, children = props.children, onSubmit = props.onSubmit, onError = props.onError, validationSchema = props.validationSchema, initialValues = props.initialValues, rest = __rest(props, ["classes", "children", "onSubmit", "onError", "validationSchema", "initialValues"]);
    /** State */
    var _a = __read(React.useState(initialValues || {}), 2), formValues = _a[0], setFormValues = _a[1];
    var _b = __read(React.useState({}), 2), formErrors = _b[0], setFormErrors = _b[1];
    var _c = __read(React.useState({}), 2), formTouched = _c[0], setFormTouched = _c[1];
    /** Yup validate function wrapper */
    var validate = function (values) {
        if (validationSchema) {
            validationSchema
                .validate(values, { abortEarly: false })
                .then(function () { return setFormErrors({}); })
                .catch(function (errors) {
                var parsedErrors = errors.inner.reduce(function (a, v) {
                    var _a;
                    return (__assign({}, a, (_a = {}, _a[v.path] = v.message, _a)));
                }, {});
                setFormErrors(parsedErrors);
            });
        }
    };
    /** Updating form values whenever a change is made within an input field */
    var updateFormValue = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        var newFormValues = __assign({}, formValues);
        newFormValues[name] = value;
        /** Validating new values */
        validate(newFormValues);
        setFormValues(newFormValues);
    };
    /** Updating field touched status (needed for a correct error display */
    var updateFormTouched = function (e) {
        var name = e.target.name;
        var newFormTouched = __assign({}, formTouched);
        newFormTouched[name] = true;
        setFormTouched(newFormTouched);
    };
    /** Running first validation on mount */
    React.useEffect(function () {
        validate(formValues);
    }, []);
    return (React.createElement("form", __assign({}, rest, { onSubmit: function (e) {
            e.preventDefault();
            if (Object.keys(formErrors).length > 0) {
                onError && onError(formErrors, formValues);
            }
            else {
                onSubmit(formValues);
            }
        }, className: classnames_1.default([
            classes.root,
        ]) }),
        React.createElement(exports.FormContext.Provider, { value: {
                onChange: updateFormValue,
                onBlur: updateFormTouched,
                initialValues: initialValues,
                formValues: formValues,
                formErrors: formErrors,
                formTouched: formTouched
            } }, children)));
};
var StyledForm = react_jss_1.default(Form_styles_1.default)(Form);
exports.Form = StyledForm;
exports.default = StyledForm;
//# sourceMappingURL=Form.js.map