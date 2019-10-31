'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var withStyles = require('react-jss');
var withStyles__default = _interopDefault(withStyles);

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
    return (React.createElement(withStyles.ThemeProvider, { theme: theme }, children));
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
    return (React.createElement("div", null, children));
};
var WrappedGlobalStyles = withStyles__default(styles)(GlobalStyles);

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

function __read(o, n) {
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
    var renderContent = function () { return React.createElement("span", { className: classes.content }, children); };
    return (React.createElement("button", __assign({}, rest, { className: classnames([
            classes.root,
            disabled ? classes.disabled : null,
            classes[variant],
        ]), onClick: onClick }), renderContent()));
};
var StyledButton = withStyles__default(styles$1)(Button);

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
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.root,
        ]) }), children));
};
var Title = function (_a) {
    var classes = _a.classes, children = _a.children, rest = __rest(_a, ["classes", "children"]);
    // const renderContent = () => <span className={ classes.content }>{ children }</span>;
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.title,
        ]) }), children));
};
var Body = function (props) {
    var classes = props.classes, children = props.children, rest = __rest(props, ["classes", "children"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.body,
        ]) }), children));
};
var StyledCard = withStyles__default(styles$2)(Card);
var StyledTitle = withStyles__default(styles$2)(Title);
var StyledBody = withStyles__default(styles$2)(Body);

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
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.root,
        ]) }), children));
};
var StyledContainer = withStyles__default(styles$3)(Container);

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
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.row,
        ]) }), children));
};
var Col = function (props) {
    var children = props.children, xl = props.xl, lg = props.lg, md = props.md, sm = props.sm, xs = props.xs, classes = props.classes, rest = __rest(props, ["children", "xl", "lg", "md", "sm", "xs", "classes"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.col,
        ]) }), children));
};
var StyledRow = withStyles__default(styles$4)(Row);
var StyledCol = withStyles__default(styles$4)(Col);

var styles$5 = (function (theme) { return ({
    root: {
        borderRadius: 8,
        padding: 14,
        border: "solid 1px",
    },
}); });

var FormContext = React.createContext({
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
    React.useEffect(function () {
        /** Running first validation on mount */
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
        }, className: classnames([
            classes.root,
        ]) }),
        React.createElement(FormContext.Provider, { value: {
                updateFormValue: updateFormValue,
                updateFormTouched: updateFormTouched,
                unsetFormValue: unsetFormValue,
                initialValues: initialValues,
                formValues: formValues,
                formErrors: formErrors,
                formTouched: formTouched
            } }, children)));
};
var StyledForm = withStyles__default(styles$5)(Form);

var PrependBackground = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 53 44" }, props),
    React.createElement("defs", null,
        React.createElement("path", { d: "M48.5,3 L48.5,30.6772753 C48.5,33.3843845 47.1309491,35.9078541 44.8615528,37.383754 L31.3615528,46.1634678 C28.7096004,47.8881628 25.2903996,47.8881628 22.6384472,46.1634678 L9.13844716,37.383754 C6.86905092,35.9078541 5.5,33.3843845 5.5,30.6772753 L5.5,3 C5.5,-1.418278 9.081722,-5 13.5,-5 L40.5,-5 C44.918278,-5 48.5,-1.418278 48.5,3 Z", id: "path-1" })),
    React.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "Forms", transform: "translate(-306.000000, -1087.000000)" },
            React.createElement("g", { id: "Group", transform: "translate(306.000000, 1087.000000)" },
                React.createElement("mask", { id: "mask-2", fill: "white" },
                    React.createElement("use", { xlinkHref: "#path-1" })),
                React.createElement("use", { id: "Mask", fill: "#007AFF", transform: "translate(27.000000, 22.000000) rotate(-90.000000) translate(-27.000000, -22.000000) ", xlinkHref: "#path-1" })))))); });

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
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    prependMargin: {
        marginRight: 20,
    },
    prependContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: 8,
        paddingLeft: 17,
        height: '100%',
    },
    prependBackground: {
        right: -20,
        zIndex: -1,
        position: 'absolute',
        height: '105%',
    },
    invalidPrepend: {
        backgroundColor: '#d0021b',
    },
    append: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    errorMessage: {
        color: '#ea3546',
        fontFamily: 'galano-light',
        fontSize: 10,
    },
}); });

var TextField = function (props) {
    var classes = props.classes, errorMsg = props.errorMsg, disabled = props.disabled, prependContent = props.prependContent, appendContent = props.appendContent, placeholder = props.placeholder, isFocused = props.isFocused, value = props.value, rest = __rest(props, ["classes", "errorMsg", "disabled", "prependContent", "appendContent", "placeholder", "isFocused", "value"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames([
                classes.root,
                errorMsg ? classes.invalidRoot : null,
                disabled ? classes.disabledRoot : null,
            ]) },
            React.createElement("div", { className: classnames([
                    classes.prepend,
                    prependContent ? classes.prependMargin : null,
                    errorMsg ? classes.invalidPrepend : null,
                ]) },
                prependContent ? React.createElement("div", { className: classes.prependContent }, prependContent) : null,
                prependContent ? React.createElement(PrependBackground, { className: classes.prependBackground }) : null),
            React.createElement("div", { className: classes.inputWrapper },
                placeholder ?
                    (React.createElement("div", { className: classnames([
                            classes.placeholder,
                            ((typeof value !== 'undefined' && value !== '') || isFocused) ? classes.placeholderCollapsed : null,
                            errorMsg ? classes.invalidPlaceholder : null,
                        ]) }, placeholder)) : null,
                React.createElement("input", __assign({}, rest, { className: classnames([
                        classes.input,
                        placeholder ? classes.inputWithPlaceholder : null,
                        errorMsg ? classes.invalidInput : null,
                    ]), disabled: disabled, value: value || '' }))),
            React.createElement("div", { className: classnames([
                    classes.append,
                ]) }, appendContent)),
        errorMsg ?
            (React.createElement("div", { className: classes.errorMessage }, errorMsg)) : null));
};
var StyledTextField = withStyles__default(styles$6)(TextField);

var InputField = function (props) {
    var classes = props.classes, _a = props.name, name = _a === void 0 ? 'unnamed' : _a, value = props.value, _b = props.type, type = _b === void 0 ? 'text' : _b, placeholder = props.placeholder, disabled = props.disabled, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, _c = props.clearFormValueOnUnmount, clearFormValueOnUnmount = _c === void 0 ? true : _c, prependContent = props.prependContent, appendContent = props.appendContent, errorMessage = props.errorMessage, rest = __rest(props, ["classes", "name", "value", "type", "placeholder", "disabled", "onChange", "onFocus", "onBlur", "clearFormValueOnUnmount", "prependContent", "appendContent", "errorMessage"]);
    /** Focus status (needed for styles) */
    var _d = __read(React.useState(false), 2), isFocused = _d[0], setFocused = _d[1];
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _e = React.useContext(FormContext), updateFormValue = _e.updateFormValue, updateFormTouched = _e.updateFormTouched, unsetFormValue = _e.unsetFormValue, formValues = _e.formValues, formErrors = _e.formErrors, formTouched = _e.formTouched;
    /** Getting error message from form errors */
    var errorMsg = (name && formTouched[name] && formErrors[name]) || errorMessage;
    /** Setting the internal value of the field from form initial values or from value provided to the field */
    var _f = __read(React.useState((name && formValues && formValues[name]) || value), 2), internalValue = _f[0], setInternalValue = _f[1];
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (e) {
        var _a = e.target, name = _a.name, targetValue = _a.value;
        updateFormValue && updateFormValue(name, targetValue);
        onChange && onChange(e);
        setInternalValue(targetValue);
    };
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
    /** On mount/unmount logic */
    React.useEffect(function () {
        /** On mount */
        /** Update form with internal value on mount */
        name && updateFormValue(name, internalValue);
        return function () {
            /** On unmount */
            /** Clear Form value if needed */
            name && clearFormValueOnUnmount && unsetFormValue && unsetFormValue(name);
        };
    }, []);
    /** Switch depending on the type of the desired input field */
    switch (type) {
        case 'text':
        case 'number':
        case 'email':
        case 'password':
            return (React.createElement(StyledTextField, __assign({}, rest, { isFocused: isFocused, onFocus: onFocusWrapper, onBlur: onBlurWrapper, onChange: onChangeWrapper, disabled: disabled, placeholder: placeholder, type: type, name: name, errorMsg: errorMsg, value: internalValue, appendContent: appendContent, prependContent: prependContent })));
    }
    return React.createElement("input", __assign({}, props));
};

exports.Body = StyledBody;
exports.Button = StyledButton;
exports.Col = StyledCol;
exports.Container = StyledContainer;
exports.Form = StyledForm;
exports.FormContext = FormContext;
exports.GlobalStyles = WrappedGlobalStyles;
exports.InputField = InputField;
exports.Row = StyledRow;
exports.ThemeProvider = ThemeProvider;
exports.Title = StyledTitle;
exports.Wrapper = StyledCard;
//# sourceMappingURL=index.js.map
