'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var withStyles = require('react-jss');
var withStyles__default = _interopDefault(withStyles);

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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var styles = (function (theme) { return ({
    '@global': {
        '@import': __spread(theme.imports),
        html: {
            height: '100%',
            width: '100%',
        },
        body: {
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightRegular,
            fontSmoothing: 'antialiased',
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
            backgroundColor: theme.backgroundColorPrimary,
            color: theme.textColorPrimary,
        },
        h1: {
            fontSize: 96,
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightLight,
            letterSpacing: -1.5,
        },
        h2: {
            fontSize: 60,
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightLight,
            letterSpacing: -0.5,
        },
        h3: {
            fontSize: 48,
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightRegular,
            letterSpacing: 0,
        },
        h4: {
            fontSize: 34,
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightRegular,
            letterSpacing: 0.25,
        },
        h5: {
            fontSize: 24,
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightRegular,
            letterSpacing: 0,
        },
        h6: {
            fontSize: 20,
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightSemiBold,
            letterSpacing: 0.15,
        },
        p: {
            fontSize: 14,
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightRegular,
            letterSpacing: 0.1,
        },
        b: {
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeightBold,
        },
        hr: {
            border: "0.5px solid " + theme.hrColor,
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
            color: theme.buttonColorSecondary,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            }
        },
    },
}); });

var GlobalStyles = function (props) {
    var children = props.children;
    return (React.createElement(React.Fragment, null, children));
};
var WrappedGlobalStyles = withStyles__default(styles)(GlobalStyles);

var colors = {
    /** Primary */
    normal: '#007aff',
    normalHover: '#278eff',
    darkHover: 'brightness(85%)',
    normalActive: '#4ea3ff',
    /** Warning */
    warning: '#ff8c00',
    warningHover: '#ff9e27',
    warningActive: '#ffaf4e',
    /** Danger */
    danger: '#ea3546',
    dangerHover: '#ee5967',
    dangerActive: '#f17c87',
    /** Success */
    success: '#60a66b',
    successHover: '#69ab73',
    successActive: '#82b98a',
    /** Others */
    black: '#1b1b1b',
    darkerGray: '#37474f',
    darkGray: '#54738c',
    gray: '#90a4ae',
    grayHover: '#a7b7bf',
    grayActive: '#bdc9cf',
    lightGray: '#eceff1',
    lightGray2: '#cccccc',
    lightGray3: '#f9f9f9',
    darkGray2: '#3d3d3d',
    white: '#fff',
    whiteHover: '#f5f5f5',
    whiteActive: '#ebebeb',
    navyBlue: '#2a5393',
    red: '#d0021b',
};

var defaultTheme = {
    /** Imports */
    imports: [
        "url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800')",
    ],
    /** Text color */
    textColorPrimary: colors.black,
    textColorSecondary: colors.darkGray,
    textColorHighlight: colors.white,
    /** Background colors */
    backgroundColorPrimary: colors.white,
    /** Horizontal break line */
    hrColor: colors.lightGray,
    /** Fonts */
    fontFamily: 'Open Sans, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightSemiBold: 700,
    fontWeightBold: 800,
    /** Fonts sizes */
    bodyLargeFontSize: 16,
    bodyLargeLetterSpacing: 0.15,
    buttonsFontSize: 16,
    buttonsLetterSpacing: 0.15,
    subtitleFontSize: 14,
    subtitleLetterSpacing: 0.1,
    capsFontSize: 14,
    capsLetterSpacing: 1.1,
    smallLinkFontSize: 12,
    smallLinkLetterSpacing: 0.4,
    bodySmallFontSize: 12,
    bodySmallLetterSpacing: 0.4,
    capsSmallFontSize: 10,
    capsSmallLetterSpacing: 1.5,
    messageFontSize: 10,
    messageLetterSpacing: 1.5,
    finePrintFontSize: 8,
    finePrintLetterSpacing: 1.5,
    /** Button colors */
    buttonColorPrimary: '#fff',
    buttonColorSecondary: colors.normal,
    buttonBackgroundColorPrimary: colors.normal,
    buttonBackgroundColorPrimaryHover: colors.darkHover,
    buttonBackgroundColorPrimaryActive: colors.normalActive,
    buttonBackgroundColorPrimaryDisabled: colors.lightGray2,
    buttonBackgroundColorSecondary: colors.white,
    buttonBackgroundColorSecondaryHover: colors.whiteHover,
    buttonBackgroundColorSecondaryActive: colors.whiteActive,
    buttonBackgroundColorSecondaryDisabled: colors.lightGray3,
    buttonBackgroundColorDisabled: colors.lightGray,
    buttonColorDisabled: colors.gray,
    /** Input fields */
    inputMaxHeightIdle: 44,
    inputLargeMaxHeightIdle: 56,
    inputColorIdle: colors.darkGray,
    inputColorBorderIdle: '#cccccc',
    inputColorBorderIdleHover: '#deebf6',
    inputColorBorderIdleActive: '#eef5fa',
    inputColorHighlight: colors.normal,
    inputColorHighlightHover: colors.normalHover,
    inputColorHighlightActive: colors.normalActive,
    inputColorSpecial: '#006add',
    inputColorSpecialHover: '#0073f1',
    inputColorSpecialActive: '#057dff',
    inputColorSelected: '#a8d4fd',
    inputColorError: colors.red,
    inputPlaceholderColorIdle: '#95acbf',
    inputErrorMessageColor: colors.danger,
    inputBackgroundColor: colors.white,
    inputBackgroundColorHover: colors.whiteHover,
    inputBackgroundColorActive: colors.whiteActive,
    inputBackgroundColorDisabled: colors.lightGray,
    inputPlaceholderColor: colors.lightGray2,
    inputValueColor: colors.darkGray2,
    /** Navbar */
    navbarItemColor: colors.gray,
    navbarItemColorHover: colors.grayHover,
    navbarItemColorActive: colors.grayActive,
    navbarItemColorHighlight: colors.normal,
    navbarItemColorHighlightHover: colors.normalHover,
    navbarItemColorHighlightActive: colors.normalActive,
    /** Sidebar */
    sidebarSectionColor: colors.black,
    sidebarItemColor: colors.gray,
    sidebarItemColorHover: colors.grayHover,
    sidebarItemColorActive: colors.grayActive,
    sidebarItemColorSelected: colors.black,
    sidebarItemBackgroundSelected: colors.white,
    sidebarItemColorHighlight: colors.normal,
    sidebarItemColorHighlightHover: colors.normalHover,
    sidebarItemColorHighlightActive: colors.normalActive,
    /** Badges */
    badgePrimaryBackgroundColor: colors.navyBlue,
    /** Table */
    tableBorderPrimary: '1px solid rgba(151, 151, 151, 0.39)',
    tableBoxShadow: '0 1px 1px 0 rgba(218, 218, 218, 0.5)',
    tableBackgroundColor: colors.lightGray,
    tableBorderColor: colors.lightGray,
    tableHeaderTextColor: colors.darkerGray,
    /** Pagination */
    paginationBackgroundColor: colors.lightGray,
    paginationBackgroundColorActive: colors.normal,
    paginationTextColor: colors.darkGray,
    paginationTextColorActive: colors.white,
    /** Grid */
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

/** Main component */
var ThemeProvider = function (props) {
    var _a = props.theme, theme = _a === void 0 ? {} : _a, children = props.children;
    return (React.createElement(withStyles.ThemeProvider, { theme: __assign({}, defaultTheme, theme) },
        React.createElement(WrappedGlobalStyles, null, children)));
};

/** Creating form context with default values */
var defaultFormContextValues = {
    updateFormValue: function (name, data, init) { },
    updateFormTouched: function (name, data) { },
    unsetFormValue: function (name) { },
    formValues: undefined,
    formErrors: undefined,
    formTouched: undefined,
    initialValues: undefined,
};
var FormContext = React.createContext(defaultFormContextValues);
/** Form component */
var Form = function (props) {
    var children = props.children, onSubmit = props.onSubmit, onReset = props.onReset, onChange = props.onChange, onError = props.onError, onValidate = props.onValidate, onValidateAsync = props.onValidateAsync, validationSchema = props.validationSchema, initialValues = props.initialValues, rest = __rest(props, ["children", "onSubmit", "onReset", "onChange", "onError", "onValidate", "onValidateAsync", "validationSchema", "initialValues"]);
    /** State */
    var _a = __read(React.useState(initialValues || {}), 2), formValues = _a[0], setFormValues = _a[1];
    var _b = __read(React.useState({}), 2), formErrors = _b[0], setFormErrors = _b[1];
    var _c = __read(React.useState({}), 2), formTouched = _c[0], setFormTouched = _c[1];
    var _d = __read(React.useState(1), 2), formSessionId = _d[0], setFormSessionId = _d[1];
    /** Yup validate function wrapper */
    var validate = function (values) {
        /** Validation schema using Yup library */
        if (validationSchema) {
            validationSchema
                .validate(values, { abortEarly: false })
                /** No errors from Yup */
                .then(function () { return setFormErrors({}); })
                /** Errors were caught */
                .catch(function (errors) {
                var parsedErrors = errors.inner.reduce(function (a, v) {
                    var _a;
                    return (__assign({}, a, (_a = {}, _a[v.path] = v.message, _a)));
                }, {});
                setFormErrors(function () { return parsedErrors; });
            });
        }
        /** External validation methods */
        if (onValidate) {
            setFormErrors(function () { return onValidate(values); });
        }
        if (onValidateAsync) {
            onValidateAsync(values)
                /** No errors from external lib */
                .then(function (errors) { return setFormErrors(function () { }); })
                /** Errors were caught */
                .catch(function (errors) { return setFormErrors(function () { return errors; }); });
        }
    };
    /** Updating form values whenever a change is made within an input field */
    var updateFormValue = function (name, value, init) {
        if (init === void 0) { init = false; }
        /** Setting new values in state */
        setFormValues(function (formValues) {
            var newFormValues = __assign({}, formValues);
            newFormValues[name] = value;
            /** Validating new values */
            validate(newFormValues);
            /** Sending on change callback (if it was provided) */
            !init && onChange && onChange(__assign({}, newFormValues));
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
    /** Wrappers */
    var onSubmitFormWrapper = function (e) {
        e.preventDefault();
        if (Object.keys(formErrors).length > 0) {
            /** Set everything to "touched" to highlight errors on submit */
            setFormTouched(function (oldFormTouched) { return Object.keys(formValues).reduce(function (acc, key) {
                var _a;
                return (__assign({}, acc, (_a = {}, _a[key] = true, _a)));
            }, {}); });
            /** External callback */
            onError && onError(formErrors, formValues);
        }
        else {
            /** External callback */
            onSubmit && onSubmit(formValues);
        }
    };
    var onResetFormWrapper = function (e) {
        e.preventDefault();
        setFormValues(function () { return initialValues || {}; });
        setFormSessionId(function (id) { return id + 1; });
        /** External callback */
        onReset && onReset(formValues);
    };
    /** Mount / unmount logic */
    React.useEffect(function () {
        /** Running first validation on mount */
        validate(formValues);
    }, []);
    return (React.createElement("form", __assign({}, rest, { onSubmit: onSubmitFormWrapper, onReset: onResetFormWrapper, key: formSessionId }),
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



var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Form,
    defaultFormContextValues: defaultFormContextValues,
    FormContext: FormContext,
    Form: Form
});

var styles$1 = (function (theme) { return ({
    /** Root Wrapper */
    root: {
        transition: '0.3s',
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
        color: theme.textColorPrimary,
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        display: 'flex',
        alignItems: 'center',
        '&:hover $input ~ $checkmark': {
            backgroundColor: theme.inputBackgroundColorHover,
        },
        '&:active $input ~ $checkmark': {
            backgroundColor: theme.inputBackgroundColorActive,
        },
        '&:hover $input:checked ~ $checkmark': {
            backgroundColor: theme.inputColorHighlightHover,
        },
        '&:active $input:checked ~ $checkmark': {
            backgroundColor: theme.inputColorHighlightActive,
        },
    },
    input: {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        backgroundColor: theme.inputBackgroundColor,
        '&:checked ~ $checkmark': {
            backgroundColor: theme.inputColorHighlight,
        },
        '&:checked ~ $checkmark:after': {
            display: 'block',
        },
        '&:checked ~ $placeholder': {
            color: theme.inputColorHighlight,
        },
        '&:disabled ~ $placeholder': {
            color: theme.inputPlaceholderColorIdle,
        },
        '&:disabled ~ $checkmark': {
            backgroundColor: theme.inputColorBorderIdle + " !important",
        },
    },
    checkmark: {
        position: 'relative',
        top: 0,
        left: 0,
        height: 22,
        width: 22,
        backgroundColor: theme.inputBackgroundColor,
        borderRadius: '50%',
        border: "1px solid " + theme.inputColorBorderIdle,
        '&:after': {
            content: '""',
            position: 'absolute',
            display: 'none',
            top: 6,
            left: 6,
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'white',
        },
    },
    placeholder: {
        padding: '8px 4px',
    },
    /* Handle sizes */
    small: {
        fontSize: 14,
        '& $checkmark': {
            height: 16,
            width: 16,
            '&:after': {
                top: 4,
                left: 4,
                width: 6,
                height: 6,
            },
        },
    },
    normal: {
        fontSize: 14,
    },
    large: {
        fontSize: 16,
        '& $checkmark': {
            height: 28,
            width: 28,
            '&:after': {
                top: 8,
                left: 8,
                width: 10,
                height: 10,
            },
        },
    }
}); });

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

/** Main component */
var RadioField = function (props) {
    /** Get props */
    var classes = props.classes, value = props.value, name = props.name, checked = props.checked, placeholder = props.placeholder, onChange = props.onChange, _a = props.sizeVariant, sizeVariant = _a === void 0 ? 'normal' : _a, rest = __rest(props, ["classes", "value", "name", "checked", "placeholder", "onChange", "sizeVariant"]);
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _b = React.useContext(FormContext), updateFormValue = _b.updateFormValue, formValues = _b.formValues;
    /** Ref */
    var inputRef = React.createRef();
    /** Get checked value when using within a form or solo */
    var checkedValue = formValues ? formValues[name] === value : undefined;
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (e) {
        var _a = e.target, name = _a.name, targetValue = _a.value;
        formValues && updateFormValue(name, targetValue);
        onChange && onChange(e);
    };
    /** On mount/unmount logic */
    React.useEffect(function () {
        /** On mount */
        /** Update form with internal value on mount */
        if (formValues) ;
        else {
            /** Set initial checked value when used independently */
            //@ts-ignore
            inputRef.current.checked = checked;
        }
        checked && formValues && updateFormValue(name, value, true);
        return function () {
            /** On unmount */
            /** Clear Form value if needed */
        };
    }, []);
    return (React.createElement("label", { className: classnames(classes.root, classes[sizeVariant]) },
        React.createElement("input", __assign({}, rest, { ref: inputRef, type: "radio", className: classes.input, name: name, value: value, checked: checkedValue, onChange: onChangeWrapper })),
        React.createElement("span", { className: classes.checkmark }),
        React.createElement("div", { className: classes.placeholder }, placeholder)));
};
/** Wrappers */
var StyledRadioField = withStyles__default(styles$1)(RadioField);
var PropsWrappedStyledRadioField = function (props) { return React.createElement(StyledRadioField, __assign({}, props)); };



var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledRadioField,
    RadioField: PropsWrappedStyledRadioField
});

var PrependBackground = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 53 44", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement("title", null, "Mask"),
    React.createElement("defs", null),
    React.createElement("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { transform: "translate(-306.000000, -1087.000000)" },
            React.createElement("g", { transform: "translate(306.000000, 1087.000000)" },
                React.createElement("g", { transform: "translate(27.000000, 22.000000) rotate(-90.000000) translate(-27.000000, -22.000000) " },
                    React.createElement("path", { d: "M48.5,3 L48.5,30.6772753 C48.5,33.3843845 47.1309491,35.9078541 44.8615528,37.383754 L31.3615528,46.1634678 C28.7096004,47.8881628 25.2903996,47.8881628 22.6384472,46.1634678 L9.13844716,37.383754 C6.86905092,35.9078541 5.5,33.3843845 5.5,30.6772753 L5.5,3 C5.5,-1.418278 9.081722,-5 13.5,-5 L40.5,-5 C44.918278,-5 48.5,-1.418278 48.5,3 Z" }))))))); });

var index$2 = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 16 19", width: 20, version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement("title", null, "Profile"),
    React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { transform: "translate(-455.000000, -1582.000000)", stroke: "#FFFFFF", strokeWidth: "1.02" },
            React.createElement("g", { transform: "translate(456.157895, 1583.000000)" },
                React.createElement("path", { d: "M4.36276851,5.42178243 C4.36276851,6.72768108 5.47893992,7.78627568 6.85571681,7.78627568 C8.23249371,7.78627568 9.34854401,6.72756622 9.34854401,5.42178243" }),
                React.createElement("path", { d: "M1.37159385,5.25924865 C1.37159385,8.13213378 3.8268803,10.4609041 6.85569259,10.4609041 C9.88450489,10.4609041 12.3396702,8.13213378 12.3396702,5.25924865 C12.3396702,2.38636351 9.88450489,0.0574783784 6.85569259,0.0574783784 C3.8268803,0.0574783784 1.37159385,2.38636351 1.37159385,5.25924865 Z" }),
                React.createElement("path", { d: "M13.6508719,16.9438311 C13.6508719,13.3841689 10.6084965,10.4985338 6.85575314,10.4985338 C3.10276758,10.4985338 0.0605132743,13.3841689 0.0605132743,16.9438311 L13.6508719,16.9438311 Z" })))))); });

var Eye = (function (props) {
    return (React.createElement("svg", __assign({ viewBox: "0 0 20 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("path", { d: "M18.5714507,10.4285791 C17.5111816,8.78795214 16.060287,7.38170046 14.3192135,6.48884225 C14.7656426,7.24777173 15.0000179,8.11830848 15.0000179,9.00000596 C15.0000179,11.7567057 12.7567116,14.0000119 10.0000119,14.0000119 C7.24331221,14.0000119 5.00000596,11.7567057 5.00000596,9.00000596 C5.00000596,8.11830848 5.23438124,7.24777173 5.68081034,6.48884225 C3.93973684,7.38170046 2.48884225,8.78795214 1.42857313,10.4285791 C3.33705755,13.3750112 6.41741836,15.4285851 10.0000119,15.4285851 C13.5826055,15.4285851 16.6629663,13.3750112 18.5714507,10.4285791 Z M10.5357268,6.1428597 C10.5357268,5.85268078 10.2901908,5.60714477 10.0000119,5.60714477 C8.13617041,5.60714477 6.60715073,7.13616445 6.60715073,9.00000596 C6.60715073,9.29018488 6.85268674,9.53572088 7.14286566,9.53572088 C7.43304458,9.53572088 7.67858058,9.29018488 7.67858058,9.00000596 C7.67858058,7.72768302 8.72768898,6.67857462 10.0000119,6.67857462 C10.2901908,6.67857462 10.5357268,6.43303861 10.5357268,6.1428597 Z M20.0000238,10.4285791 C20.0000238,10.7075973 19.910738,10.964294 19.7768093,11.1986693 C17.7232354,14.5803698 13.9620702,16.8571582 10.0000119,16.8571582 C6.03795363,16.8571582 2.27678843,14.569209 0.223214552,11.1986693 C0.0892858207,10.964294 0,10.7075973 0,10.4285791 C0,10.1495609 0.0892858207,9.89286417 0.223214552,9.65848889 C2.27678843,6.28794916 6.03795363,4 10.0000119,4 C13.9620702,4 17.7232354,6.28794916 19.7768093,9.65848889 C19.910738,9.89286417 20.0000238,10.1495609 20.0000238,10.4285791 Z" })));
});

var EyeDisabled = (function (props) {
    return (React.createElement("svg", __assign({ viewBox: "0 0 20 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("path", { d: "M6.19420381,14.7566938 L7.06474056,13.1830312 C5.77009616,12.24553 5.00000596,10.7388318 5.00000596,9.14284778 C5.00000596,8.2611503 5.23438124,7.39061354 5.68081034,6.63168407 C3.93973684,7.52454228 2.48884225,8.93079395 1.42857313,10.5714209 C2.5892888,12.3682981 4.22991576,13.8749963 6.19420381,14.7566938 Z M10.5357268,6.28570151 C10.5357268,5.9955226 10.2901908,5.74998659 10.0000119,5.74998659 C8.13617041,5.74998659 6.60715073,7.27900627 6.60715073,9.14284778 C6.60715073,9.43302669 6.85268674,9.6785627 7.14286566,9.6785627 C7.43304458,9.6785627 7.67858058,9.43302669 7.67858058,9.14284778 C7.67858058,7.8593641 8.72768898,6.82141644 10.0000119,6.82141644 C10.2901908,6.82141644 10.5357268,6.57588043 10.5357268,6.28570151 Z M14.587071,4.15400254 C14.587071,4.176324 14.587071,4.23212764 14.5759102,4.25444909 C12.2209967,8.46204339 9.88840465,12.6919592 7.53349112,16.8995535 L6.98661547,17.8928582 C6.91965111,18.0044655 6.7968831,18.0714298 6.6741151,18.0714298 C6.473222,18.0714298 5.41295288,17.4241076 5.1785776,17.2901789 C5.06697033,17.2232146 5,17.1116073 5,16.9776785 C5,16.7991069 5.3794707,16.1964276 5.49107797,16.0066952 C3.32589682,15.0245512 1.50669822,13.3504421 0.223214552,11.3415111 C0.0781250931,11.1182966 0,10.8504391 0,10.571412 C0,10.3035634 0.0781250931,10.0245453 0.223214552,9.8013307 C2.43303861,6.40846952 5.88170344,4.14284182 10.0000119,4.14284182 C10.6696556,4.14284182 11.35046,4.20980618 12.0089429,4.33257418 L12.6116222,3.24998361 C12.6785865,3.13837633 12.7901938,3.07141197 12.9241225,3.07141197 C13.1250156,3.07141197 14.174124,3.71873417 14.4084993,3.8526629 C14.5201066,3.91962726 14.587071,4.03123454 14.587071,4.15400254 Z M15.0000179,9.14284778 C15.0000179,11.2187431 13.7165342,13.0714239 11.7857283,13.8080319 L14.9107321,8.20534666 C14.9665357,8.51784703 15.0000179,8.8303474 15.0000179,9.14284778 Z M20.0000238,10.5714209 C20.0000238,10.8615998 19.9218987,11.0959751 19.7768093,11.3415111 C19.4308267,11.9107082 18.9955584,12.4575839 18.56029,12.9598166 C16.3727874,15.4709803 13.3593909,17 10.0000119,17 L10.8259058,15.526784 C14.0736775,15.2477658 16.8303772,13.272317 18.5714507,10.5714209 C17.7455569,9.28793724 16.6852877,8.16070375 15.4241255,7.290167 L16.1272514,6.04016551 C17.5111816,6.9665059 18.9062725,8.36159685 19.7768093,9.8013307 C19.9218987,10.0468667 20.0000238,10.281242 20.0000238,10.5714209 Z" })));
});

var index$3 = (function (props) { return (React.createElement("svg", __assign({}, props, { width: "13px", height: "11px", viewBox: "0 0 13 11", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }),
    React.createElement("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { transform: "translate(-3.000000, -4.000000)", fillRule: "nonzero" },
            React.createElement("path", { d: "M3.89188126,9.9653644 L7.16423288,14.3097417 C7.49578779,14.7509044 7.97264341,15 8.48091541,15 C8.49830662,15 8.51681984,15 8.53477205,14.999462 C9.06267928,14.9811699 9.54177893,14.6960281 9.85033257,14.2177431 L15.5899913,5.30571715 C15.8486153,4.90382863 15.7184618,4.37550931 15.2988289,4.12748976 C14.8791959,3.8794702 14.3288484,4.00428698 14.0702244,4.40671351 L8.46240219,13.1094561 L5.34040036,8.96360211 C5.05148195,8.58054371 4.49384137,8.49392516 4.09384365,8.7709969 C3.69384593,9.04806864 3.60296286,9.58230599 3.89188126,9.9653644 Z" }))))); });

var Search = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 20 20", width: 20 }, props),
    React.createElement("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("path", { d: "M13.8571582,7.85714626 C13.8571582,5.10045251 11.6138519,2.85714626 8.85714626,2.85714626 C6.10045251,2.85714626 3.85714626,5.10045251 3.85714626,7.85714626 C3.85714626,10.6138519 6.10045251,12.8571582 8.85714626,12.8571582 C11.6138519,12.8571582 13.8571582,10.6138519 13.8571582,7.85714626 Z M19.5714507,17.1428776 C19.5714507,17.9241285 18.9241285,18.5714507 18.1428776,18.5714507 C17.7634128,18.5714507 17.3951088,18.4152005 17.1384121,18.1473431 L13.3102825,14.3303742 C12.0044774,15.2343932 10.4419755,15.7143044 8.85715222,15.7143044 C4.51562919,15.7143044 1,12.1986753 1,7.85715222 C1,3.51562919 4.51562919,0 8.85715222,0 C13.1986753,0 16.7143044,3.51562919 16.7143044,7.85715222 C16.7143044,9.44197554 16.2343932,11.0044774 15.3303742,12.3102825 L19.1585038,16.1384121 C19.4152005,16.3951088 19.5714507,16.7634128 19.5714507,17.1428776 Z" })))); });

var Close = (function (props) { return (React.createElement("svg", __assign({ width: 24, viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }))); });

var CloseOutline = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }))); });

var DownArrow = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }))); });

var index$4 = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
    React.createElement("path", { d: "m409.785156 278.5-153.785156 153.785156-153.785156-153.785156 28.285156-28.285156 105.5 105.5v-355.714844h40v355.714844l105.5-105.5zm102.214844 193.5h-512v40h512zm0 0" }))); });

var File = (function (props) { return (React.createElement("svg", __assign({ width: 24, viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M13.006 3.443L10.056.494A1.687 1.687 0 0 0 8.865 0H1.687C.756 0 0 .756 0 1.688v14.624C0 17.244.756 18 1.688 18h10.124c.932 0 1.688-.756 1.688-1.688V4.636c0-.447-.178-.876-.494-1.193zm-.796.796a.559.559 0 0 1 .148.261H9V1.142c.099.025.19.076.261.148l2.95 2.949zm-.398 12.636H1.688a.562.562 0 0 1-.563-.563V1.688c0-.31.252-.562.563-.562h6.187v3.656c0 .466.378.844.844.844h3.656v10.688c0 .31-.252.562-.563.562zm-1.211-7.416l-4.739 4.7a.422.422 0 0 1-.596-.001l-2.368-2.375a.422.422 0 0 1 0-.597l.3-.298a.422.422 0 0 1 .597 0l1.773 1.78 4.14-4.108a.422.422 0 0 1 .598.002l.297.3a.422.422 0 0 1-.002.597z" }))); });

var index$5 = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 512 512" }, props),
    React.createElement("g", null,
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("polygon", { points: "353.574,176.526 313.496,175.056 304.807,412.34 344.885,413.804" }),
                React.createElement("rect", { x: "235.948", y: "175.791", width: "40.104", height: "237.285" }),
                React.createElement("polygon", { points: "207.186,412.334 198.497,175.049 158.419,176.52 167.109,413.804" }),
                React.createElement("path", { d: "M17.379,76.867v40.104h41.789L92.32,493.706C93.229,504.059,101.899,512,112.292,512h286.74\n\t\t\t\tc10.394,0,19.07-7.947,19.972-18.301l33.153-376.728h42.464V76.867H17.379z M380.665,471.896H130.654L99.426,116.971h312.474\n\t\t\t\tL380.665,471.896z" })))),
    React.createElement("g", null,
        React.createElement("g", null,
            React.createElement("path", { d: "M321.504,0H190.496c-18.428,0-33.42,14.992-33.42,33.42v63.499h40.104V40.104h117.64v56.815h40.104V33.42\n\t\t\tC354.924,14.992,339.932,0,321.504,0z" }))))); });



var index$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DownArrow: DownArrow,
    Download: index$4,
    Close: Close,
    Check: index$3,
    CloseOutline: CloseOutline,
    Search: Search,
    Eye: Eye,
    EyeDisabled: EyeDisabled,
    File: File,
    PrependBackground: PrependBackground,
    Profile: index$2,
    Delete: index$5
});

var styles$2 = (function (theme) { return ({
    /** Root Wrapper */
    root: {
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        border: "solid 1px " + (theme.inputColorBorderIdle || '#cfe2f2'),
        transition: '0.5s',
        backgroundColor: theme.inputBackgroundColor || '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        '&:focus-within': {
            border: "solid 1px " + (theme.inputColorHighlight || '#007aff'),
            outline: 'none',
        },
    },
    rootInvalid: {
        border: "solid 1px " + (theme.inputColorError || '#d0021b') + " !important",
    },
    rootDisabled: {
        backgroundColor: '#f0f0f0',
    },
    /** Input Wrapper */
    input: {
        width: '100%',
        height: '100%',
        border: 0,
        padding: 18,
        paddingLeft: function (props) { return props.layout === 'bare' ? 0 : 16; },
        backgroundColor: 'rgba(0,0,0,0)',
        transition: 'color 0.5s',
        color: theme.inputColorIdle || '#54738c',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        fontSize: 14,
        '&:focus': {
            color: theme.inputValueColor || '#007aff',
            outline: 'none',
        },
        '&::placeholder': {
            color: theme.inputPlaceholderColor,
            fontSize: 14
        },
        '&:disabled': {
            color: '#cccccc',
        }
    },
    inputWithPlaceholder: {},
    inputWithPlaceholderCollapsed: {
        transform: 'translate(0px, 5px)'
    },
    inputInvalid: {
        '&:focus': {
            color: (theme.inputColorError || '#d0021b') + " !important",
        },
    },
}); });

var styles$3 = (function (theme) { return ({
    /** Root Wrapper */
    root: {
        position: 'relative',
        maxHeight: theme.inputMaxHeightIdle,
        borderRadius: 4,
        overflow: 'hidden',
        border: "solid 1px " + (theme.inputColorBorderIdle || '#cfe2f2'),
        transition: 'color 0.5s, border 0.5s',
        backgroundColor: theme.inputBackgroundColor || '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        '&:focus-within': {
            border: "solid 1px " + (theme.inputColorHighlight || '#007aff'),
            outline: 'none',
        },
    },
    rootInvalid: {
        border: "solid 1px " + (theme.inputColorError || '#d0021b') + " !important",
    },
    rootDisabled: {
        backgroundColor: '#f9f9f9',
        borderColor: '#cccccc',
    },
    fieldWrapper: {
        flex: 1,
        position: 'relative',
    },
    /** Placeholder */
    placeholder: {
        pointerEvents: 'none',
        userSelect: 'none',
        position: 'absolute',
        transition: 'transform 0.2s, font 0.2s, color 0.2s',
        fontSize: 14,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
        height: '100%',
        margin: 0,
        transform: 'translate(0, 0px)',
        transformOrigin: 'left',
        color: theme.inputPlaceholderColorIdle || '#95acbf'
    },
    placeholderFontFamily: {
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
    },
    placeholderNormal: {
        padding: 12,
        paddingLeft: 16,
    },
    placeholderMini: {
        lineHeight: '26px',
    },
    placeholderInvalid: {},
    placeholderCollapsed: {
        fontSize: 10,
        transform: 'translate(0, -10px)',
        fontWeight: theme.fontWeightMedium,
    },
    /** Prepend */
    prepend: {
        transition: 'color 0.5s, border 0.5s',
        position: 'relative',
        minWidth: 7,
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        '& + $input:disabled': {
            fill: theme.inputPlaceholderColorIdle || '#95acbf',
            backgroundColor: theme.inputPlaceholderColorIdle || '#95acbf',
        },
    },
    prependDisabled: {
        fill: (theme.inputPlaceholderColorIdle || '#95acbf') + " !important",
        backgroundColor: (theme.inputPlaceholderColorIdle || '#95acbf') + " !important",
    },
    prependMargin: {
        marginRight: 20,
    },
    prependInvalid: {
        fill: (theme.inputColorError || '#d0021b') + " !important",
        backgroundColor: (theme.inputColorError || '#d0021b') + " !important",
    },
    prependContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.inputBackgroundColor || '#fff',
        padding: 8,
        paddingLeft: 17,
        height: '100%',
    },
    prependContentSmall: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 5,
        color: theme.inputBackgroundColor || '#fff',
    },
    prependBackgroundColor: {
        backgroundColor: theme.inputColorHighlight || '#007aff',
        fill: theme.inputColorHighlight || '#007aff',
    },
    prependBackgroundIcon: {
        right: -20,
        zIndex: -1,
        position: 'absolute',
        height: '105%',
    },
    /** Append */
    append: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    },
    large: {
        '& $root': {
            maxHeight: theme.inputLargeMaxHeightIdle,
        },
        '& $placeholderNormal': {
            padding: 16
        }
    }
}); });

/** Main component */
var InputFieldLayout = function (props) {
    var _a;
    var className = props.className, classes = props.classes, errorMsg = props.errorMsg, disabled = props.disabled, prependContent = props.prependContent, appendContent = props.appendContent, placeholder = props.placeholder, isPlaceholderCollapsed = props.isPlaceholderCollapsed, children = props.children, placeholderClassName = props.placeholderClassName, _b = props.showPrependBackground, showPrependBackground = _b === void 0 ? true : _b, _c = props.customPlaceholderFont, customPlaceholderFont = _c === void 0 ? false : _c, _d = props.sizeVariant, sizeVariant = _d === void 0 ? 'normal' : _d, _e = props.large, large = _e === void 0 ? false : _e, rest = __rest(props, ["className", "classes", "errorMsg", "disabled", "prependContent", "appendContent", "placeholder", "isPlaceholderCollapsed", "children", "placeholderClassName", "showPrependBackground", "customPlaceholderFont", "sizeVariant", "large"]);
    return (React.createElement("div", { className: large ? classes.large : '' },
        React.createElement("div", __assign({}, rest, { className: classnames([
                classes.root,
                className,
                disabled ? classes.rootDisabled : null,
                errorMsg ? classes.rootInvalid : null,
            ]) }),
            React.createElement("div", { className: classnames([
                    classes.prepend,
                    showPrependBackground ? classes.prependBackgroundColor : null,
                    (showPrependBackground && prependContent) ? classes.prependMargin : null,
                    disabled ? classes.prependDisabled : null,
                    errorMsg ? classes.prependInvalid : null,
                ]) },
                prependContent
                    ? React.createElement("div", { className: classnames((_a = {},
                            _a[classes.prependContent] = ['mini', 'normal'].includes(sizeVariant),
                            _a[classes.prependContentSmall] = sizeVariant === 'small',
                            _a)) }, prependContent)
                    : null,
                (prependContent && showPrependBackground) ? React.createElement(PrependBackground, { className: classes.prependBackgroundIcon }) : null),
            React.createElement("div", { className: classes.fieldWrapper },
                placeholder ?
                    (React.createElement("div", { className: classnames([
                            classes.placeholder,
                            placeholderClassName,
                            sizeVariant === 'mini' ? classes.placeholderMini : classes.placeholderNormal,
                            customPlaceholderFont ? null : classes.placeholderFontFamily,
                            isPlaceholderCollapsed ? classes.placeholderCollapsed : null,
                            errorMsg ? classes.placeholderInvalid : null,
                        ]) }, placeholder)) : null,
                children),
            React.createElement("div", { className: classnames([
                    classes.append,
                ]) }, appendContent)),
        errorMsg ?
            (React.createElement("div", { className: classes.errorMessage }, errorMsg)) : null));
};
/** Wrappers */
var StyledInputFieldLayout = withStyles__default(styles$3)(InputFieldLayout);
var PropsWrappedStyledInputFieldLayout = function (props) { return React.createElement(StyledInputFieldLayout, __assign({}, props)); };

var styles$4 = (function (theme) { return ({
    /** Root Wrapper */
    root: {
        position: 'relative',
        maxHeight: theme.inputMaxHeightIdle,
        overflow: 'hidden',
        borderBottom: "solid 1px " + (theme.inputColorBorderIdle || '#cfe2f2'),
        transition: 'color 0.5s, border 0.5s',
        backgroundColor: theme.inputBackgroundColor || '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        '&:focus-within': {
            borderBottom: "solid 1px " + (theme.inputColorHighlight || '#007aff'),
            outline: 'none',
        },
    },
    rootInvalid: {
        borderBottom: "solid 1px " + (theme.inputColorError || '#d0021b') + " !important",
    },
    rootDisabled: {
        backgroundColor: '#f0f0f0',
    },
    fieldWrapper: {
        flex: 1,
        position: 'relative',
    },
    /** Append */
    append: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    },
    label: {
        fontSize: 12,
        marginBottom: 8,
        color: theme.inputValueColor,
        '&.error': {
            color: theme.inputErrorMessageColor || '#ea3546',
        },
        '&.disabledLabel': {
            color: '#cccccc'
        }
    },
    large: {
        '& $root': {
            maxHeight: theme.inputLargeMaxHeightIdle,
        },
        '& $label': {
            fontSize: 16,
        }
    }
}); });

/** Main component */
var BareInputLayout = function (props) {
    var labelClassName = props.labelClassName, className = props.className, classes = props.classes, errorMsg = props.errorMsg, disabled = props.disabled, appendContent = props.appendContent, placeholder = props.placeholder, isPlaceholderCollapsed = props.isPlaceholderCollapsed, children = props.children, placeholderClassName = props.placeholderClassName, _a = props.customPlaceholderFont, _b = props.sizeVariant, label = props.label, _c = props.large, large = _c === void 0 ? false : _c, rest = __rest(props, ["labelClassName", "className", "classes", "errorMsg", "disabled", "appendContent", "placeholder", "isPlaceholderCollapsed", "children", "placeholderClassName", "customPlaceholderFont", "sizeVariant", "label", "large"]);
    return (React.createElement("div", { className: large ? classes.large : '' },
        label ? (React.createElement("div", { className: classnames([labelClassName, classes.label, { error: !!errorMsg }, { disabledLabel: disabled }]) }, label))
            :
                null,
        React.createElement("div", __assign({}, rest, { className: classnames([
                classes.root,
                className,
                disabled ? classes.rootDisabled : null,
                errorMsg ? classes.rootInvalid : null,
            ]) }),
            React.createElement("div", { className: classes.fieldWrapper }, children),
            React.createElement("div", { className: classnames([
                    classes.append,
                ]) }, appendContent)),
        errorMsg ?
            (React.createElement("div", { className: classes.errorMessage }, errorMsg)) : null));
};
/** Wrappers */
var StyledInputFieldLayout$1 = withStyles__default(styles$4)(BareInputLayout);
var PropsWrappedStyledBareInputLayout = function (props) { return React.createElement(StyledInputFieldLayout$1, __assign({}, props)); };

var styles$5 = (function (theme) { return ({
    /** Root Wrapper */
    root: {
        position: 'relative',
        maxHeight: theme.inputMaxHeightIdle,
        borderRadius: 4,
        overflow: 'hidden',
        border: "solid 1px " + (theme.inputColorBorderIdle || '#cfe2f2'),
        transition: 'color 0.5s, border 0.5s',
        backgroundColor: theme.inputBackgroundColor || '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        '&:focus-within': {
            border: "solid 1px " + (theme.inputColorHighlight || '#007aff'),
            outline: 'none',
        },
    },
    rootInvalid: {
        border: "solid 1px " + (theme.inputColorError || '#d0021b') + " !important",
    },
    rootDisabled: {
        backgroundColor: '#f0f0f0',
    },
    fieldWrapper: {
        flex: 1,
        position: 'relative',
    },
    /** Append */
    append: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    },
    label: {
        fontSize: 12,
        marginBottom: 8,
        color: theme.inputValueColor,
        '&.error': {
            color: theme.inputErrorMessageColor || '#ea3546',
        },
        '&.disabledLabel': {
            color: '#cccccc'
        }
    },
    large: {
        '& $root': {
            maxHeight: theme.inputLargeMaxHeightIdle,
        },
        '& $label': {
            fontSize: 16,
        }
    }
}); });

/** Main component */
var SimpleInputLayout = function (props) {
    var labelClassName = props.labelClassName, className = props.className, classes = props.classes, errorMsg = props.errorMsg, disabled = props.disabled, appendContent = props.appendContent, placeholder = props.placeholder, isPlaceholderCollapsed = props.isPlaceholderCollapsed, children = props.children, placeholderClassName = props.placeholderClassName, _a = props.customPlaceholderFont, _b = props.sizeVariant, label = props.label, _c = props.large, large = _c === void 0 ? false : _c, rest = __rest(props, ["labelClassName", "className", "classes", "errorMsg", "disabled", "appendContent", "placeholder", "isPlaceholderCollapsed", "children", "placeholderClassName", "customPlaceholderFont", "sizeVariant", "label", "large"]);
    return (React.createElement("div", { className: large ? classes.large : '' },
        label ? (React.createElement("div", { className: classnames([labelClassName, classes.label, { error: !!errorMsg }, { disabledLabel: disabled }]) }, label))
            :
                null,
        React.createElement("div", __assign({}, rest, { className: classnames([
                classes.root,
                className,
                disabled ? classes.rootDisabled : null,
                errorMsg ? classes.rootInvalid : null,
            ]) }),
            React.createElement("div", { className: classes.fieldWrapper }, children),
            React.createElement("div", { className: classnames([
                    classes.append,
                ]) }, appendContent)),
        errorMsg ?
            (React.createElement("div", { className: classes.errorMessage }, errorMsg)) : null));
};
/** Wrappers */
var StyledInputFieldLayout$2 = withStyles__default(styles$5)(SimpleInputLayout);
var PropsWrappedStyledSimpleInputLayout = function (props) { return React.createElement(StyledInputFieldLayout$2, __assign({}, props)); };

var TextInput = function (props) {
    var className = props.className, classes = props.classes, errorMsg = props.errorMsg, disabled = props.disabled, placeholder = props.placeholder, isFocused = props.isFocused, prependContent = props.prependContent, appendContent = props.appendContent, value = props.value, label = props.label, _a = props.layout, layout = _a === void 0 ? 'default' : _a, large = props.large, labelClassName = props.labelClassName, rest = __rest(props, ["className", "classes", "errorMsg", "disabled", "placeholder", "isFocused", "prependContent", "appendContent", "value", "label", "layout", "large", "labelClassName"]);
    var isPlaceholderCollapsed = !!(placeholder && ((typeof value !== 'undefined' && value !== '') || isFocused));
    var isSimpleLayout = layout !== 'default';
    var LayoutComponent = null;
    switch (layout) {
        case 'bare':
            LayoutComponent = PropsWrappedStyledBareInputLayout;
            break;
        case 'simple':
            LayoutComponent = PropsWrappedStyledSimpleInputLayout;
            break;
        default:
            LayoutComponent = PropsWrappedStyledInputFieldLayout;
            break;
    }
    return (React.createElement(LayoutComponent, { appendContent: appendContent, prependContent: prependContent, errorMsg: errorMsg, disabled: disabled, placeholder: placeholder, isPlaceholderCollapsed: isPlaceholderCollapsed, label: label, large: large, labelClassName: labelClassName },
        React.createElement("input", __assign({}, rest, { className: classnames([
                classes.input,
                placeholder ? classes.inputWithPlaceholder : null,
                (isPlaceholderCollapsed && !isSimpleLayout) ? classes.inputWithPlaceholderCollapsed : null,
                errorMsg ? classes.inputInvalid : null,
            ]), disabled: disabled, value: value || '', placeholder: isSimpleLayout && placeholder || '' }))));
};
var StyledTextInput = withStyles__default(styles$2)(TextInput);

var styles$6 = (function (theme) { return ({
    root: {
        border: "solid 1px",
        width: '100%',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightSemiBold,
        fontSize: theme.buttonsFontSize,
        letterSpacing: theme.buttonsLetterSpacing,
        userSelect: 'none',
        cursor: 'pointer',
    },
    disabled: {
        cursor: 'auto',
    },
    /** Color variants */
    primary: {
        color: theme.buttonBackgroundColorSecondary,
        backgroundColor: theme.buttonBackgroundColorPrimary,
        '&:hover': {
            filter: theme.buttonBackgroundColorPrimaryHover,
        },
        '&:active': {
            backgroundColor: theme.buttonBackgroundColorPrimaryActive,
        },
        '&.disabled': {
            backgroundColor: theme.buttonBackgroundColorPrimaryDisabled,
            color: 'rgba(255, 255, 255, 0.5)',
            borderColor: theme.buttonBackgroundColorPrimaryDisabled,
            '&:hover': {
                backgroundColor: theme.buttonBackgroundColorPrimaryDisabled,
                filter: 'brightness(100%)',
            },
            '&:active': {
                backgroundColor: theme.buttonBackgroundColorSecondary,
            },
        },
    },
    secondary: {
        color: theme.buttonBackgroundColorPrimary,
        border: "solid 1px " + theme.buttonBackgroundColorPrimary,
        backgroundColor: theme.buttonBackgroundColorSecondary,
        '&:hover': {
            backgroundColor: theme.buttonBackgroundColorPrimary,
            color: theme.buttonBackgroundColorSecondary
        },
        '&:active': {
            backgroundColor: theme.buttonBackgroundColorSecondaryActive,
        },
        '&.disabled': {
            backgroundColor: theme.buttonBackgroundColorSecondaryDisabled,
            color: 'rgba(204, 204, 204, 0.5)',
            borderColor: theme.buttonBackgroundColorPrimaryDisabled,
            '&:hover': {
                backgroundColor: theme.buttonBackgroundColorSecondaryDisabled,
            },
            '&:active': {
                backgroundColor: theme.buttonBackgroundColorSecondary,
            },
        },
    },
    tertiary: {
        display: 'block',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightMedium,
        fontSize: 14,
        border: "0px !important",
        color: theme.buttonBackgroundColorPrimary,
        padding: '20px 32px',
        '&:hover': {
            color: theme.buttonBackgroundColorPrimaryHover,
        },
        '&:active': {
            color: theme.buttonBackgroundColorPrimaryActive,
        },
        '&.disabled': {
            color: theme.buttonColorDisabled,
            '&:hover': {
                textDecoration: 'none',
            },
        },
    },
    /** Sizes */
    large: {
        padding: '23px 44px',
        maxHeight: 70
    },
    normal: {
        padding: '16px 32px',
        maxHeight: 56,
    },
    small: {
        padding: '12px 24px',
        fontWeight: theme.fontWeightRegular,
        fontSize: theme.subtitleFontSize,
        letterSpacing: theme.subtitleLetterSpacing,
        maxHeight: 44,
    },
    mini: {
        padding: '4px 12px',
        fontSize: 10,
        fontWeight: theme.fontWeightRegular,
        borderRadius: 4,
        maxHeight: 24,
        textTransform: 'uppercase',
    },
    round: {
        borderRadius: 4,
    },
    flat: {
        borderRadius: 0,
    },
    circle: {
        borderRadius: 50,
    }
}); });

/** Main component */
var Button = function (props) {
    var classes = props.classes, children = props.children, onClick = props.onClick, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.sizeVariant, sizeVariant = _b === void 0 ? 'normal' : _b, _c = props.variant, variant = _c === void 0 ? 'primary' : _c, _d = props.shape, shape = _d === void 0 ? 'round' : _d, className = props.className, rest = __rest(props, ["classes", "children", "onClick", "disabled", "sizeVariant", "variant", "shape", "className"]);
    var BtnComponent = function (_a) {
        var children = _a.children, rest = __rest(_a, ["children"]);
        return (variant === 'tertiary'
            ? React.createElement("a", __assign({}, rest), children)
            : React.createElement("button", __assign({}, rest), children));
    };
    return (React.createElement(BtnComponent, __assign({}, rest, { disabled: disabled, className: classnames([
            classes.root,
            classes[variant],
            classes[sizeVariant],
            classes[shape],
            disabled && classes.disabled,
            disabled && 'disabled',
            className,
        ]), onClick: onClick }), children));
};
/** Wrappings */
var StyledButton = withStyles__default(styles$6)(Button);
var PropsWrappedStyledButton = function (props) { return React.createElement(StyledButton, __assign({}, props)); };



var index$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledButton,
    Button: PropsWrappedStyledButton
});

/** Main component */
var InputField = function (props) {
    var _a = props.name, name = _a === void 0 ? 'unnamed' : _a, value = props.value, _b = props.type, type = _b === void 0 ? 'text' : _b, placeholder = props.placeholder, disabled = props.disabled, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, _c = props.clearFormValueOnUnmount, clearFormValueOnUnmount = _c === void 0 ? true : _c, prependContent = props.prependContent, appendContent = props.appendContent, controlled = props.controlled, errorMessage = props.errorMessage, rest = __rest(props, ["name", "value", "type", "placeholder", "disabled", "onChange", "onFocus", "onBlur", "clearFormValueOnUnmount", "prependContent", "appendContent", "controlled", "errorMessage"]);
    /** Focus status (needed for styles) */
    var _d = __read(React.useState(false), 2), isFocused = _d[0], setFocused = _d[1];
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _e = React.useContext(FormContext), updateFormValue = _e.updateFormValue, updateFormTouched = _e.updateFormTouched, unsetFormValue = _e.unsetFormValue, formValues = _e.formValues, formErrors = _e.formErrors, formTouched = _e.formTouched;
    /** Getting error message from form errors */
    var errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;
    /** Setting the internal value of the field from form initial values or from value provided to the field */
    var _f = __read(React.useState((name && formValues && formValues[name]) || value), 2), internalValue = _f[0], setInternalValue = _f[1];
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (e) {
        var _a = e.target, name = _a.name, targetValue = _a.value;
        /** Internal value update */
        setInternalValue(function () { return targetValue; });
        /** Passthrough to form context */
        formValues && updateFormValue(name, targetValue);
        /** Independent callback */
        onChange && onChange(e);
    };
    var onFocusWrapper = function (e) {
        /** Internal value update */
        setFocused(true);
        /** Independent callback */
        onFocus && onFocus(e);
    };
    var onBlurWrapper = function (e) {
        var name = e.target.name;
        /** Internal value update */
        setFocused(false);
        /** Passthrough to form context */
        formTouched && updateFormTouched(name, true);
        /** Independent callback */
        onBlur && onBlur(e);
    };
    /** On mount/unmount logic */
    React.useEffect(function () {
        /** On mount */
        /** Update form with internal value on mount */
        formValues && updateFormValue(name, internalValue, true);
        return function () {
            /** On unmount */
            /** Clear Form value if needed */
            clearFormValueOnUnmount && formValues && unsetFormValue(name);
        };
    }, []);
    /** Switch depending on the type of the desired input field */
    switch (type) {
        case 'submit':
        case 'reset':
            return (React.createElement(PropsWrappedStyledButton, { type: type }, value || type));
        case 'text':
        case 'number':
        case 'email':
        case 'password':
            return (React.createElement(StyledTextInput, __assign({}, rest, { isFocused: isFocused, onFocus: onFocusWrapper, onBlur: onBlurWrapper, onChange: onChangeWrapper, disabled: disabled, placeholder: placeholder, type: type, name: name, errorMsg: errorMsg, value: controlled ? value : internalValue, appendContent: appendContent, prependContent: prependContent })));
    }
    return React.createElement("input", __assign({}, props));
};



var index$8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': InputField,
    InputField: InputField
});

var styles$7 = (function (theme) { return ({
    root: {},
    append: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
    },
    icon: {
        width: 20,
        transition: '0.3s',
        fill: theme.inputColorBorderIdle || '#cfe2f2',
        '&:hover': {
            fill: theme.inputColorHighlight || '#007aff',
        },
    }
}); });

/** Main component */
var PasswordField = function (props) {
    var _a = props.showPasswordByDefault, showPasswordByDefault = _a === void 0 ? false : _a, classes = props.classes, type = props.type, rest = __rest(props, ["showPasswordByDefault", "classes", "type"]);
    /** Toggle show password state */
    var _b = __read(React.useState(showPasswordByDefault), 2), showPassword = _b[0], setShowPassword = _b[1];
    /** Toggle show password Icons */
    var appendContent = (React.createElement("div", { className: classes.append, onClick: function () { return setShowPassword(function (currVal) { return !currVal; }); } }, showPassword ? (React.createElement(Eye, { className: classes.icon })) : (React.createElement(EyeDisabled, { className: classes.icon }))));
    return (React.createElement(InputField, __assign({}, rest, { type: showPassword ? 'text' : 'password', appendContent: appendContent })));
};
/** Wrappers */
var StyledPasswordField = withStyles__default(styles$7)(PasswordField);
var PropsWrappedStyledPasswordField = function (props) { return React.createElement(StyledPasswordField, __assign({}, props)); };



var index$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledPasswordField,
    PasswordField: PropsWrappedStyledPasswordField
});

var styles$8 = (function (theme) { return ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    /** Root Wrapper */
    root: {
        transition: '0.3s',
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
        color: theme.textColorPrimary,
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        display: 'flex',
        alignItems: 'center',
        /** Checkmark */
        '&:hover $input ~ $checkmark': {
            backgroundColor: theme.inputBackgroundColorHover,
        },
        '&:active $input ~ $checkmark': {
            backgroundColor: theme.inputBackgroundColorActive,
        },
        '&:hover $input:checked ~ $checkmark': {
            backgroundColor: theme.inputColorHighlightHover,
        },
        '&:active $input:checked ~ $checkmark': {
            backgroundColor: theme.inputColorHighlightActive,
        },
        /** Switch */
        '&:hover $input ~ $switch': {
            backgroundColor: theme.inputColorBorderIdleHover,
        },
        '&:active $input ~ $switch': {
            backgroundColor: theme.inputColorBorderIdleActive,
        },
        '&:hover $input:checked ~ $switch': {
            backgroundColor: theme.inputColorHighlightHover,
        },
        '&:active $input:checked ~ $switch': {
            backgroundColor: theme.inputColorHighlightActive,
        },
    },
    /** Input */
    input: {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        backgroundColor: theme.inputBackgroundColor,
        /** Placeholder */
        '&:checked ~ $placeholder': {
            color: theme.inputColorHighlight,
        },
        '&:disabled ~ $placeholder': {
            color: theme.inputPlaceholderColorIdle,
        },
        /** Checkmark */
        '&:checked ~ $checkmark': {
            backgroundColor: theme.inputColorHighlight,
        },
        '&:checked ~ $checkmark:after': {
            display: 'block',
        },
        '&:disabled ~ $checkmark': {
            backgroundColor: theme.inputColorBorderIdle + " !important",
        },
        /** Switch */
        '&:checked ~ $switch': {
            backgroundColor: theme.inputColorHighlight,
        },
        '&:checked ~ $switch:after': {
            left: 19,
        },
        '&:disabled ~ $switch': {
            backgroundColor: theme.inputColorBorderIdle + " !important",
        },
    },
    /** Checkmark box */
    checkmark: {
        position: 'relative',
        top: 0,
        left: 0,
        height: 24,
        width: 24,
        minWidth: 16,
        backgroundColor: theme.inputBackgroundColor,
        borderRadius: 3,
        border: "1px solid " + theme.inputColorBorderIdle,
        /** Checkmark */
        '&:after': {
            content: '""',
            position: 'absolute',
            display: 'none',
            left: 7.5,
            top: 2,
            width: 6,
            height: 14,
            border: 'solid white',
            borderWidth: '0 2px 2px 0',
            transform: 'rotate(45deg)',
        },
    },
    /** Switch container */
    switch: {
        overflow: 'hidden',
        position: 'relative',
        top: 0,
        left: 0,
        height: 24,
        width: 44,
        backgroundColor: theme.inputColorBorderIdle,
        borderRadius: 12,
        border: "1px solid " + theme.inputColorBorderIdle,
        /** Switch */
        '&:after': {
            transition: '0.3s',
            content: '""',
            position: 'absolute',
            display: 'block',
            top: 1,
            left: 2,
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: theme.inputBackgroundColor,
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.32)',
        },
    },
    /** Placeholder */
    placeholder: {
        padding: '8px 4px',
    },
    placeholderInvalid: {
        color: theme.inputColorError,
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    },
    /** Handle size */
    small: {
        fontSize: 14,
        '& $checkmark': {
            height: 16,
            width: 16,
            '&:after': {
                left: 4.4,
                top: 2,
                width: 5,
                height: 8,
            },
        },
        '& $switch': {
            height: 16,
            width: 26,
            borderRadius: 8,
            '&:after': {
                top: 1,
                left: 2,
                width: 12,
                height: 12,
            }
        },
        '& $input': {
            '&:checked ~ $switch:after': {
                left: 10,
            }
        }
    },
    normal: {
        fontSize: 14,
    },
    large: {
        fontSize: 16,
        '& $checkmark': {
            height: 30,
            width: 30,
            '&:after': {
                left: 9,
                top: 4,
                width: 8,
                height: 16,
            },
        },
        '& $switch': {
            height: 32,
            width: 60,
            borderRadius: 16,
            '&:after': {
                top: 2,
                left: 2,
                width: 26,
                height: 26,
            }
        },
        '& $input': {
            '&:checked ~ $switch:after': {
                left: 29,
            }
        }
    }
}); });

var CheckboxField = function (props) {
    /** Get props */
    var classes = props.classes, className = props.className, value = props.value, controlled = props.controlled, name = props.name, checked = props.checked, placeholder = props.placeholder, errorMessage = props.errorMessage, onChange = props.onChange, onFocus = props.onFocus, variant = props.variant, _a = props.sizeVariant, sizeVariant = _a === void 0 ? 'normal' : _a, rest = __rest(props, ["classes", "className", "value", "controlled", "name", "checked", "placeholder", "errorMessage", "onChange", "onFocus", "variant", "sizeVariant"]);
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _b = React.useContext(FormContext), updateFormValue = _b.updateFormValue, formValues = _b.formValues, formErrors = _b.formErrors, updateFormTouched = _b.updateFormTouched, formTouched = _b.formTouched;
    /** Setting the internal value of the field from form initial values or from value provided to the field */
    var _c = __read(React.useState((formValues && formValues[name]) || checked), 2), internalValue = _c[0], setInternalValue = _c[1];
    /** Getting error message from form errors */
    var errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;
    /** Get checked value when using within a form or solo */
    // const checkedValue = formValues ? formValues[name] : undefined;
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (e) {
        var _a = e.target, name = _a.name, checked = _a.checked;
        /** Set intenal value */
        setInternalValue(checked);
        /** Passthrough to form context */
        formValues && updateFormValue(name, checked);
        /** Independent callback */
        onChange && onChange(e);
    };
    var onFocusWrapper = function (e) {
        var name = e.target.name;
        /** Passthrough to form context */
        formTouched && updateFormTouched(name, true);
        /** Independent callback */
        onFocus && onFocus(e);
    };
    /** On mount/unmount logic */
    React.useEffect(function () {
        /** On mount */
        /** Update form with internal value on mount */
        if (formValues) {
            updateFormValue(name, !!checked, true);
        }
        return function () {
            /** On unmount */
            /** Clear Form value if needed */
            formValues && updateFormValue(name, undefined, true);
        };
    }, []);
    return (React.createElement("div", { className: classnames([classes.wrapper, classes[sizeVariant], className]) },
        React.createElement("label", { className: classes.root },
            React.createElement("input", __assign({}, rest, { type: "checkbox", className: classes.input, name: name, value: value, checked: controlled ? checked : internalValue, onChange: onChangeWrapper, onFocus: onFocusWrapper })),
            React.createElement("span", { className: variant === 'switch' ? classes.switch : classes.checkmark }),
            React.createElement("div", { className: classnames([
                    classes.placeholder,
                    errorMsg ? classes.placeholderInvalid : null,
                ]) }, placeholder)),
        errorMsg ?
            (React.createElement("div", { className: classes.errorMessage }, errorMsg)) : null));
};
/** Wrappings */
var StyledCheckboxField = withStyles__default(styles$8)(CheckboxField);
var PropsWrappedStyledCheckboxField = function (props) { return React.createElement(StyledCheckboxField, __assign({}, props)); };



var index$a = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledCheckboxField,
    CheckboxField: PropsWrappedStyledCheckboxField
});

var styles$9 = (function (theme) { return ({
    root: {
        position: 'relative',
    },
    rootOpen: {
        zIndex: 99,
    },
    /** Dropdown arrow */
    dropdownArrow: {
        transition: '0.3s',
        fill: theme.inputPlaceholderColorIdle,
        width: 25,
        height: 25,
        marginRight: 10,
    },
    dropdownArrowOpen: {
        transform: 'rotate(180deg)',
    },
    dropdownArrowFocused: {
        fill: theme.inputColorHighlight,
    },
    /** Selected values Wrapper */
    selectElement: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 0,
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    selectLabel: {
        cursor: 'pointer',
        userSelect: 'none',
        width: '100%',
        height: '100%',
        border: 0,
        padding: 14,
        backgroundColor: theme.inputBackgroundColor,
        transition: '0.5s',
        color: theme.inputColorIdle || '#54738c',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightMedium,
        fontSize: 14,
        '&:focus': {
            color: theme.inputColorHighlight || '#007aff',
            outline: 'none',
        },
        // ':before': { content: '\00a0' },
        '&:after': {
            content: '"."',
            visibility: 'hidden',
        },
    },
    selectLabelWithPlaceholder: {
        paddingBottom: 5,
        paddingTop: 18,
    },
    selectLabelInvalid: {
        '&:focus': {
            color: (theme.inputColorError || '#d0021b') + " !important",
        },
    },
    /** Dropdown */
    dropdownWrapper: {
        position: 'absolute',
        top: 'calc(100% + 4px)',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
        border: "solid 1px #cfd8dc",
        backgroundColor: theme.inputBackgroundColor,
    },
    dropdownItem: {
        padding: '8px 18px',
        userSelect: 'none',
        cursor: 'pointer',
        color: theme.textColorSecondary,
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        fontSize: 14,
    },
    dropdownItemHover: {
        backgroundColor: '#eceff1',
    },
    dropdownItemSelected: {
        backgroundColor: theme.inputColorSelected,
    },
    /** Clickaway */
    clickaway: {
        zIndex: 98,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    },
}); });

/** Main component */
var SelectField = function (props) {
    var name = props.name, classes = props.classes, className = props.className, errorMessage = props.errorMessage, disabled = props.disabled, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, value = props.value, placeholder = props.placeholder, choices = props.choices, clearFormValueOnUnmount = props.clearFormValueOnUnmount;
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _a = React.useContext(FormContext), updateFormValue = _a.updateFormValue, updateFormTouched = _a.updateFormTouched, unsetFormValue = _a.unsetFormValue, formValues = _a.formValues, formErrors = _a.formErrors, formTouched = _a.formTouched;
    /** Getting error message from form errors */
    var errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;
    /** Focus status (needed for styles) */
    var _b = __read(React.useState(false), 2), isFocused = _b[0], setFocused = _b[1];
    /** Setting the internal value of the field from form initial values or from value provided to the field */
    var _c = __read(React.useState((formValues && formValues[name]) || value), 2), internalValue = _c[0], setInternalValue = _c[1];
    var _d = __read(React.useState(-1), 2), hoverIndex = _d[0], setHoverIndex = _d[1];
    /** Selected choice */
    var selectChoiceIndex = choices.findIndex(function (d) { return d.value === internalValue; });
    var selectedChoice = selectChoiceIndex > -1 ? choices[selectChoiceIndex] : null;
    /** Select Field State */
    var _e = __read(React.useState(false), 2), isDropdownOpen = _e[0], setDropdownOpen = _e[1];
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (value) {
        /** Internal value update */
        setInternalValue(function () { return value; });
        setDropdownOpen(function () { return false; });
        /** Passthrough to form context */
        formValues && updateFormValue(name, value);
        /** Independent callback */
        onChange && onChange(value);
    };
    var onFocusWrapper = function (e) {
        setFocused(true);
        /** Independent callback */
        onFocus && onFocus(e);
    };
    var onBlurWrapper = function (e) {
        var name = e.target.name;
        setFocused(false);
        /** Passthrough to form context */
        formTouched && updateFormTouched(name, true);
        /** Independent callback */
        onBlur && onBlur(e);
    };
    var onKeyDownWrapper = function (e) {
        /** Hitting Enter or Space */
        if (e.keyCode === 32 || e.keyCode === 13) {
            if (isDropdownOpen) {
                if (hoverIndex > -1) {
                    onChangeWrapper(choices[hoverIndex].value);
                }
                setHoverIndex(-1);
            }
            else {
                setHoverIndex(selectChoiceIndex);
                setDropdownOpen(true);
            }
        }
        /** Key up */
        if (e.keyCode === 38) {
            setHoverIndex(function (v) { return v > 0 ? v - 1 : v; });
        }
        /** Key down */
        if (e.keyCode === 40) {
            setHoverIndex(function (v) { return v < choices.length - 1 ? v + 1 : v; });
        }
    };
    /** Append content arrow */
    var appendContent = (React.createElement(DownArrow, { className: classnames([
            classes.dropdownArrow,
            isDropdownOpen ? classes.dropdownArrowOpen : null,
            isFocused ? classes.dropdownArrowFocused : null,
        ]) }));
    /** Mount / unmount logic */
    React.useEffect(function () {
        /** Running first validation on mount */
        if (updateFormValue)
            updateFormValue(name, internalValue);
        return function () {
            if (unsetFormValue && clearFormValueOnUnmount)
                unsetFormValue(name);
        };
    }, []);
    return (React.createElement(React.Fragment, null,
        isDropdownOpen
            ? (React.createElement("div", { className: classes.clickaway, onClick: function () { return setDropdownOpen(function () { return false; }); } })) : null,
        React.createElement("div", { className: classnames([
                className,
                classes.root,
                isDropdownOpen ? classes.rootOpen : null,
            ]) },
            React.createElement(PropsWrappedStyledInputFieldLayout, { isPlaceholderCollapsed: !!selectedChoice, errorMsg: errorMsg, disabled: disabled, placeholder: placeholder, appendContent: appendContent, onClick: function () { return setDropdownOpen(function (v) { return !v; }); } },
                React.createElement("div", { tabIndex: 0, onBlur: onBlurWrapper, onFocus: onFocusWrapper, onKeyDown: onKeyDownWrapper, className: classnames([
                        classes.selectLabel,
                        placeholder ? classes.selectLabelWithPlaceholder : null,
                        errorMsg ? classes.selectLabelInvalid : null,
                    ]) }, selectedChoice ? selectedChoice.label : null)),
            isDropdownOpen
                ? (React.createElement("div", { className: classes.dropdownWrapper }, choices
                    .map(function (_a, i) {
                    var label = _a.label, value = _a.value;
                    return (React.createElement("div", { className: classnames([
                            classes.dropdownItem,
                            hoverIndex === i ? classes.dropdownItemHover : null,
                        ]), onMouseOver: function () { return setHoverIndex(function () { return i; }); }, onClick: function () { return onChangeWrapper(value); }, key: i }, label));
                }))) : null)));
};
/** Wrappers */
var StyledSelectField = withStyles__default(styles$9)(SelectField);
var PropsWrappedStyledSelectField = function (props) { return React.createElement(StyledSelectField, __assign({}, props)); };



var index$b = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledSelectField,
    SelectField: PropsWrappedStyledSelectField
});

var styles$a = (function (theme) { return ({
    root: {
        position: 'relative',
    },
    rootOpen: {
        zIndex: 99,
    },
    /** Dropdown arrow */
    dropdownArrow: {
        transition: '0.3s',
        fill: theme.inputPlaceholderColorIdle,
        width: 25,
        height: 25,
    },
    dropdownArrowNormal: {
        marginRight: 10,
    },
    dropdownArrowOpen: {
        transform: 'rotate(180deg)',
    },
    dropdownArrowFocused: {
        fill: theme.inputColorHighlight,
    },
    /** Selected values Wrapper */
    selectElement: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 0,
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    selectLabel: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        cursor: 'pointer',
        userSelect: 'none',
        width: '100%',
        height: '100%',
        border: 0,
        transition: '0.5s',
        '&:focus': {
            color: theme.inputColorHighlight || '#007aff',
            outline: 'none',
        },
        '&:after': {
            content: '"."',
            visibility: 'hidden',
        },
    },
    selectLabelNormal: {
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightMedium,
        color: theme.inputColorIdle || '#54738c',
        padding: 8,
        minHeight: 44,
        backgroundColor: theme.inputBackgroundColor,
        fontSize: 14,
    },
    selectLabelWithPlaceholder: {
        paddingBottom: 5,
        paddingTop: 23,
    },
    selectLabelMini: {
        padding: 0,
        height: 26,
    },
    selectLabelInvalid: {
        '&:focus': {
            color: (theme.inputColorError || '#d0021b') + " !important",
        },
    },
    /** Dropdown */
    dropdownWrapper: {
        position: 'absolute',
        top: 'calc(100% + 4px)',
        width: '100%',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
        border: "solid 1px #cfd8dc",
        backgroundColor: theme.inputBackgroundColor,
        overflowY: 'auto',
    },
    dropdownWrapperNormal: {
        paddingTop: 10,
        paddingBottom: 10,
        maxHeight: 217,
    },
    dropdownWrapperMini: {
        maxHeight: 160,
    },
    dropdownSearchItemsWrapper: {
        overflowY: 'auto',
    },
    dropdownSearchItemsWrapperNormal: {
        maxHeight: 205,
    },
    dropdownSearchItemsWrapperMini: {
        maxHeight: 157,
    },
    dropdownItem: {
        paddingLeft: 18,
        paddingRight: 18,
        userSelect: 'none',
        cursor: 'pointer',
        color: theme.textColorSecondary,
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        fontSize: 14,
        '&:hover': {
            backgroundColor: '#eceff1',
        },
    },
    dropdownItemMini: {
        paddingLeft: 12,
        paddingRight: 12,
        '& div': {
            padding: 6,
        },
        '& label': {
            fontFamily: 'inherit',
            fontWeight: 'normal',
        }
    },
    /** Clickaway */
    clickaway: {
        zIndex: 98,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    }
}); });

var styles$b = (function (theme) { return ({
    wrapper: {
        borderRadius: 8,
        backgroundColor: theme.inputColorHighlight,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        marginRight: 6,
        height: 28,
    },
    content: {
        color: theme.textColorHighlight,
        flex: 1,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 9,
        whiteSpace: 'nowrap',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        fontSize: 12,
    },
    closeSection: {
        pointerEvents: 'auto',
        color: theme.textColorLight,
        height: '100%',
        width: 22,
        backgroundColor: theme.inputColorSpecial,
        borderRadius: '0px 8px 8px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: theme.inputColorSpecialHover,
        },
        '&:active': {
            backgroundColor: theme.inputColorSpecialActive,
        },
    },
    closeIcon: {
        width: 12,
        fill: '#fff',
    },
}); });

var ValueBadge = function (props) {
    var classes = props.classes, onClose = props.onClose, children = props.children;
    return (React.createElement("div", { className: classes.wrapper },
        React.createElement("div", { className: classes.content }, children),
        React.createElement("div", { className: classes.closeSection, onClick: onClose },
            React.createElement(Close, { className: classes.closeIcon }))));
};
var StyledValueBadge = withStyles__default(styles$b)(ValueBadge);



var index$c = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': StyledValueBadge,
    ValueBadge: StyledValueBadge
});

var styles$c = (function (theme) { return ({
    root: {
        position: 'relative',
    },
    rootOpen: {
        zIndex: 99,
    },
    /** Search icon */
    searchIcon: {
        fill: theme.inputPlaceholderColorIdle || '#95acbf',
    },
    searchIconSmall: {
        width: 15,
    },
    /** Clear icon */
    clearIcon: {
        marginRight: 10,
        width: 18,
        fill: theme.inputColorBorderIdle || '#95acbf',
    },
    /** Selected values Wrapper */
    selectElement: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 0,
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    inputField: {
        cursor: 'pointer',
        userSelect: 'none',
        width: '100%',
        height: '100%',
        border: 0,
        backgroundColor: theme.inputBackgroundColor,
        transition: '0.5s',
        color: theme.inputColorIdle || '#54738c',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightMedium,
        fontSize: 14,
        '&:focus': {
            color: theme.inputColorHighlight || '#007aff',
            outline: 'none',
        },
        // ':before': { content: '\00a0' },
        '&:after': {
            content: '"."',
            visibility: 'hidden',
        },
        '&::placeholder': {
            color: theme.inputPlaceholderColorIdle || '#95acbf',
        }
    },
    inputFieldNormal: {
        padding: 14,
    },
    inputFieldMini: {
        padding: 0,
    },
    inputFieldWithPlaceholder: {
        paddingBottom: 5,
        paddingTop: 23,
    },
    inputFieldInvalid: {
        '&:focus': {
            color: (theme.inputColorError || '#d0021b') + " !important",
        },
    },
    /** Dropdown */
    dropdownWrapper: {
        position: 'absolute',
        top: 'calc(100% + 4px)',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
        border: "solid 1px #cfd8dc",
        backgroundColor: theme.inputBackgroundColor,
    },
    dropdownItem: {
        padding: '8px 18px',
        userSelect: 'none',
        cursor: 'pointer',
        color: theme.textColorSecondary,
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        fontSize: 14,
    },
    dropdownItemHover: {
        backgroundColor: '#eceff1',
    },
    dropdownItemSelected: {
        backgroundColor: theme.inputColorSelected,
    },
    /** Clickaway */
    clickaway: {
        zIndex: 98,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    },
}); });

/** Main component */
var SearchField = function (props) {
    var _a;
    var className = props.className, classes = props.classes, disabled = props.disabled, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onEnter = props.onEnter, value = props.value, _b = props.placeholder, placeholder = _b === void 0 ? 'Search' : _b, _c = props.collapsiblePlaceholder, collapsiblePlaceholder = _c === void 0 ? true : _c, _d = props.sizeVariant, sizeVariant = _d === void 0 ? 'normal' : _d;
    /** Focus status (needed for styles) */
    var _e = __read(React.useState(false), 2), isFocused = _e[0], setFocused = _e[1];
    /** Setting the internal value of the field from form initial values or from value provided to the field */
    var _f = __read(React.useState(value || ''), 2), inputValue = _f[0], setInputValue = _f[1];
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (e) {
        var value = e.target.value;
        /** Internal value update */
        setInputValue(function () { return value; });
        // setDropdownOpen(() => false);
        /** Independent callback */
        onChange && onChange(value);
    };
    var onFocusWrapper = function (e) {
        setFocused(true);
        /** Independent callback */
        onFocus && onFocus(e);
    };
    var onBlurWrapper = function (e) {
        // const { name } = e.target;
        setFocused(false);
        // /** Passthrough to form context */
        // formTouched && updateFormTouched(name, true);
        /** Independent callback */
        onBlur && onBlur(e);
    };
    var onClearClickWrapper = function (e) {
        e.stopPropagation();
        setInputValue(function () { return ''; });
        onChange && onChange('');
    };
    var onKeyPressWrapper = function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            onEnter && onEnter(inputValue);
        }
    };
    /** Prepend magnifying lens */
    var prependContent = (React.createElement(Search, { className: classnames(classes.searchIcon, (_a = {}, _a[classes.searchIconSmall] = sizeVariant === 'small', _a)) }));
    /** Append content arrow */
    var appendContent = inputValue !== '' ?
        (React.createElement(CloseOutline, { onClick: onClearClickWrapper, className: classnames([
                classes.clearIcon,
            ]) })) : null;
    return (React.createElement(PropsWrappedStyledInputFieldLayout, { className: className, isPlaceholderCollapsed: isFocused || inputValue !== '', disabled: disabled, placeholder: collapsiblePlaceholder ? placeholder : undefined, prependContent: prependContent, appendContent: appendContent, showPrependBackground: false, sizeVariant: sizeVariant },
        React.createElement("input", { type: "text", onChange: onChangeWrapper, onBlur: onBlurWrapper, onFocus: onFocusWrapper, onKeyPress: onKeyPressWrapper, value: inputValue, placeholder: collapsiblePlaceholder ? undefined : placeholder, className: classnames([
                classes.inputField,
                sizeVariant === 'normal' ? classes.inputFieldNormal : classes.inputFieldMini,
                (placeholder && collapsiblePlaceholder) ? classes.inputFieldWithPlaceholder : null,
            ]) })));
};
/** Wrappers */
var StyledSearchField = withStyles__default(styles$c)(SearchField);
var PropsWrappedStyledSearchField = function (props) { return React.createElement(StyledSearchField, __assign({}, props)); };



var index$d = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledSearchField,
    SearchField: PropsWrappedStyledSearchField
});

/** Main component */
var MultiSelectField = function (props) {
    var name = props.name, classes = props.classes, errorMessage = props.errorMessage, disabled = props.disabled, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, values = props.values, placeholder = props.placeholder, choices = props.choices, clearFormValueOnUnmount = props.clearFormValueOnUnmount, appendContent = props.appendContent, refApi = props.refApi, search = props.search, customPlaceholderFont = props.customPlaceholderFont, placeholderClassName = props.placeholderClassName, _a = props.showBadgeChoices, showBadgeChoices = _a === void 0 ? true : _a, _b = props.sizeVariant, sizeVariant = _b === void 0 ? 'normal' : _b;
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _c = React.useContext(FormContext), updateFormValue = _c.updateFormValue, updateFormTouched = _c.updateFormTouched, formValues = _c.formValues, formErrors = _c.formErrors, formTouched = _c.formTouched, unsetFormValue = _c.unsetFormValue;
    /** Getting error message from form errors */
    var errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;
    /** Focus status (needed for styles) */
    var _d = __read(React.useState(false), 2), isFocused = _d[0], setFocused = _d[1];
    /** Setting the internal value of the field from form initial values or from value provided to the field */
    var _e = __read(React.useState(formValues ? formValues[name] : (values || [])), 2), internalValues = _e[0], setInternalValues = _e[1];
    /** Selected choice */
    var selectedChoices = choices.filter(function (d) { return (internalValues || []).indexOf(d.value.toString()) > -1; });
    /** Select Field State */
    var _f = __read(React.useState(false), 2), isDropdownOpen = _f[0], setDropdownOpen = _f[1];
    /** Search Value State */
    var _g = __read(React.useState(''), 2), searchValue = _g[0], setSearchValue = _g[1];
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (values) {
        /** Passthrough to form context */
        formValues && updateFormValue(name, values);
        /** Independent callback */
        onChange && onChange(values);
    };
    var onFocusWrapper = function (e) {
        setFocused(true);
        /** Independent callback */
        onFocus && onFocus(e);
    };
    var onBlurWrapper = function (e) {
        var name = e.target.name;
        setFocused(false);
        /** Passthrough to form context */
        formTouched && updateFormTouched(name, true);
        /** Independent callback */
        onBlur && onBlur(e);
    };
    /** Helper function */
    var clickAwayOnClick = function (e) {
        e.stopPropagation();
        setDropdownOpen(function () { return false; });
    };
    var removeSelectionLabel = function (value) {
        setDropdownOpen(function () { return false; });
        setInternalValues(function (oiv) {
            var newValues = (oiv || []).filter(function (d) { return d !== value.toString(); });
            onChangeWrapper(newValues);
            return newValues;
        });
    };
    var selectedBadgeOnClose = function (value) {
        return function (e) {
            e.stopPropagation();
            removeSelectionLabel(value);
        };
    };
    var inputLabelOnClick = function (e) {
        e.stopPropagation();
        setDropdownOpen(function (v) { return !v; });
    };
    var checkboxOnChangeWrapper = function (e) {
        var _a = e.target, name = _a.name, checked = _a.checked;
        setInternalValues(function (oiv) {
            var newValues = [];
            if (checked) {
                newValues = (oiv || []).filter(function (d) { return d !== name; }).concat([name]);
            }
            else {
                newValues = (oiv || []).filter(function (d) { return d !== name; });
            }
            onChangeWrapper(newValues);
            return newValues;
        });
    };
    /** Append content and down arrow */
    var appendContentWithArrow = (React.createElement(React.Fragment, null,
        appendContent ? appendContent : null,
        React.createElement(DownArrow, { className: classnames([
                classes.dropdownArrow,
                sizeVariant === 'normal' ? classes.dropdownArrowNormal : null,
                isDropdownOpen ? classes.dropdownArrowOpen : null,
                isFocused ? classes.dropdownArrowFocused : null,
            ]) })));
    var isChoiceSelected = function (option) { return !!selectedChoices.find(function (d) { return d.value === option.value; }); };
    var getChoices = function (choices) {
        return (choices.map(function (choice, i) {
            return (React.createElement(PropsWrappedStyledCheckboxField, { className: classnames([
                    classes.dropdownItem,
                    sizeVariant === 'mini' ? classes.dropdownItemMini : null,
                ]), key: search ? choice.value : i, placeholder: choice.label, name: choice.value, checked: isChoiceSelected(choice), onChange: checkboxOnChangeWrapper }));
        }));
    };
    var getSearchChoices = function (choices, value) {
        var matchedChoices = choices.filter(function (choice) { return choice.label.toUpperCase().indexOf(value.toUpperCase()) === 0; });
        var pickedChoices = matchedChoices.filter(function (choice) { return isChoiceSelected(choice); });
        var unpickedChoices = matchedChoices.filter(function (choice) { return !isChoiceSelected(choice); });
        return getChoices(__spread(pickedChoices, unpickedChoices));
    };
    var getBadgeChoices = function () {
        return selectedChoices.map(function (_a) {
            var label = _a.label, value = _a.value;
            return (React.createElement(StyledValueBadge, { key: value, onClose: selectedBadgeOnClose(value) }, label));
        });
    };
    React.useImperativeHandle(refApi, function () { return ({
        clear: function () {
            setInternalValues([]);
            search && setSearchValue('');
        }
    }); });
    /** Mount / unmount logic */
    React.useEffect(function () {
        /** Running first validation on mount */
        if (updateFormValue)
            updateFormValue(name, internalValues);
        return function () {
            if (unsetFormValue && clearFormValueOnUnmount)
                unsetFormValue(name);
        };
    }, []);
    return (React.createElement(React.Fragment, null,
        isDropdownOpen
            ? (React.createElement("div", { className: classes.clickaway, onClick: clickAwayOnClick })) : null,
        React.createElement("div", { ref: refApi, className: classnames([
                classes.root,
                isDropdownOpen ? classes.rootOpen : null,
            ]) },
            React.createElement(PropsWrappedStyledInputFieldLayout, { isPlaceholderCollapsed: showBadgeChoices ? selectedChoices.length > 0 : false, errorMsg: errorMsg, disabled: disabled, placeholder: placeholder, appendContent: appendContentWithArrow, sizeVariant: sizeVariant, showPrependBackground: sizeVariant !== 'mini', customPlaceholderFont: customPlaceholderFont, placeholderClassName: placeholderClassName, onClick: inputLabelOnClick },
                React.createElement("div", { tabIndex: 0, onBlur: onBlurWrapper, onFocus: onFocusWrapper, className: classnames([
                        classes.selectLabel,
                        placeholder ? classes.selectLabelWithPlaceholder : null,
                        sizeVariant === 'mini' ? classes.selectLabelMini : classes.selectLabelNormal,
                        errorMsg ? classes.selectLabelInvalid : null,
                    ]) }, showBadgeChoices ? getBadgeChoices() : null)),
            isDropdownOpen
                ? (React.createElement(FormContext.Provider, { value: defaultFormContextValues },
                    React.createElement("div", { className: classnames([
                            classes.dropdownWrapper,
                            !search && (sizeVariant === 'mini'
                                ? classes.dropdownWrapperMini
                                : classes.dropdownWrapperNormal),
                        ]) }, search ? (React.createElement(React.Fragment, null,
                        React.createElement(PropsWrappedStyledSearchField, { value: searchValue, collapsiblePlaceholder: false, onChange: function (value) { setSearchValue(value); }, sizeVariant: sizeVariant }),
                        React.createElement("div", { className: classnames(classes.dropdownSearchItemsWrapper, [
                                sizeVariant === 'mini'
                                    ? classes.dropdownSearchItemsWrapperMini
                                    : classes.dropdownSearchItemsWrapperNormal,
                            ]) }, getSearchChoices(choices, searchValue)))) : getChoices(choices)))) : null)));
};
/** Wrappers */
var StyledMultiSelectField = withStyles__default(styles$a)(MultiSelectField);
var PropsWrappedStyledMultiSelectField = React.forwardRef(function (props, ref) {
    return React.createElement(StyledMultiSelectField, __assign({}, props, { refApi: ref }));
});



var index$e = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledMultiSelectField,
    MultiSelectField: PropsWrappedStyledMultiSelectField
});

var styles$d = (function (theme) { return ({
    input: {
        display: 'none',
    },
    inputFieldWrapper: {
        width: '100%',
        padding: '23px 0',
        cursor: 'pointer',
        '&:focus': {
            outline: 'none',
        },
    },
    inputWithPlaceholder: {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '0 14px',
        border: '0',
        backgroundColor: 'rgba(0,0,0,0)',
        transition: '0.5s',
        color: theme.inputColorIdle,
        fontFamily: theme.fontFamily,
        fontSize: 14,
        fontWeight: theme.fontWeightMedium,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    selectedFiles: {
        margin: 0,
        padding: '0 21px',
        color: theme.inputPlaceholderColorIdle || '#95acbf',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    },
}); });

var styles$e = (function (theme) { return ({
    selectedFile: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        padding: '8px 2px 8px 0',
        borderBottom: "1px solid " + theme.inputColorBorderIdle
    },
    file: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflow: 'hidden',
    },
    fileName: {
        marginLeft: 8,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: '10px',
        letterSpacing: '0.25px',
        color: theme.inputColorIdle,
    },
    fileLogo: {
        fill: theme.inputColorIdle,
        width: 14,
    },
    closeLogo: {
        fill: theme.textColorHighlight,
        width: 10,
    },
    closeButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 18,
        height: 18,
        marginLeft: 8,
        backgroundColor: theme.inputColorBorderIdle,
        borderRadius: '100%',
        cursor: 'pointer',
    },
}); });

var SelectedFile = function (_a) {
    var classes = _a.classes, fileName = _a.fileName, removeFile = _a.removeFile;
    return (React.createElement("li", { className: classes.selectedFile },
        React.createElement("span", { className: classes.file },
            React.createElement(File, { className: classes.fileLogo, viewBox: "0 0 14 18" }),
            React.createElement("span", { className: classes.fileName }, fileName)),
        React.createElement("span", { className: classes.closeButton, onClick: function () { return removeFile(fileName); } },
            React.createElement(Close, { className: classes.closeLogo }))));
};
/** Wrappers */
var StyledSelectedFile = withStyles__default(styles$e)(SelectedFile);

var styles$f = (function (theme) { return ({
    uploadButton: {
        marginRight: 12,
        padding: '0 24px',
        borderRadius: 4.4,
        fontSize: 10,
        fontWeight: 500,
        lineHeight: '23px',
        cursor: 'pointer',
        '&.fileNotSelected': {
            color: '#007aff',
            border: 'solid 1px #007aff',
            backgroundColor: '#fff',
            '&.error': {
                borderColor: theme.inputColorError || '#d0021b',
                color: theme.inputColorError || '#d0021b',
            },
        },
        '&.disabled': {
            borderColor: theme.inputColorBorderIdle,
            color: theme.inputColorBorderIdle,
        },
        '&.fileSelected': {
            color: '#fff',
            border: 'solid 1px #007aff',
            backgroundColor: '#007aff',
            '&.error': {
                borderColor: theme.inputColorError || '#d0021b',
                backgroundColor: theme.inputColorError || '#d0021b',
            },
        },
    },
}); });

/** Component */
var UploadButton = function (props) {
    var classes = props.classes, files = props.files, errorMsg = props.errorMsg, onClick = props.onClick, _a = props.disabled, disabled = _a === void 0 ? false : _a;
    var noFilesSelected = !files || (!files.name && !files.length);
    return (React.createElement("button", { onClick: onClick, disabled: disabled, className: classnames([
            classes.uploadButton,
            errorMsg ? 'error' : '',
            noFilesSelected ? 'fileNotSelected' : 'fileSelected',
            disabled ? 'disabled' : null,
        ]) }, noFilesSelected ? 'Upload' : 'Change'));
};
/** Wrappers */
var StyledUploadButton = withStyles__default(styles$f)(UploadButton);

/** Main component */
var FileField = function (props) {
    var name = props.name, accept = props.accept, classes = props.classes, errorMessage = props.errorMessage, inputText = props.inputText, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.multiple, multiple = _b === void 0 ? false : _b, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, placeholder = props.placeholder, value = props.value, _c = props.clearFormValueOnUnmount, clearFormValueOnUnmount = _c === void 0 ? true : _c, prependContent = props.prependContent, appendContent = props.appendContent;
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _d = React.useContext(FormContext), updateFormValue = _d.updateFormValue, updateFormTouched = _d.updateFormTouched, unsetFormValue = _d.unsetFormValue, formValues = _d.formValues, formErrors = _d.formErrors, formTouched = _d.formTouched;
    /** Create input ref and an event to click it */
    var inputRef = React.useRef(null);
    var clickFileInput = function () {
        (inputRef && inputRef.current) && inputRef.current.click();
    };
    /** Focus status (needed for styles) */
    var _e = __read(React.useState(false), 2), isFocused = _e[0], setFocused = _e[1];
    /** Setting the internal value of the field from form initial values or from value provided to the field */
    var _f = __read(React.useState((name && formValues && formValues[name]) || value), 2), internalValue = _f[0], setInternalValue = _f[1];
    /** Getting error message from form errors */
    var errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;
    /** Getting files names */
    var getFileNames = function (files) {
        if (files && files.name) {
            return [files.name];
        }
        return (files && files.length)
            ? Object.values(files).map(function (file) { return file.name; })
            : [];
    };
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (e) {
        if (disabled)
            return;
        var _a = e.target, name = _a.name, targetFiles = _a.files;
        /** Getting array of multiple files */
        var multipleFiles = Array.from(targetFiles);
        /** Getting files to be added to formData */
        var files = multiple ? multipleFiles : targetFiles[0];
        /** Internal value update */
        setInternalValue(files);
        /** Passthrough to form context */
        formValues && updateFormValue(name, files);
        /** Independent callback */
        onChange && onChange(files);
    };
    var onFocusWrapper = function (e) {
        if (disabled)
            return;
        /** Internal value update */
        setFocused(true);
        /** Independent callback */
        onFocus && onFocus(e);
    };
    var onBlurWrapper = function (e) {
        if (disabled)
            return;
        var name = e.target.name;
        /** Internal value update */
        setFocused(false);
        /** Passthrough to form context */
        formTouched && updateFormTouched(name, true);
        /** Independent callback */
        onBlur && onBlur(e);
    };
    /** Remove file from internalValue */
    var removeFile = function (fileName) {
        var files = multiple ? (internalValue).filter(function (file) { return file.name !== fileName; }) : undefined;
        setInternalValue(files);
        /** Passthrough to form context */
        formValues && updateFormValue(name, files);
        /** Independent callback */
        onChange && onChange(files);
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
    /** Set placeholder appearance */
    var isPlaceholderCollapsed = !!((typeof internalValue !== 'undefined' && internalValue !== '' && (internalValue.name || internalValue.length)) || isFocused);
    var isPlaceholderVisible = multiple ? !!(internalValue && internalValue.length) : !!internalValue;
    /** Default components */
    var appendContentDefault = React.createElement(StyledUploadButton, { files: internalValue, errorMsg: errorMsg, onClick: clickFileInput, disabled: disabled });
    var inputTextDefault = multiple ? ((internalValue && internalValue.length) + " uploaded " + (internalValue && internalValue.length > 1 ? 'files' : 'file')) : '1 uploaded file';
    return (React.createElement(React.Fragment, null,
        React.createElement(PropsWrappedStyledInputFieldLayout, { prependContent: prependContent, appendContent: appendContent ? appendContent(internalValue, errorMsg, clickFileInput, disabled) : appendContentDefault, isPlaceholderCollapsed: isPlaceholderCollapsed, errorMsg: errorMsg, disabled: disabled, placeholder: placeholder },
            React.createElement("div", __assign({ onClick: clickFileInput, onFocus: onFocusWrapper, onBlur: onBlurWrapper, className: classes.inputFieldWrapper }, (disabled ? {} : { tabIndex: 0 })),
                React.createElement("div", { className: classes.inputWithPlaceholder }, isPlaceholderVisible ? (inputText || inputTextDefault) : null),
                React.createElement("input", { ref: inputRef, name: name, type: "file", accept: accept, multiple: multiple, value: value, key: internalValue, className: classes.input, disabled: disabled, onChange: onChangeWrapper }))),
        internalValue ?
            (React.createElement("ul", { className: classes.selectedFiles }, getFileNames(internalValue).map(function (fileName) { return (React.createElement(StyledSelectedFile, { key: fileName, fileName: fileName, removeFile: removeFile })); }))) : null));
};
/** Wrappers */
var StyledFileField = withStyles__default(styles$d)(FileField);
var PropsWrappedStyledStyledFileField = function (props) { return React.createElement(StyledFileField, __assign({}, props)); };



var index$f = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledStyledFileField,
    FileField: PropsWrappedStyledStyledFileField
});

var styles$g = (function (theme) { return ({
    root: {
        position: 'relative',
    },
    rootOpen: {
        zIndex: 99,
    },
    /** Search icon */
    searchIcon: {
        fill: theme.inputPlaceholderColorIdle || '#95acbf',
    },
    /** Clear icon */
    clearIcon: {
        marginRight: 10,
        width: 18,
        fill: theme.inputColorBorderIdle || '#95acbf',
    },
    /** Selected values Wrapper */
    selectElement: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        border: 0,
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        '&:focus': {
            outline: 'none',
        },
    },
    inputField: {
        cursor: 'pointer',
        userSelect: 'none',
        width: '100%',
        height: '100%',
        border: 0,
        padding: 14,
        backgroundColor: theme.inputBackgroundColor,
        transition: '0.5s',
        color: theme.inputColorIdle || '#54738c',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightMedium,
        fontSize: 14,
        '&:focus': {
            color: theme.inputColorHighlight || '#007aff',
            outline: 'none',
        },
        // ':before': { content: '\00a0' },
        '&:after': {
            content: '"."',
            visibility: 'hidden',
        },
    },
    inputFieldWithPlaceholder: {
        paddingBottom: 5,
        paddingTop: 23,
    },
    inputFieldInvalid: {
        '&:focus': {
            color: (theme.inputColorError || '#d0021b') + " !important",
        },
    },
    /** Dropdown */
    dropdownWrapper: {
        position: 'absolute',
        top: 'calc(100% + 4px)',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
        border: "solid 1px #cfd8dc",
        backgroundColor: theme.inputBackgroundColor,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 99,
    },
    dropdownItem: {
        padding: '8px 18px',
        userSelect: 'none',
        cursor: 'pointer',
        color: theme.textColorSecondary,
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        fontSize: 14,
        '&:hover': {
            backgroundColor: '#eceff1',
        },
    },
    dropdownItemHover: {
        backgroundColor: '#eceff1',
    },
    dropdownItemSelected: {
        backgroundColor: theme.inputColorSelected,
    },
    /** Clickaway */
    clickaway: {
        zIndex: 98,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 10,
    },
}); });

/** Main component */
var SearchBox = function (props) {
    var className = props.className, classes = props.classes, value = props.value, onFocus = props.onFocus, onBlur = props.onBlur, onSelect = props.onSelect, onChange = props.onChange, 
    /** Fetch */
    requestInfo = props.requestInfo, parseResponse = props.parseResponse, _a = props.fetchTimeout, fetchTimeout = _a === void 0 ? 500 : _a, 
    /** External results */
    results = props.results, rest = __rest(props, ["className", "classes", "value", "onFocus", "onBlur", "onSelect", "onChange", "requestInfo", "parseResponse", "fetchTimeout", "results"]);
    var _b = __read(React.useState(''), 2), internalInputValue = _b[0], setInternalInputValue = _b[1];
    var _c = __read(React.useState(setTimeout(function () { }, 0)), 2), requestTimeout = _c[0], setRequestTimeout = _c[1];
    /** Focused state */
    var _d = __read(React.useState(false), 2), isFocused = _d[0], setFocused = _d[1];
    /** Internal results */
    var _e = __read(React.useState([]), 2), internalResults = _e[0], setInternalResults = _e[1];
    /** Default functions */
    var defautParseResponse = function (data) { return data.map(function (d) { return ({
        label: d.name,
    }); }); };
    /** Fetch data function */
    var fetchData = function (value) {
        if (typeof requestInfo === 'function') {
            var generatedRequestInfo = requestInfo(value);
            if (generatedRequestInfo) {
                fetch(requestInfo(value))
                    .then(function (response) { return response.json(); })
                    .then(parseResponse || defautParseResponse)
                    .then(function (parsedData) { return setInternalResults(parsedData); });
            }
            else {
                setInternalResults(function () { return []; });
            }
        }
    };
    /** Function wrapper to update internal input value */
    var updateInternalValue = function (value) {
        setInternalInputValue(value);
        clearTimeout(requestTimeout);
        setRequestTimeout(function () { return setTimeout(function () { return fetchData(value); }, fetchTimeout); });
    };
    /** Mount / unmount */
    React.useEffect(function () {
        fetchData(internalInputValue);
        return function () {
        };
    }, []);
    return (React.createElement("div", { className: classnames([
            className,
            classes.root,
        ]) },
        React.createElement(PropsWrappedStyledSearchField, __assign({}, rest, { onChange: function (value) { onChange && onChange(value); updateInternalValue(value); }, onFocus: function (e) { onFocus && onFocus(e); setFocused(true); }, onBlur: function (e) { onBlur && onBlur(e); setFocused(false); } })),
        (isFocused && (results || internalResults).length)
            ? (React.createElement("div", { className: classes.dropdownWrapper }, (results || internalResults).map(function (d, i) {
                var onMouseDown = function (e) {
                    e.stopPropagation();
                    onSelect && onSelect(d);
                    d.onClick && d.onClick(e);
                    d.href && window.open(d.href, '_self');
                };
                return (React.createElement("a", { key: i, onMouseDown: onMouseDown, href: d.href || undefined, className: classes.dropdownItem }, d.label));
            }))) : null));
};
/** Wrappers */
var StyledSearchBox = withStyles__default(styles$g)(SearchBox);
var PropsWrappedStyledSearchBox = function (props) { return React.createElement(StyledSearchBox, __assign({}, props)); };



var index$g = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledSearchBox,
    SearchBox: PropsWrappedStyledSearchBox
});

var styles$h = (function (theme) { return ({
    root: {
        border: "1px solid " + theme.buttonBackgroundColorPrimary,
        display: "inline-block",
        borderRadius: 6,
        position: 'relative'
    },
    button: {
        display: "inline-block",
        width: 71,
        border: 0,
        height: 24,
        padding: 6,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: 'transparent',
        position: 'relative',
        zIndex: 1,
        '&:hover': {
            backgroundColor: '#bdc9cf'
        }
    },
    active: {
        color: '#fff',
        transition: 'color 0.2s ease',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    background: {
        backgroundColor: theme.buttonBackgroundColorPrimary,
        width: 71,
        height: 24,
        position: 'absolute',
        zIndex: 0,
        borderRadius: 4,
        transition: 'left 0.2s ease'
    }
}); });

var DEFAULT_BUTTON_WIDTH = 71;
/** Main component */
var ButtonsSet = function (props) {
    var classes = props.classes, width = props.width, className = props.className, buttonsData = props.buttonsData, _a = props.active, active = _a === void 0 ? 0 : _a, rest = __rest(props, ["classes", "width", "className", "buttonsData", "active"]);
    var _b = __read(React.useState(active), 2), activeIdx = _b[0], setActiveIdx = _b[1];
    var buttonWidth = width || DEFAULT_BUTTON_WIDTH;
    var handleClick = function (idx, onClick, e) {
        onClick && onClick(e);
        setActiveIdx(idx);
    };
    var renderButtons = function () {
        return buttonsData.map(function (_a, idx) {
            var label = _a.label, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
            return (React.createElement(PropsWrappedStyledButton, { key: idx, onClick: function (e) { return handleClick(idx, onClick, e); }, sizeVariant: "mini", className: classnames([
                    classes.button,
                    idx === activeIdx && classes.active
                ]), style: { width: buttonWidth + "px" }, variant: "secondary" }, label));
        });
    };
    return (React.createElement("div", __assign({ className: classnames([classes.root, className]) }, rest),
        React.createElement("div", { style: { left: buttonWidth * activeIdx, width: buttonWidth + "px" }, className: classes.background }),
        renderButtons()));
};
/** Wrappings */
var StyledButtonsSet = withStyles__default(styles$h)(ButtonsSet);
var PropsWrappedStyledBadge = function (props) { return (React.createElement(StyledButtonsSet, __assign({}, props))); };



var index$h = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledBadge,
    ButtonsSet: PropsWrappedStyledBadge
});

var styles$i = (function (theme) { return ({
    root: {
        userSelect: 'none',
        display: 'flex',
    },
    item: {
        width: 29,
        height: 29,
        backgroundColor: theme.paginationBackgroundColor,
        fontSize: 12,
        color: theme.paginationTextColor,
        borderRadius: 4,
        margin: 4,
        textAlign: 'center',
        lineHeight: '29px',
        cursor: 'pointer',
    },
    active: {
        backgroundColor: theme.paginationBackgroundColorActive,
        color: theme.paginationTextColorActive,
    },
    disabled: {
        cursor: 'default',
        pointerEvents: 'none',
        '&:before': {
            opacity: 0.5,
        }
    },
    widthAuto: {
        width: 'auto',
        padding: '0 4px',
    },
    arrow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
            content: '""',
            display: 'block',
            width: 8,
            height: 8,
            borderLeft: "2px solid " + theme.paginationTextColor,
            borderBottom: "2px solid " + theme.paginationTextColor,
            borderRadius: 2,
        }
    },
    leftArrow: {
        '&:before': {
            transform: 'rotate(45deg)',
            marginLeft: 2,
        }
    },
    rightArrow: {
        '&:before': {
            transform: 'rotate(225deg)',
            marginRight: 2,
        }
    }
}); });

var Pagination = function (props) {
    var _a, _b;
    var onChange = props.onChange, collapseFactor = props.collapseFactor, currPage = props.currPage, pageCount = props.pageCount, className = props.className, classes = props.classes;
    var onClick = function (index) {
        if (index !== currPage) {
            onChange(index);
        }
    };
    var getItem = function (active, index, label, key) {
        var _a;
        return (React.createElement("div", { key: key, className: classnames(classes.item, (_a = {},
                _a[classes.widthAuto] = label > 999,
                _a[classes.active] = active,
                _a)), onClick: function () { onClick(index); } }, label));
    };
    var getItems = function (items) {
        return items.map(function (index) {
            return getItem(index === currPage, index, index + 1, index);
        });
    };
    var getAllItems = function () { return getItems(Array.from(Array(pageCount).keys())); };
    var getCollapsedItems = function (collapseFactor) {
        var collapseBefore = currPage - collapseFactor - 2 > 0;
        var collapseAfter = currPage + collapseFactor + 1 < pageCount - 2;
        var itemsBefore = collapseBefore ? currPage - collapseFactor : currPage - collapseFactor - 1;
        var itemsAfter = collapseAfter ? currPage + collapseFactor : currPage + collapseFactor + 1;
        var itemsValues = Array.from(Array(pageCount).keys()).filter(function (num) {
            return num >= itemsBefore
                && num <= itemsAfter
                && num > 0
                && num < pageCount - 1;
        });
        return (React.createElement(React.Fragment, null,
            getItem(currPage === 0, 0, 1),
            collapseBefore && getItem(false, currPage - collapseFactor - 1, '...'),
            getItems(itemsValues),
            collapseAfter && getItem(false, currPage + collapseFactor + 1, '...'),
            getItem(currPage === pageCount - 1, pageCount - 1, pageCount)));
    };
    if (pageCount <= 1) {
        return getItem(true, 0, 1);
    }
    return (React.createElement("div", { className: classnames(classes.root, className) },
        React.createElement("div", { onClick: function () { onClick(currPage - 1); }, className: classnames(classes.item, classes.arrow, classes.leftArrow, (_a = {}, _a[classes.disabled] = currPage === 0, _a)) }),
        collapseFactor ? getCollapsedItems(collapseFactor) : getAllItems(),
        React.createElement("div", { onClick: function () { onClick(currPage + 1); }, className: classnames(classes.item, classes.arrow, classes.rightArrow, (_b = {}, _b[classes.disabled] = currPage === pageCount - 1, _b)) })));
};
var StyledPagination = withStyles__default(styles$i)(Pagination);
var PropsWrappedStyledPagination = function (props) { return React.createElement(StyledPagination, __assign({}, props)); };



var index$i = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledPagination,
    Pagination: PropsWrappedStyledPagination
});

var getGridColumnStyle = function (breakpointValue) {
    if (!breakpointValue)
        return 'span 1';
    return "span " + breakpointValue;
};
var getGridTemplateColumns = function (columns) {
    return "repeat(" + columns + ", 1fr)";
};
var styles$j = (function (theme) {
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
    var children = props.children, classes = props.classes, className = props.className, rest = __rest(props, ["children", "classes", "className"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.row,
            className,
        ]) }), children));
};
var Col = function (props) {
    var children = props.children, xl = props.xl, lg = props.lg, md = props.md, sm = props.sm, xs = props.xs, classes = props.classes, className = props.className, rest = __rest(props, ["children", "xl", "lg", "md", "sm", "xs", "classes", "className"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.col,
            className,
        ]) }), children));
};
/** Wrappers */
var StyledRow = withStyles__default(styles$j)(Row);
var PropsWrappedStyledRow = function (props) { return React.createElement(StyledRow, __assign({}, props)); };
var StyledCol = withStyles__default(styles$j)(Col);
var PropsWrappedStyledCol = function (props) { return React.createElement(StyledCol, __assign({}, props)); };



var index$j = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Row,
    Row: PropsWrappedStyledRow,
    Col: PropsWrappedStyledCol
});

var styles$k = (function (theme) {
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

/** Main component */
var Container = function (props) {
    var children = props.children, classes = props.classes, rest = __rest(props, ["children", "classes"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.root,
        ]) }), children));
};
/** Wrappers */
var StyledContainer = withStyles__default(styles$k)(Container);
var PropsWrappedStyledContainer = function (props) { return React.createElement(StyledContainer, __assign({}, props)); };



var index$k = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledContainer,
    Container: PropsWrappedStyledContainer
});

var styles$l = (function (theme) { return ({
    root: {
        borderRadius: 8,
        display: 'flex',
        flexFlow: 'column',
        boxShadow: '0 2px 13px 0 rgba(0, 0, 0, 0.07)',
        overflow: 'hidden',
    },
    title: {
        padding: 24,
        flex: 1,
        fontWeight: theme.fontWeightSemiBold,
        fontFamily: theme.fontFamily,
        fontSize: 18,
    },
    body: {
        padding: 24,
        flex: 1,
        fontWeight: theme.fontWeightLight,
        fontFamily: theme.fontFamily,
        fontSize: 14,
    },
}); });

var Card = function (props) {
    var classes = props.classes, className = props.className, children = props.children, rest = __rest(props, ["classes", "className", "children"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.root,
            className,
        ]) }), children));
};
var Title = function (props) {
    var classes = props.classes, children = props.children, className = props.className, rest = __rest(props, ["classes", "children", "className"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.title,
            className,
        ]) }), children));
};
var Body = function (props) {
    var classes = props.classes, className = props.className, children = props.children, rest = __rest(props, ["classes", "className", "children"]);
    return (React.createElement("div", __assign({}, rest, { className: classnames([
            classes.body,
            className,
        ]) }), children));
};
var StyledCard = withStyles__default(styles$l)(Card);
var StyledTitle = withStyles__default(styles$l)(Title);
var StyledBody = withStyles__default(styles$l)(Body);
/** Wrappings */
var PropsWrappedStyledCard = function (props) { return React.createElement(StyledCard, __assign({}, props)); };
var PropsWrappedStyledTitle = function (props) { return React.createElement(StyledTitle, __assign({}, props)); };
var PropsWrappedStyledBody = function (props) { return React.createElement(StyledBody, __assign({}, props)); };



var index$l = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledCard,
    Wrapper: PropsWrappedStyledCard,
    Title: PropsWrappedStyledTitle,
    Body: PropsWrappedStyledBody
});

var styles$m = (function (theme) { return ({
    root: {
        '&.withBorder': {
            border: theme.tableBorderPrimary,
            borderRadius: 8,
            boxShadow: theme.tableBoxShadow,
        }
    },
    table: {
        borderSpacing: 0,
        fontSize: 14,
        textAlign: 'left',
        width: '100%',
    },
    header: {
        display: 'flex',
        height: 70,
    },
    headerLabel: {
        paddingLeft: 45,
        paddingTop: 25,
        fontSize: 21,
        color: theme.tableHeaderTextColor,
        whiteSpace: 'nowrap',
    },
    headerComponent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}); });

var Table = function (props) {
    var _a = props.border, border = _a === void 0 ? true : _a, children = props.children, classes = props.classes, className = props.className, headerLabel = props.headerLabel, headerComponent = props.headerComponent, headerLabelClassName = props.headerLabelClassName;
    if (!headerLabel && !headerComponent) {
        return (React.createElement("table", { className: classnames(classes.root, classes.table, className, {
                'withBorder': border,
            }) }, children));
    }
    return (React.createElement("div", { className: classnames(classes.root, className, {
            'withBorder': border,
        }) },
        React.createElement("div", { className: classes.header },
            headerLabel && React.createElement("div", { className: classnames(classes.headerLabel, headerLabelClassName) }, headerLabel),
            headerComponent && React.createElement("div", { className: classes.headerComponent }, headerComponent)),
        React.createElement("table", { className: classes.table }, children)));
};
/** Wrappers */
var StyledTable = withStyles__default(styles$m)(Table);
var PropsWrappedStyledTable = function (props) { return React.createElement(StyledTable, __assign({}, props)); };



var index$m = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledTable,
    Table: PropsWrappedStyledTable
});

var VARIANT_HEAD = 'head';
var VARIANT_BODY = 'body';
var TableContext = React.createContext({
    variant: ''
});

var TableBody = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement(TableContext.Provider, { value: { variant: VARIANT_BODY } },
        React.createElement("tbody", { className: className }, children)));
};



var index$n = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': TableBody,
    TableBody: TableBody
});

var styles$n = (function (theme) { return ({
    root: {
        padding: '0 5px',
        '&:first-child': {
            paddingLeft: 45,
        },
        '&:last-child': {
            paddingRight: 20,
        },
        'th&': {
            whiteSpace: 'nowrap',
            fontWeight: 'normal',
            borderBottom: "2px solid " + theme.tableBorderColor,
        },
    },
}); });

var TableCell = function (props) {
    var Component;
    var children = props.children, classes = props.classes, className = props.className, component = props.component;
    var tableContext = React.useContext(TableContext);
    if (component) {
        Component = component;
    }
    else {
        Component = tableContext.variant && tableContext.variant === 'head' ? 'th' : 'td';
    }
    return (React.createElement(Component, { className: classnames(classes.root, className) }, children));
};
var StyledTableCell = withStyles__default(styles$n)(TableCell);
var PropsWrappedStyledTableCell = function (props) { return React.createElement(StyledTableCell, __assign({}, props)); };



var index$o = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledTableCell,
    TableCell: PropsWrappedStyledTableCell
});

var TableHead = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement(TableContext.Provider, { value: { variant: VARIANT_HEAD } },
        React.createElement("thead", { className: className }, children)));
};



var index$p = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': TableHead,
    TableHead: TableHead
});

var styles$o = (function (theme) { return ({
    root: {
        height: 40,
        '&:nth-child(even)': {
            backgroundColor: theme.tableBackgroundColor,
        }
    },
}); });

var TableRow = function (props) {
    var children = props.children, classes = props.classes, className = props.className, otherProps = __rest(props, ["children", "classes", "className"]);
    return (React.createElement("tr", __assign({ className: classnames(classes.root, className) }, otherProps), children));
};
var StyledTableRow = withStyles__default(styles$o)(TableRow);
var PropsWrappedStyledTableRow = function (props) { return React.createElement(StyledTableRow, __assign({}, props)); };



var index$q = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledTableRow,
    TableRow: PropsWrappedStyledTableRow
});

var TableData = function (props) {
    var headerLabel = props.headerLabel, headerComponent = props.headerComponent, headRow = props.headRow, rows = props.rows, className = props.className;
    var getHeadRow = function () {
        return headRow.map(function (cell) {
            return React.createElement(PropsWrappedStyledTableCell, { key: cell.id }, cell.label);
        });
    };
    var getRows = function () { return rows.map(function (row) { return (React.createElement(PropsWrappedStyledTableRow, { key: row.id }, headRow.map(function (cell, index) {
        return React.createElement(PropsWrappedStyledTableCell, { key: index }, row[cell.id]);
    }))); }); };
    return (React.createElement(PropsWrappedStyledTable, { className: className, headerLabel: headerLabel, headerComponent: headerComponent },
        React.createElement(TableHead, null,
            React.createElement(PropsWrappedStyledTableRow, null, getHeadRow())),
        React.createElement(TableBody, null, getRows())));
};



var index$r = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': TableData,
    TableData: TableData
});

var styles$p = (function (theme) {
    var _a, _b, _c;
    return ({
        navbar: {
            position: 'relative',
            minHeight: 56,
            backgroundColor: theme.backgroundColorPrimary,
            width: '100%',
            boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        },
        section: {
            padding: '0px 20px',
        },
        align: (_a = {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1
            },
            _a["@media (max-width: " + (theme.gridSmBreakpoint || 576) + "px)"] = {
                minWidth: '100%',
            },
            /** Different align logic */
            _a['&.left'] = (_b = {
                    justifyContent: 'flex-start'
                },
                _b["@media (max-width: " + (theme.gridSmBreakpoint || 576) + "px)"] = {
                    justifyContent: 'center',
                },
                _b),
            _a['&.center'] = {
                justifyContent: 'center',
            },
            _a['&.right'] = (_c = {
                    justifyContent: 'flex-end'
                },
                _c["@media (max-width: " + (theme.gridSmBreakpoint || 576) + "px)"] = {
                    justifyContent: 'center',
                },
                _c),
            _a),
    });
});

/** Main component */
var Navbar = function (props) {
    var className = props.className, children = props.children, classes = props.classes, rest = __rest(props, ["className", "children", "classes"]);
    return (React.createElement("div", __assign({ className: classnames(classes.navbar, className) }, rest), children));
};
var NavbarSection = function (props) {
    var className = props.className, children = props.children, classes = props.classes, align = props.align, rest = __rest(props, ["className", "children", "classes", "align"]);
    return (React.createElement("div", __assign({ className: classnames([
            classes.section,
            align && classes.align,
            align,
            className,
        ]) }, rest), children));
};
/** Wrappers */
var StyledNavbar = withStyles__default(styles$p)(Navbar);
var PropsWrappedStyledNavbar = function (props) { return React.createElement(StyledNavbar, __assign({}, props)); };
var StyledNavbarSection = withStyles__default(styles$p)(NavbarSection);
var PropsWrappedStyledNavbarSection = function (props) { return React.createElement(StyledNavbarSection, __assign({}, props)); };



var index$s = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledNavbar,
    Navbar: PropsWrappedStyledNavbar,
    NavbarSection: PropsWrappedStyledNavbarSection
});

var styles$q = (function (theme) {
    var _a, _b;
    return ({
        container: (_a = {
                backgroundColor: theme.backgroundColorPrimary,
                display: 'flex',
                flexWrap: 'no-wrap',
                alignItems: 'center',
                padding: 0,
                height: '100%',
                flexDirection: 'row'
            },
            _a["@media (max-width: " + (theme.gridSmBreakpoint || 576) + "px)"] = {
                flexDirection: 'column',
            },
            _a),
        item: (_b = {
                fontFamily: theme.fontFamily,
                fontWeight: theme.fontWeightMedium,
                color: theme.navbarItemColor,
                fontSize: 14,
                padding: 15
            },
            _b["@media (max-width: " + (theme.gridSmBreakpoint || 576) + "px)"] = {
                padding: 5,
            },
            _b.cursor = 'pointer',
            _b.userSelect = 'none',
            _b.textAlign = 'center',
            _b.verticalAlign = 'middle',
            _b.transition = '0.2s',
            _b['&:hover'] = {
                color: theme.navbarItemColorHover,
            },
            _b['&:active'] = {
                color: theme.navbarItemColorActive,
            },
            _b.margin = 0,
            _b.borderTop = '3px solid rgba(0,0,0,0)',
            _b.borderBottom = '3px solid rgba(0,0,0,0)',
            _b),
        itemSelected: {
            color: theme.navbarItemColorHighlight,
            '&:hover': {
                color: theme.navbarItemColorHighlightHover,
            },
            '&:active': {
                color: theme.navbarItemColorHighlightActive,
            },
            '&.underlined': {
                borderBottom: "3px solid " + theme.navbarItemColorHighlight
            },
        },
    });
});

/** Creating form context with default values */
var defaultNavbarNavigationContextValues = {
    updateSelectedRoute: function () { },
    selectedRoute: undefined,
    variant: 'normal',
};
var NavbarNavigationContext = React.createContext(defaultNavbarNavigationContextValues);
/** Main component */
var NavigationContainer = function (props) {
    var className = props.className, children = props.children, _a = props.initialRoute, initialRoute = _a === void 0 ? null : _a, onRouteChange = props.onRouteChange, propsSelectedRoute = props.selectedRoute, classes = props.classes, _b = props.variant, variant = _b === void 0 ? 'normal' : _b, rest = __rest(props, ["className", "children", "initialRoute", "onRouteChange", "selectedRoute", "classes", "variant"]);
    /** Update selected value */
    var _c = __read(React.useState(initialRoute), 2), selectedRoute = _c[0], setSelectedRoute = _c[1];
    var updateSelectedRoute = function (route) {
        setSelectedRoute(function () { return route; });
        onRouteChange && onRouteChange(route);
    };
    return (React.createElement("div", __assign({ className: classnames(classes.container, className) }, rest),
        React.createElement(NavbarNavigationContext.Provider, { value: {
                variant: variant,
                selectedRoute: propsSelectedRoute === undefined ? selectedRoute : propsSelectedRoute,
                updateSelectedRoute: updateSelectedRoute,
            } }, children)));
};
var NavigationRoute = function (props) {
    var className = props.className, children = props.children, classes = props.classes, onClick = props.onClick, _a = props.selected, selected = _a === void 0 ? false : _a, route = props.route, rest = __rest(props, ["className", "children", "classes", "onClick", "selected", "route"]);
    /** Get navigation context */
    var _b = React.useContext(NavbarNavigationContext), updateSelectedRoute = _b.updateSelectedRoute, selectedRoute = _b.selectedRoute, variant = _b.variant;
    /** On click event wrapper */
    var onClickWrapper = function (e) {
        e.stopPropagation();
        updateSelectedRoute(route);
        onClick && onClick(e);
    };
    return (React.createElement("div", __assign({ className: classnames(classes.item, className, (route === selectedRoute || selected) ? classes.itemSelected : null, variant), onClick: onClickWrapper }, rest), children));
};
/** Wrappers */
var StyledNavigationContainer = withStyles__default(styles$q)(NavigationContainer);
var PropsWrappedStyledNavigationContainer = function (props) { return React.createElement(StyledNavigationContainer, __assign({}, props)); };
var StyledNavigationRoute = withStyles__default(styles$q)(NavigationRoute);
var PropsWrappedStyledNavigationRoute = function (props) { return React.createElement(StyledNavigationRoute, __assign({}, props)); };



var index$t = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledNavigationContainer,
    defaultNavbarNavigationContextValues: defaultNavbarNavigationContextValues,
    NavbarNavigationContext: NavbarNavigationContext,
    NavigationRoute: PropsWrappedStyledNavigationRoute,
    NavigationContainer: PropsWrappedStyledNavigationContainer
});

var styles$r = (function (theme) { return ({
    /** Container / Wrapper */
    container: {
        padding: '10px 0px',
        backgroundColor: theme.backgroundColorPrimary,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    /** Section */
    section: {
        cursor: 'pointer',
        userSelect: 'none',
        borderRight: '3px solid rgba(0,0,0,0)',
        borderLeft: '3px solid rgba(0,0,0,0)',
        margin: '5px 0px',
        padding: '2px 21px',
        transition: '0.2s',
        '&:hover': {
            color: theme.sidebarItemColorHover,
        },
        '&:active': {
            color: theme.sidebarItemColorActive
        },
    },
    sectionSelected: {
        backgroundColor: theme.sidebarItemBackgroundSelected,
        color: theme.sidebarItemColorHighlight,
        borderLeft: "3px solid " + theme.sidebarItemColorHighlight,
        '&:hover': {
            color: theme.sidebarItemColorHighlightHover,
        },
        '&:active': {
            color: theme.sidebarItemColorHighlightActive,
        },
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'row',
    },
    sectionInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    sectionTitle: {
        marginTop: 5,
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightMedium,
        fontSize: 14,
        color: theme.sidebarSectionColor,
    },
    sectionDescription: {
        marginTop: 7,
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightLight,
        fontSize: 12,
        color: theme.sidebarSectionColor,
    },
    expandIconContainer: {
        paddingTop: 5,
    },
    expandIcon: {
        transition: '0.3s',
        width: 20,
        fill: theme.sidebarItemColor,
    },
    expandIconCollapsed: {
        transform: 'rotate(180deg)',
    },
    sectionChildren: {
        padding: 0,
        maxHeight: 9999,
        transition: 'all 0.5s ease-in-out',
    },
    sectionChildrenHidden: {
        opacity: 0,
        maxHeight: '0px !important',
        padding: 0,
    },
    /** Item */
    item: {
        cursor: 'pointer',
        transition: '0.3s',
        color: theme.sidebarItemColor,
        fontSize: 12,
        padding: '4px 0px',
        fontFamily: theme.fontFamily,
        fontWeight: theme.fontWeightRegular,
        '&:hover': {
            color: theme.sidebarItemColorHover,
        },
        '&:active': {
            color: theme.sidebarItemColorActive,
        },
    },
    itemSelected: {
        fontWeight: theme.fontWeightMedium,
        color: theme.sidebarItemColorSelected,
        '&:hover': {
            color: theme.sidebarItemColorSelected,
        },
        '&:active': {
            color: theme.sidebarItemColorSelected,
        },
    },
}); });

/** Creating form context with default values */
var defaultSidebarNavigationContext = {
    updateSelectedSection: function () { },
    updateSelectedRoute: function () { },
    selectedSection: undefined,
    selectedRoute: undefined,
};
var SidebarNavigationContext = React.createContext(defaultSidebarNavigationContext);
/** Main component */
var SidebarNavigationContainer = function (props) {
    var className = props.className, children = props.children, _a = props.initialSection, initialSection = _a === void 0 ? null : _a, _b = props.initialRoute, initialRoute = _b === void 0 ? null : _b, propsSelectedSection = props.selectedSection, propsSelectedRoute = props.selectedRoute, onRouteChange = props.onRouteChange, classes = props.classes, rest = __rest(props, ["className", "children", "initialSection", "initialRoute", "selectedSection", "selectedRoute", "onRouteChange", "classes"]);
    /** Update selected value */
    var _c = __read(React.useState(initialSection), 2), selectedSection = _c[0], setSelectedSection = _c[1];
    var _d = __read(React.useState(initialRoute), 2), selectedRoute = _d[0], setSelectedRoute = _d[1];
    var updateSelectedSection = function (section) {
        setSelectedSection(function () { return section; });
        setSelectedRoute(function () { return null; });
        onRouteChange && onRouteChange(section, null);
    };
    var updateSelectedRoute = function (route) {
        setSelectedRoute(function () { return route; });
        onRouteChange && onRouteChange(selectedSection, route);
    };
    return (React.createElement("div", __assign({ className: classnames(classes.container, className) }, rest),
        React.createElement(SidebarNavigationContext.Provider, { value: {
                selectedSection: propsSelectedSection === undefined ? selectedSection : propsSelectedSection,
                selectedRoute: propsSelectedRoute === undefined ? selectedRoute : propsSelectedRoute,
                updateSelectedSection: updateSelectedSection,
                updateSelectedRoute: updateSelectedRoute,
            } }, children)));
};
var SidebarNavigationSection = function (props) {
    var className = props.className, children = props.children, classes = props.classes, onClick = props.onClick, route = props.route, title = props.title, description = props.description, rest = __rest(props, ["className", "children", "classes", "onClick", "route", "title", "description"]);
    /** Check if any children were passed */
    var areChildrenVisible = (Array.isArray(children) && children.length > 0) || !!children;
    /** Get navigation context */
    var _a = React.useContext(SidebarNavigationContext), updateSelectedSection = _a.updateSelectedSection, selectedSection = _a.selectedSection;
    // const isExpanded, setExpanded] = React.useState(false);
    var isExpanded = route === selectedSection;
    /** On click event wrapper */
    var onClickWrapper = function (e) {
        e.stopPropagation();
        updateSelectedSection(route);
        onClick && onClick(e);
    };
    return (React.createElement("div", __assign({ className: classnames(classes.section, className, (route === selectedSection) ? classes.sectionSelected : null), onClick: onClickWrapper }, rest),
        React.createElement("div", { className: classes.sectionHeader },
            React.createElement("div", { className: classes.sectionInfoContainer },
                React.createElement("div", { className: classes.sectionTitle }, title),
                React.createElement("div", { className: classes.sectionDescription }, description)),
            React.createElement("div", { className: classes.expandIconContainer }, areChildrenVisible ? (React.createElement(DownArrow, { className: classnames(classes.expandIcon, isExpanded ? classes.expandIconCollapsed : null) })) : null)),
        React.createElement("div", { className: classnames(classes.sectionChildren, isExpanded ? null : classes.sectionChildrenHidden) }, (areChildrenVisible && isExpanded) ? React.createElement(React.Fragment, null,
            React.createElement("hr", null),
            children) : null)));
};
var SidebarNavigationRoute = function (props) {
    var className = props.className, children = props.children, classes = props.classes, onClick = props.onClick, route = props.route, rest = __rest(props, ["className", "children", "classes", "onClick", "route"]);
    /** Get navigation context */
    var _a = React.useContext(SidebarNavigationContext), updateSelectedRoute = _a.updateSelectedRoute, selectedRoute = _a.selectedRoute;
    /** On click event wrapper */
    var onClickWrapper = function (e) {
        e.stopPropagation();
        updateSelectedRoute(route);
        onClick && onClick(e);
    };
    return (React.createElement("div", __assign({ className: classnames(classes.item, className, (route === selectedRoute) ? classes.itemSelected : null), onClick: onClickWrapper }, rest), children));
};
/** Wrappers */
var StyledSidebarNavigationContainer = withStyles__default(styles$r)(SidebarNavigationContainer);
var PropsWrappedStyledSidebarNavigationContainer = function (props) { return React.createElement(StyledSidebarNavigationContainer, __assign({}, props)); };
var StyledSidebarNavigationSection = withStyles__default(styles$r)(SidebarNavigationSection);
var PropsWrappedStyledSidebarNavigationSection = function (props) { return React.createElement(StyledSidebarNavigationSection, __assign({}, props)); };
var StyledSidebarNavigationRoute = withStyles__default(styles$r)(SidebarNavigationRoute);
var PropsWrappedStyledSidebarNavigationRoute = function (props) { return React.createElement(StyledSidebarNavigationRoute, __assign({}, props)); };



var index$u = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledSidebarNavigationContainer,
    defaultSidebarNavigationContext: defaultSidebarNavigationContext,
    SidebarNavigationContext: SidebarNavigationContext,
    SidebarNavigationContainer: PropsWrappedStyledSidebarNavigationContainer,
    SidebarNavigationSection: PropsWrappedStyledSidebarNavigationSection,
    SidebarNavigationRoute: PropsWrappedStyledSidebarNavigationRoute
});

var styles$s = (function (theme) { return ({
    root: {
        position: 'relative',
        overflow: 'visible',
    },
    badge: {
        position: 'absolute',
        borderRadius: 7,
        top: 0,
        right: 0,
        backgroundColor: theme.badgePrimaryBackgroundColor,
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -3,
        marginTop: -3,
        paddingLeft: 5,
        paddingRight: 5,
    },
    badgeContent: {
        fontFamily: theme.fontFamily,
        fontWidth: theme.fontWeightSemiBold,
        fontSize: 9,
        color: theme.textColorHighlight,
        userSelect: 'none',
    },
}); });

/** Main component */
var Badge = function (props) {
    var classes = props.classes, children = props.children, className = props.className, _a = props.label, label = _a === void 0 ? null : _a, rest = __rest(props, ["classes", "children", "className", "label"]);
    return (React.createElement("div", __assign({ className: classnames([
            classes.root,
            className,
        ]) }, rest),
        React.createElement("div", { className: classes.badge },
            React.createElement("div", { className: classes.badgeContent }, label)),
        children));
};
/** Wrappings */
var StyledBadge = withStyles__default(styles$s)(Badge);
var PropsWrappedStyledBadge$1 = function (props) { return React.createElement(StyledBadge, __assign({}, props)); };



var index$v = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledBadge$1,
    Badge: PropsWrappedStyledBadge$1
});

var styles$t = (function (theme) { return ({
    root: {
        position: 'relative',
        cursor: 'pointer',
    },
    rootOpen: {
        zIndex: 99,
    },
    inputNormal: {
        height: 47,
    },
    clickaway: {
        zIndex: 98,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    dropdownWrapper: {
        position: 'absolute',
        top: 'calc(100% + 4px)',
        width: '100%',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 6,
        border: "solid 1px #cfd8dc",
        backgroundColor: theme.inputBackgroundColor,
    },
    dropdownWrapperNormal: {
        padding: 10,
    },
    dropdownWrapperMini: {
        padding: 2,
    },
    dropdownArrow: {
        transition: '0.3s',
        fill: theme.inputPlaceholderColorIdle,
        width: 25,
        height: 25,
    },
    dropdownArrowNormal: {
        marginRight: 10,
    },
    dropdownArrowOpen: {
        transform: 'rotate(180deg)',
    },
    dropdownArrowFocused: {
        fill: theme.inputColorHighlight,
    },
}); });

var DropDownField = function (props) {
    var _a, _b, _c;
    var classes = props.classes, disabled = props.disabled, placeholder = props.placeholder, children = props.children, className = props.className, appendContent = props.appendContent, onClose = props.onClose, placeholderClassName = props.placeholderClassName, customPlaceholderFont = props.customPlaceholderFont, _d = props.sizeVariant, sizeVariant = _d === void 0 ? 'normal' : _d;
    var _e = __read(React.useState(false), 2), isDropdownOpen = _e[0], setDropdownOpen = _e[1];
    var _f = __read(React.useState(false), 2), isFocused = _f[0], setFocused = _f[1];
    var appendContentWithArrow = (React.createElement(React.Fragment, null,
        appendContent ? appendContent : null,
        React.createElement(DownArrow, { className: classnames(classes.dropdownArrow, (_a = {},
                _a[classes.dropdownArrowNormal] = sizeVariant === 'normal',
                _a[classes.dropdownArrowOpen] = isDropdownOpen,
                _a[classes.dropdownArrowFocused] = isFocused,
                _a)) })));
    var clickAwayOnClick = function (e) {
        e.stopPropagation();
        setDropdownOpen(false);
        onClose && onClose();
    };
    var toggleDropdown = function (e) {
        e.stopPropagation();
        setDropdownOpen(!isDropdownOpen);
        isDropdownOpen && onClose && onClose();
    };
    return (React.createElement(React.Fragment, null,
        isDropdownOpen && (React.createElement("div", { className: classes.clickaway, onClick: clickAwayOnClick })),
        React.createElement("div", { className: classnames(classes.root, (_b = {}, _b[classes.rootOpen] = isDropdownOpen, _b), className) },
            React.createElement(PropsWrappedStyledInputFieldLayout, { className: classnames((_c = {},
                    _c[classes.inputNormal] = sizeVariant === 'normal',
                    _c)), isPlaceholderCollapsed: false, disabled: disabled, placeholder: placeholder, sizeVariant: sizeVariant, customPlaceholderFont: customPlaceholderFont, placeholderClassName: placeholderClassName, showPrependBackground: sizeVariant !== 'mini', onFocus: function () { setFocused(true); }, onBlur: function () { setFocused(false); }, appendContent: appendContentWithArrow, onClick: toggleDropdown, tabIndex: 0 }),
            isDropdownOpen && (React.createElement("div", { className: classnames(classes.dropdownWrapper, sizeVariant === 'mini' ? classes.dropdownWrapperMini : classes.dropdownWrapperNormal) }, children)))));
};
/** Wrappings */
var StyledDropDownField = withStyles__default(styles$t)(DropDownField);
var PropsWrappedStyledDropDownField = function (props) { return React.createElement(StyledDropDownField, __assign({}, props)); };



var index$w = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': PropsWrappedStyledDropDownField,
    DropDownField: PropsWrappedStyledDropDownField
});

exports.Badge = PropsWrappedStyledBadge$1;
exports.BadgeElements = index$v;
exports.Button = PropsWrappedStyledButton;
exports.ButtonElements = index$7;
exports.ButtonsSet = PropsWrappedStyledBadge;
exports.ButtonsSetElements = index$h;
exports.Card = PropsWrappedStyledCard;
exports.CardElements = index$l;
exports.CheckboxField = PropsWrappedStyledCheckboxField;
exports.CheckboxFieldElements = index$a;
exports.Container = PropsWrappedStyledContainer;
exports.ContainerElements = index$k;
exports.DropDownField = PropsWrappedStyledDropDownField;
exports.DropDownFieldElements = index$w;
exports.FileField = PropsWrappedStyledStyledFileField;
exports.FileFieldElements = index$f;
exports.Form = Form;
exports.FormElements = index;
exports.Grid = Row;
exports.GridElements = index$j;
exports.Icons = index$6;
exports.InputField = InputField;
exports.InputFieldElements = index$8;
exports.MultiSelectField = PropsWrappedStyledMultiSelectField;
exports.MultiSelectFieldElements = index$e;
exports.Navbar = PropsWrappedStyledNavbar;
exports.NavbarElements = index$s;
exports.NavbarNavigation = PropsWrappedStyledNavigationContainer;
exports.NavbarNavigationElements = index$t;
exports.Pagination = PropsWrappedStyledPagination;
exports.PaginationElements = index$i;
exports.PasswordField = PropsWrappedStyledPasswordField;
exports.PasswordFieldElements = index$9;
exports.RadioField = PropsWrappedStyledRadioField;
exports.RadioFieldElements = index$1;
exports.SearchBox = PropsWrappedStyledSearchBox;
exports.SearchBoxElements = index$g;
exports.SearchField = PropsWrappedStyledSearchField;
exports.SearchFieldElements = index$d;
exports.SelectField = PropsWrappedStyledSelectField;
exports.SelectFieldElements = index$b;
exports.SidebarNavigation = PropsWrappedStyledSidebarNavigationContainer;
exports.SidebarNavigationElements = index$u;
exports.Table = PropsWrappedStyledTable;
exports.TableBody = TableBody;
exports.TableBodyElements = index$n;
exports.TableCell = PropsWrappedStyledTableCell;
exports.TableCellElements = index$o;
exports.TableData = TableData;
exports.TableDataElements = index$r;
exports.TableElements = index$m;
exports.TableHead = TableHead;
exports.TableHeadElements = index$p;
exports.TableRow = PropsWrappedStyledTableRow;
exports.TableRowElements = index$q;
exports.ThemeProvider = ThemeProvider;
exports.ValueBadge = StyledValueBadge;
exports.ValueBadgeElements = index$c;
exports.colors = colors;
exports.theme = defaultTheme;
//# sourceMappingURL=index.js.map
