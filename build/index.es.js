import { createElement, createContext, useState, useEffect, useContext, Fragment } from 'react';
import withStyles, { ThemeProvider as ThemeProvider$1 } from 'react-jss';

var theme = {
    backgroundColorPrimary: '#007aff',
    backgroundColorPrimaryHover: '#278eff',
    backgroundColorPrimaryClick: '#62adff',
    backgroundColorSecondary: '#fff',
    backgroundColorSecondaryHover: '#f5f5f5',
    backgroundColorSecondaryClick: '#ebebeb',
    backgroundColorDisabled: '#d2d2d2',
    gridColumnSize: 70,
    gridColumnGap: 20,
    gridColumns: 12,
    gridSmBreakpointFallback: 540,
    gridSmBreakpoint: 576,
    gridMdBreakpointFallback: 720,
    gridMdBreakpoint: 768,
    gridLgBreakpointFallback: 960,
    gridLgBreakpoint: 992,
    gridXlBreakpointFallback: 1140,
    gridXlBreakpoint: 1200,
};

var ThemeProvider = function (props) {
    var children = props.children;
    return (createElement(ThemeProvider$1, { theme: theme }, children));
};

var styles = (function (theme) { return ({
    '@global': {
        '@font-face': [
            {
                fontFamily: 'galano-light',
                src: "url('fonts/Galano-Grotesque-Light.otf')",
            },
            {
                fontFamily: 'galano-regular',
                src: "url('fonts/Galano-Grotesque.otf')",
            },
            {
                fontFamily: 'galano-medium',
                src: "url('fonts/Galano-Grotesque-Medium.otf')",
            },
            {
                fontFamily: 'galano-semibold',
                src: "url('fonts/Galano-Grotesque-Semi-Bold.otf')",
            },
            {
                fontFamily: 'galano-bold',
                src: "url('fonts/Galano-Grotesque-Bold.otf')",
            },
        ],
        html: {
            height: '100%',
            width: '100%',
        },
        body: {
            // fontSize: '1rem',
            // fontWeight: 400,
            // lineHeight: 1.5,
            // textAlign: 'left',
            fontFamily: 'galano-regular',
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
            backgroundColor: theme.backgroundColorSecondary,
            color: theme.textColorPrimary,
        },
        h1: {
            fontSize: 42,
            fontFamily: 'galano-bold',
        },
        h2: {
            fontSize: 32,
            fontFamily: 'galano-bold',
        },
        h3: {
            fontSize: 28,
            fontFamily: 'galano-semibold',
        },
        h4: {
            fontSize: 14,
            fontFamily: 'galano-semibold',
        },
        p: {
            fontSize: 12,
            fontFamily: 'galano-medium',
            marginTop: 0,
            marginBottom: '1rem',
        },
        // 'h1, h2, h3, h4, h5, h6': {
        //   marginTop: 0,
        //   marginBottom: '.5rem',
        // },
        // '.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6': {
        //   marginBottom: '.5rem',
        //   fontWeight: 500,
        //   lineHeight: 1.2,
        // },
        b: {
            fontFamily: 'galano-bold',
        },
        '#root': {
            height: '100%',
        },
        'button:focus': {
            outline: 'none'
        },
        '*, ::after, ::before': {
            boxSizing: 'border-box',
        },
        a: {
            color: '#007bff',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            }
        },
    },
}); });

var GlobalStyles = function (props) {
    var children = props.children;
    return (createElement("div", null, children));
};
var WrappedGlobalStyles = withStyles(styles)(GlobalStyles);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var styles$1 = (function (theme) { return ({
    root: {
        borderRadius: 8,
        padding: 14,
        border: "solid 1px",
        width: '100%',
    },
    content: {
        fontSize: 16,
        fontFamily: 'galano-semibold',
    },
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

var Button = function (props) {
    var classes = props.classes, children = props.children, disabled = props.disabled, onClick = props.onClick, _a = props.variant, variant = _a === void 0 ? 'primary' : _a, rest = __rest(props, ["classes", "children", "disabled", "onClick", "variant"]);
    var renderContent = function () { return createElement("span", { className: classes.content }, children); };
    return (createElement("button", __assign({}, rest, { className: classnames([
            classes.root,
            disabled ? classes.disabled : null,
            classes[variant],
        ]), onClick: onClick }), renderContent()));
};
var StyledButton = withStyles(styles$1)(Button);

var styles$2 = (function (theme) { return ({
    root: {
        borderRadius: 8,
        display: 'flex',
        flexFlow: 'column',
        boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.07)',
        overflow: 'hidden',
    },
    title: {
        padding: 18,
        flex: 1,
    },
    body: {
        padding: 18,
        flex: 1,
    },
}); });

var Card = function (_a) {
    var classes = _a.classes, children = _a.children, rest = __rest(_a, ["classes", "children"]);
    // const renderContent = () => <span className={ classes.content }>{ children }</span>;
    return (createElement("div", __assign({}, rest, { className: classnames([
            classes.root,
        ]) }), children));
};
var Title = function (_a) {
    var classes = _a.classes, children = _a.children, rest = __rest(_a, ["classes", "children"]);
    // const renderContent = () => <span className={ classes.content }>{ children }</span>;
    return (createElement("div", __assign({}, rest, { className: classnames([
            classes.title,
        ]) }), children));
};
var Body = function (props) {
    var classes = props.classes, children = props.children, rest = __rest(props, ["classes", "children"]);
    return (createElement("div", __assign({}, rest, { className: classnames([
            classes.body,
        ]) }), children));
};
var StyledCard = withStyles(styles$2)(Card);
var StyledTitle = withStyles(styles$2)(Title);
var StyledBody = withStyles(styles$2)(Body);

var styles$3 = (function (theme) {
    var _a;
    return ({
        root: (_a = {
                width: '100%',
                paddingRight: 15,
                paddingLeft: 15,
                marginRight: 'auto',
                marginLeft: 'auto'
            },
            _a["@media (min-width: " + (theme.gridSmBreakpoint || 576) + "px)"] = {
                maxWidth: theme.gridSmBreakpointFallback || 540,
            },
            _a["@media (min-width: " + (theme.gridMdBreakpoint || 768) + "px)"] = {
                maxWidth: theme.gridMdBreakpointFallback || 720,
            },
            _a["@media (min-width: " + (theme.gridLgBreakpoint || 992) + "px)"] = {
                maxWidth: theme.gridLgBreakpointFallback || 960,
            },
            _a["@media (min-width: " + (theme.gridXlBreakpoint || 1200) + "px)"] = {
                maxWidth: theme.gridXlBreakpointFallback || 1140,
            },
            _a),
    });
});

var Container = function (props) {
    var children = props.children, classes = props.classes, rest = __rest(props, ["children", "classes"]);
    return (createElement("div", __assign({}, rest, { className: classnames([
            classes.root,
        ]) }), children));
};
var StyledContainer = withStyles(styles$3)(Container);

var getGridColumnStyle = function (breakpointValue) {
    if (!breakpointValue)
        return 'span 1';
    return "span " + breakpointValue;
};
var getGridTemplateColumns = function (columns) {
    return "repeat(" + columns + ", 1fr)";
};
var styles$4 = (function (theme) {
    var _a;
    return ({
        /** Row */
        row: {
            display: 'grid',
            gridGap: theme.gridColumnGap,
            gridTemplateColumns: getGridTemplateColumns(theme.gridColumns),
            width: '100%',
        },
        /** Column */
        col: (_a = {
                gridColumnEnd: function (props) { return getGridColumnStyle(props.xs || theme.gridColumns); }
            },
            _a["@media (min-width: " + theme.gridSmBreakpoint + "px)"] = {
                gridColumnEnd: function (props) { return getGridColumnStyle(props.sm); },
            },
            _a["@media (min-width: " + theme.gridMdBreakpoint + "px)"] = {
                gridColumnEnd: function (props) { return getGridColumnStyle(props.md); },
            },
            _a["@media (min-width: " + (theme.gridLgBreakpoint || 992) + "px)"] = {
                gridColumnEnd: function (props) { return getGridColumnStyle(props.lg); },
            },
            _a["@media (min-width: " + (theme.gridXlBreakpoint || 1200) + "px)"] = {
                gridColumnEnd: function (props) { return getGridColumnStyle(props.xl); },
            },
            _a),
    });
});

var Row = function (props) {
    var children = props.children, classes = props.classes, rest = __rest(props, ["children", "classes"]);
    return (createElement("div", __assign({}, rest, { className: classnames([
            classes.row,
        ]) }), children));
};
var Col = function (props) {
    var children = props.children, xl = props.xl, lg = props.lg, md = props.md, sm = props.sm, xs = props.xs, classes = props.classes, rest = __rest(props, ["children", "xl", "lg", "md", "sm", "xs", "classes"]);
    return (createElement("div", __assign({}, rest, { className: classnames([
            classes.col,
        ]) }), children));
};
var StyledRow = withStyles(styles$4)(Row);
var StyledCol = withStyles(styles$4)(Col);

var styles$5 = (function (theme) { return ({
    root: {
        borderRadius: 8,
        padding: 14,
        border: "solid 1px",
    },
}); });

var FormContext = createContext({
    updateFormValue: function (name, data) { },
    updateFormTouched: function (name, data) { },
    unsetFormValue: function (name) { },
    formValues: {},
    formErrors: {},
    formTouched: {},
    initialValues: {},
});
/** Form component */
var Form = function (props) {
    var classes = props.classes, children = props.children, onSubmit = props.onSubmit, onChange = props.onChange, onError = props.onError, validationSchema = props.validationSchema, initialValues = props.initialValues, rest = __rest(props, ["classes", "children", "onSubmit", "onChange", "onError", "validationSchema", "initialValues"]);
    /** State */
    var _a = useState(initialValues || {}), formValues = _a[0], setFormValues = _a[1];
    var _b = useState({}), formErrors = _b[0], setFormErrors = _b[1];
    var _c = useState({}), formTouched = _c[0], setFormTouched = _c[1];
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
    var updateFormValue = function (name, value) {
        /** Setting new values in state */
        setFormValues(function (formValues) {
            var newFormValues = __assign({}, formValues);
            newFormValues[name] = value;
            /** Validating new values */
            validate(newFormValues);
            /** Sending on change callback (if it was provided) */
            onChange && onChange(__assign({}, newFormValues));
            return newFormValues;
        });
    };
    /** Updating field touched status (needed for a correct error display */
    var updateFormTouched = function (name, touched) {
        if (touched === void 0) { touched = true; }
        setFormTouched(function (formTouched) {
            var newFormTouched = __assign({}, formTouched);
            newFormTouched[name] = touched;
            setFormTouched(newFormTouched);
        });
    };
    /** Un-setting value (clearing it from the form) */
    var unsetFormValue = function (name) {
        updateFormValue(name, undefined);
        updateFormTouched(name, false);
    };
    /** Mount / unmount logic */
    useEffect(function () {
        /** Running first validation on mount */
        validate(formValues);
    }, []);
    return (createElement("form", __assign({}, rest, { onSubmit: function (e) {
            e.preventDefault();
            if (Object.keys(formErrors).length > 0) {
                onError && onError(formErrors, formValues);
            }
            else {
                onSubmit(formValues);
            }
        }, className: classnames([
            classes.root,
        ]) }),
        createElement(FormContext.Provider, { value: {
                updateFormValue: updateFormValue,
                updateFormTouched: updateFormTouched,
                unsetFormValue: unsetFormValue,
                initialValues: initialValues,
                formValues: formValues,
                formErrors: formErrors,
                formTouched: formTouched
            } }, children)));
};
var StyledForm = withStyles(styles$5)(Form);

var styles$6 = (function (theme) { return ({
    root: {
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        border: "solid 1px " + '#cfe2f2',
        transition: '0.5s',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        '&:focus-within': {
            border: "solid 1px " + '#007aff',
            outline: 'none',
        },
    },
    invalidRoot: {
        border: "solid 1px " + '#d0021b' + " !important",
    },
    disabledRoot: {
        backgroundColor: '#f0f0f0',
    },
    inputWrapper: {
        flex: 1,
        position: 'relative',
    },
    input: {
        width: '100%',
        height: '100%',
        border: 0,
        padding: 14,
        backgroundColor: 'rgba(0,0,0,0)',
        transition: '0.5s',
        color: '#54738c',
        fontFamily: 'galano-medium',
        fontSize: 14,
        '&:focus': {
            color: '#007aff',
            outline: 'none',
        },
    },
    inputWithPlaceholder: {
        paddingBottom: 5,
        paddingTop: 23,
    },
    invalidInput: {
        '&:focus': {
            color: '#d0021b !important',
        },
    },
    placeholder: {
        pointerEvents: 'none',
        position: 'absolute',
        transition: '0.2s',
        fontSize: 14,
        fontFamily: 'galano-medium',
        display: 'block',
        verticalAlign: 'center',
        color: '#95acbf',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        padding: 14,
        margin: 0,
        transform: 'translate(0, 0px)',
        transformOrigin: 'left',
    },
    invalidPlaceholder: {},
    placeholderCollapsed: {
        fontSize: 10,
        transform: 'translate(0, -12px)',
    },
    prepend: {
        transition: '0.5s',
        position: 'relative',
        backgroundColor: '#007aff',
        minWidth: 7,
    },
    invalidPrepend: {
        backgroundColor: '#d0021b',
    },
    append: {},
    errorMessage: {
        color: '#ea3546',
        fontFamily: 'galano-light',
        fontSize: 10,
    },
}); });

var InputField = function (props) {
    var classes = props.classes, disabled = props.disabled, placeholder = props.placeholder, name = props.name, errorMessage = props.errorMessage, value = props.value, onFocus = props.onFocus, onBlur = props.onBlur, onChange = props.onChange, _a = props.clearFormValueOnUnmount, clearFormValueOnUnmount = _a === void 0 ? true : _a, _b = props.type, type = _b === void 0 ? 'text' : _b, rest = __rest(props, ["classes", "disabled", "placeholder", "name", "errorMessage", "value", "onFocus", "onBlur", "onChange", "clearFormValueOnUnmount", "type"]);
    /** Focus status (needed for styles) */
    var _c = useState(false), isFocused = _c[0], setFocused = _c[1];
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _d = useContext(FormContext), updateFormValue = _d.updateFormValue, updateFormTouched = _d.updateFormTouched, unsetFormValue = _d.unsetFormValue, formValues = _d.formValues, formErrors = _d.formErrors, formTouched = _d.formTouched;
    var errorMsg = formTouched[name] && formErrors[name];
    var _e = useState((formValues && formValues[name]) || value), internalValue = _e[0], setInternalValue = _e[1];
    /** Wrappers to merge form and props methods */
    var onFocusWrapper = function (e) {
        onFocus && onFocus(e);
        setFocused(true);
    };
    var onBlurWrapper = function (e) {
        var name = e.target.name;
        onBlur && onBlur(e);
        updateFormTouched && updateFormTouched(name, true);
        setFocused(false);
    };
    var onChangeWrapper = function (e) {
        var _a = e.target, name = _a.name, targetValue = _a.value;
        updateFormValue && updateFormValue(name, targetValue);
        onChange && onChange(e);
        setInternalValue(targetValue);
    };
    /** On mount/unmount */
    useEffect(function () {
        /** On mount */
        /** Update form with internal value on mount */
        updateFormValue(name, internalValue);
        /** On unmount */
        return function () {
            clearFormValueOnUnmount && unsetFormValue && unsetFormValue(name);
        };
    }, []);
    return (createElement(Fragment, null,
        createElement("div", { className: classnames([
                errorMsg ? classes.invalidRoot : null,
                disabled ? classes.disabledRoot : null,
                classes.root,
            ]) },
            createElement("div", { className: classnames([
                    errorMsg ? classes.invalidPrepend : null,
                    classes.prepend,
                ]) }),
            createElement("div", { className: classes.inputWrapper },
                placeholder ?
                    (createElement("div", { className: classnames([
                            classes.placeholder,
                            (internalValue || isFocused) ? classes.placeholderCollapsed : null,
                            errorMsg ? classes.invalidPlaceholder : null,
                        ]) }, placeholder)) : null,
                createElement("input", __assign({ onChange: onChangeWrapper, onBlur: onBlurWrapper, onFocus: onFocusWrapper }, rest, { className: classnames([
                        classes.input,
                        placeholder ? classes.inputWithPlaceholder : null,
                        errorMsg ? classes.invalidInput : null,
                    ]), disabled: disabled, value: internalValue, name: name, type: type }))),
            createElement("div", { className: classnames([
                    classes.append,
                ]) })),
        errorMsg ?
            (createElement("div", { className: classes.errorMessage }, errorMsg)) : null));
};
var StyledInputField = withStyles(styles$6)(InputField);

export { StyledBody as Body, StyledButton as Button, StyledCol as Col, StyledContainer as Container, StyledForm as Form, FormContext, WrappedGlobalStyles as GlobalStyles, StyledInputField as InputField, StyledRow as Row, ThemeProvider, StyledTitle as Title, StyledCard as Wrapper };
//# sourceMappingURL=index.es.js.map
