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

var styles = (function (theme) { return ({
    '@global': {
        '@font-face': [
            {
                fontFamily: theme.fontLight,
                src: "url('" + theme.fontLightUrl + "')",
            },
            {
                fontFamily: theme.fontRegular,
                src: "url('" + theme.fontRegularUrl + "')",
            },
            {
                fontFamily: theme.fontMedium,
                src: "url('" + theme.fontMediumUrl + "')",
            },
            {
                fontFamily: theme.fontSemiBold,
                src: "url('" + theme.fontSemiBoldUrl + "')",
            },
            {
                fontFamily: theme.fontBold,
                src: "url('" + theme.fontBoldUrl + "')",
            },
        ],
        html: {
            height: '100%',
            width: '100%',
        },
        body: {
            fontFamily: theme.fontRegular,
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
            backgroundColor: theme.backgroundColorPrimary,
            color: theme.textColorPrimary,
        },
        h1: {
            fontSize: 42,
            fontFamily: theme.fontBold,
        },
        h2: {
            fontSize: 32,
            fontFamily: theme.fontBold,
        },
        h3: {
            fontSize: 28,
            fontFamily: theme.fontSemiBold,
        },
        h4: {
            fontSize: 14,
            fontFamily: theme.fontSemiBold,
        },
        p: {
            fontSize: 12,
            fontFamily: theme.fontMedium,
        },
        b: {
            fontFamily: theme.fontBold,
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

var defaultTheme = {
    /** Text color */
    textColorPrimary: '#1d1d1b',
    textColorSecondary: '#54738c',
    /** Background colors */
    backgroundColorPrimary: '#fff',
    /** Fonts */
    fontLight: 'galano-light',
    fontLightUrl: 'fonts/Galano-Grotesque-Light.otf',
    fontRegular: 'galano-regular',
    fontRegularUrl: 'fonts/Galano-Grotesque.otf',
    fontMedium: 'galano-medium',
    fontMediumUrl: 'fonts/Galano-Grotesque-Medium.otf',
    fontSemiBold: 'galano-semibold',
    fontSemiBoldUrl: 'fonts/Galano-Grotesque-Semi-Bold.otf',
    fontBold: 'galano-bold',
    fontBoldUrl: 'fonts/Galano-Grotesque-Bold.otf',
    /** Button colors */
    buttonColorPrimary: '#fff',
    buttonColorSecondary: '#007aff',
    buttonBackgroundColorPrimary: '#007aff',
    buttonBackgroundColorPrimaryHover: '#278eff',
    buttonBackgroundColorPrimaryClick: '#62adff',
    buttonBackgroundColorSecondary: '#fff',
    buttonBackgroundColorSecondaryHover: '#f5f5f5',
    buttonBackgroundColorSecondaryClick: '#ebebeb',
    buttonBackgroundColorDisabled: '#d2d2d2',
    /** Input fields */
    inputColorIdle: '#54738c',
    inputColorBorderIdle: '#cfe2f2',
    inputColorBorderIdleHover: '#deebf6',
    inputColorBorderIdleClick: '#eef5fa',
    inputColorHighlight: '#007aff',
    inputColorHighlightHover: '#278eff',
    inputColorHighlightClick: '#62adff',
    inputColorError: '#d0021b',
    inputPlaceholderColorIdle: '#95acbf',
    inputErrorMessageColor: '#ea3546',
    inputBackgroundColor: '#fff',
    inputBackgroundColorHover: '#f5f5f5',
    inputBackgroundColorClick: '#ebebeb',
    inputBackgroundColorDisabled: '#f0f0f0',
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

var ThemeProvider = function (props) {
    var theme = props.theme, children = props.children;
    return (React.createElement(withStyles.ThemeProvider, { theme: __assign({}, defaultTheme, { theme: theme }) },
        React.createElement(WrappedGlobalStyles, null, children)));
};

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
        fontFamily: theme.fontSemiBold,
    },
    disabled: {
        backgroundColor: theme.buttonBackgroundColorDisabled,
    },
    primary: {
        color: theme.buttonBackgroundColorSecondary,
        backgroundColor: theme.buttonBackgroundColorPrimary,
        '&:hover': {
            backgroundColor: theme.buttonBackgroundColorPrimaryHover,
        },
        '&:active': {
            backgroundColor: theme.buttonBackgroundColorPrimaryClick,
        },
    },
    secondary: {
        color: theme.buttonBackgroundColorPrimary,
        border: "solid 1px " + theme.buttonBackgroundColorPrimary,
        backgroundColor: theme.buttonBackgroundColorSecondary,
        '&:hover': {
            backgroundColor: theme.buttonBackgroundColorSecondaryHover,
        },
        '&:active': {
            backgroundColor: theme.buttonBackgroundColorSecondaryClick,
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
    formValues: undefined,
    formErrors: undefined,
    formTouched: undefined,
    initialValues: undefined,
});
/** Form component */
var Form = function (props) {
    var classes = props.classes, children = props.children, onSubmit = props.onSubmit, onReset = props.onReset, onChange = props.onChange, onError = props.onError, validationSchema = props.validationSchema, initialValues = props.initialValues, rest = __rest(props, ["classes", "children", "onSubmit", "onReset", "onChange", "onError", "validationSchema", "initialValues"]);
    /** State */
    var _a = __read(React.useState(initialValues || {}), 2), formValues = _a[0], setFormValues = _a[1];
    var _b = __read(React.useState({}), 2), formErrors = _b[0], setFormErrors = _b[1];
    var _c = __read(React.useState({}), 2), formTouched = _c[0], setFormTouched = _c[1];
    var _d = __read(React.useState(1), 2), formSessionId = _d[0], setFormSessionId = _d[1];
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
    /** Wrappers */
    var onSubmitFormWrapper = function (e) {
        e.preventDefault();
        if (Object.keys(formErrors).length > 0) {
            /** Set everything to "touched" to highlight errors */
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
    return (React.createElement("form", __assign({}, rest, { onSubmit: onSubmitFormWrapper, onReset: onResetFormWrapper, className: classnames([
            classes.root,
        ]), key: formSessionId }),
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

var PrependBackground = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 53 44", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement("title", null, "Mask"),
    React.createElement("defs", null),
    React.createElement("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { transform: "translate(-306.000000, -1087.000000)" },
            React.createElement("g", { transform: "translate(306.000000, 1087.000000)" },
                React.createElement("g", { transform: "translate(27.000000, 22.000000) rotate(-90.000000) translate(-27.000000, -22.000000) " },
                    React.createElement("path", { d: "M48.5,3 L48.5,30.6772753 C48.5,33.3843845 47.1309491,35.9078541 44.8615528,37.383754 L31.3615528,46.1634678 C28.7096004,47.8881628 25.2903996,47.8881628 22.6384472,46.1634678 L9.13844716,37.383754 C6.86905092,35.9078541 5.5,33.3843845 5.5,30.6772753 L5.5,3 C5.5,-1.418278 9.081722,-5 13.5,-5 L40.5,-5 C44.918278,-5 48.5,-1.418278 48.5,3 Z" }))))))); });

var index = (function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 16 19", width: 20, version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement("title", null, "Profile"),
    React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { transform: "translate(-455.000000, -1582.000000)", stroke: "#FFFFFF", strokeWidth: "1.02" },
            React.createElement("g", { transform: "translate(456.157895, 1583.000000)" },
                React.createElement("path", { d: "M4.36276851,5.42178243 C4.36276851,6.72768108 5.47893992,7.78627568 6.85571681,7.78627568 C8.23249371,7.78627568 9.34854401,6.72756622 9.34854401,5.42178243" }),
                React.createElement("path", { d: "M1.37159385,5.25924865 C1.37159385,8.13213378 3.8268803,10.4609041 6.85569259,10.4609041 C9.88450489,10.4609041 12.3396702,8.13213378 12.3396702,5.25924865 C12.3396702,2.38636351 9.88450489,0.0574783784 6.85569259,0.0574783784 C3.8268803,0.0574783784 1.37159385,2.38636351 1.37159385,5.25924865 Z" }),
                React.createElement("path", { d: "M13.6508719,16.9438311 C13.6508719,13.3841689 10.6084965,10.4985338 6.85575314,10.4985338 C3.10276758,10.4985338 0.0605132743,13.3841689 0.0605132743,16.9438311 L13.6508719,16.9438311 Z" })))))); });

var Eye = (function (props) {
    return (React.createElement("svg", __assign({ viewBox: "0 0 20 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("title", null, "Eye"),
        React.createElement("path", { d: "M18.5714507,10.4285791 C17.5111816,8.78795214 16.060287,7.38170046 14.3192135,6.48884225 C14.7656426,7.24777173 15.0000179,8.11830848 15.0000179,9.00000596 C15.0000179,11.7567057 12.7567116,14.0000119 10.0000119,14.0000119 C7.24331221,14.0000119 5.00000596,11.7567057 5.00000596,9.00000596 C5.00000596,8.11830848 5.23438124,7.24777173 5.68081034,6.48884225 C3.93973684,7.38170046 2.48884225,8.78795214 1.42857313,10.4285791 C3.33705755,13.3750112 6.41741836,15.4285851 10.0000119,15.4285851 C13.5826055,15.4285851 16.6629663,13.3750112 18.5714507,10.4285791 Z M10.5357268,6.1428597 C10.5357268,5.85268078 10.2901908,5.60714477 10.0000119,5.60714477 C8.13617041,5.60714477 6.60715073,7.13616445 6.60715073,9.00000596 C6.60715073,9.29018488 6.85268674,9.53572088 7.14286566,9.53572088 C7.43304458,9.53572088 7.67858058,9.29018488 7.67858058,9.00000596 C7.67858058,7.72768302 8.72768898,6.67857462 10.0000119,6.67857462 C10.2901908,6.67857462 10.5357268,6.43303861 10.5357268,6.1428597 Z M20.0000238,10.4285791 C20.0000238,10.7075973 19.910738,10.964294 19.7768093,11.1986693 C17.7232354,14.5803698 13.9620702,16.8571582 10.0000119,16.8571582 C6.03795363,16.8571582 2.27678843,14.569209 0.223214552,11.1986693 C0.0892858207,10.964294 0,10.7075973 0,10.4285791 C0,10.1495609 0.0892858207,9.89286417 0.223214552,9.65848889 C2.27678843,6.28794916 6.03795363,4 10.0000119,4 C13.9620702,4 17.7232354,6.28794916 19.7768093,9.65848889 C19.910738,9.89286417 20.0000238,10.1495609 20.0000238,10.4285791 Z" })));
});

var EyeDisabled = (function (props) {
    return (React.createElement("svg", __assign({ viewBox: "0 0 20 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("title", null, "Eye Disabled"),
        React.createElement("path", { d: "M6.19420381,14.7566938 L7.06474056,13.1830312 C5.77009616,12.24553 5.00000596,10.7388318 5.00000596,9.14284778 C5.00000596,8.2611503 5.23438124,7.39061354 5.68081034,6.63168407 C3.93973684,7.52454228 2.48884225,8.93079395 1.42857313,10.5714209 C2.5892888,12.3682981 4.22991576,13.8749963 6.19420381,14.7566938 Z M10.5357268,6.28570151 C10.5357268,5.9955226 10.2901908,5.74998659 10.0000119,5.74998659 C8.13617041,5.74998659 6.60715073,7.27900627 6.60715073,9.14284778 C6.60715073,9.43302669 6.85268674,9.6785627 7.14286566,9.6785627 C7.43304458,9.6785627 7.67858058,9.43302669 7.67858058,9.14284778 C7.67858058,7.8593641 8.72768898,6.82141644 10.0000119,6.82141644 C10.2901908,6.82141644 10.5357268,6.57588043 10.5357268,6.28570151 Z M14.587071,4.15400254 C14.587071,4.176324 14.587071,4.23212764 14.5759102,4.25444909 C12.2209967,8.46204339 9.88840465,12.6919592 7.53349112,16.8995535 L6.98661547,17.8928582 C6.91965111,18.0044655 6.7968831,18.0714298 6.6741151,18.0714298 C6.473222,18.0714298 5.41295288,17.4241076 5.1785776,17.2901789 C5.06697033,17.2232146 5,17.1116073 5,16.9776785 C5,16.7991069 5.3794707,16.1964276 5.49107797,16.0066952 C3.32589682,15.0245512 1.50669822,13.3504421 0.223214552,11.3415111 C0.0781250931,11.1182966 0,10.8504391 0,10.571412 C0,10.3035634 0.0781250931,10.0245453 0.223214552,9.8013307 C2.43303861,6.40846952 5.88170344,4.14284182 10.0000119,4.14284182 C10.6696556,4.14284182 11.35046,4.20980618 12.0089429,4.33257418 L12.6116222,3.24998361 C12.6785865,3.13837633 12.7901938,3.07141197 12.9241225,3.07141197 C13.1250156,3.07141197 14.174124,3.71873417 14.4084993,3.8526629 C14.5201066,3.91962726 14.587071,4.03123454 14.587071,4.15400254 Z M15.0000179,9.14284778 C15.0000179,11.2187431 13.7165342,13.0714239 11.7857283,13.8080319 L14.9107321,8.20534666 C14.9665357,8.51784703 15.0000179,8.8303474 15.0000179,9.14284778 Z M20.0000238,10.5714209 C20.0000238,10.8615998 19.9218987,11.0959751 19.7768093,11.3415111 C19.4308267,11.9107082 18.9955584,12.4575839 18.56029,12.9598166 C16.3727874,15.4709803 13.3593909,17 10.0000119,17 L10.8259058,15.526784 C14.0736775,15.2477658 16.8303772,13.272317 18.5714507,10.5714209 C17.7455569,9.28793724 16.6852877,8.16070375 15.4241255,7.290167 L16.1272514,6.04016551 C17.5111816,6.9665059 18.9062725,8.36159685 19.7768093,9.8013307 C19.9218987,10.0468667 20.0000238,10.281242 20.0000238,10.5714209 Z" })));
});

var styles$6 = (function (theme) { return ({
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
        color: theme.inputColorIdle || '#54738c',
        fontFamily: theme.fontMedium,
        fontSize: 14,
        '&:focus': {
            color: theme.inputColorHighlight || '#007aff',
            outline: 'none',
        },
    },
    inputWithPlaceholder: {
        paddingBottom: 5,
        paddingTop: 23,
    },
    inputInvalid: {
        '&:focus': {
            color: (theme.inputColorError || '#d0021b') + " !important",
        },
    },
    /** Placeholder */
    placeholder: {
        pointerEvents: 'none',
        position: 'absolute',
        transition: '0.2s',
        fontSize: 14,
        fontFamily: theme.fontMedium,
        color: theme.inputPlaceholderColorIdle || '#95acbf',
        width: '100%',
        height: '100%',
        padding: 14,
        margin: 0,
        transform: 'translate(0, 0px)',
        transformOrigin: 'left',
    },
    placeholderInvalid: {},
    placeholderCollapsed: {
        fontSize: 10,
        transform: 'translate(0, -12px)',
    },
    /** Prepend */
    prepend: {
        transition: '0.5s',
        position: 'relative',
        backgroundColor: theme.inputColorHighlight || '#007aff',
        fill: theme.inputColorHighlight || '#007aff',
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
        fill: theme.inputPlaceholderColorIdle || '#95acbf',
        backgroundColor: theme.inputPlaceholderColorIdle || '#95acbf',
    },
    prependMargin: {
        marginRight: 20,
    },
    prependInvalid: {
        fill: theme.inputColorError || '#d0021b',
        backgroundColor: theme.inputColorError || '#d0021b',
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
    prependBackground: {
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
        paddingLeft: 20,
    },
    /** Error message */
    errorMessage: {
        color: theme.inputErrorMessageColor || '#ea3546',
        fontFamily: theme.fontLight,
        fontSize: 10,
    },
}); });

var TextInput = function (props) {
    var classes = props.classes, errorMsg = props.errorMsg, disabled = props.disabled, prependContent = props.prependContent, appendContent = props.appendContent, placeholder = props.placeholder, isFocused = props.isFocused, value = props.value, rest = __rest(props, ["classes", "errorMsg", "disabled", "prependContent", "appendContent", "placeholder", "isFocused", "value"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classnames([
                classes.root,
                disabled ? classes.rootDisabled : null,
                errorMsg ? classes.rootInvalid : null,
            ]) },
            React.createElement("div", { className: classnames([
                    classes.prepend,
                    disabled ? classes.prependDisabled : null,
                    prependContent ? classes.prependMargin : null,
                    errorMsg ? classes.prependInvalid : null,
                ]) },
                prependContent ? React.createElement("div", { className: classes.prependContent }, prependContent) : null,
                prependContent ? React.createElement(PrependBackground, { className: classes.prependBackground }) : null),
            React.createElement("div", { className: classes.inputWrapper },
                placeholder ?
                    (React.createElement("div", { className: classnames([
                            classes.placeholder,
                            ((typeof value !== 'undefined' && value !== '') || isFocused) ? classes.placeholderCollapsed : null,
                            errorMsg ? classes.placeholderInvalid : null,
                        ]) }, placeholder)) : null,
                React.createElement("input", __assign({}, rest, { className: classnames([
                        classes.input,
                        placeholder ? classes.inputWithPlaceholder : null,
                        errorMsg ? classes.inputInvalid : null,
                    ]), disabled: disabled, value: value || '' }))),
            React.createElement("div", { className: classnames([
                    classes.append,
                ]) }, appendContent)),
        errorMsg ?
            (React.createElement("div", { className: classes.errorMessage }, errorMsg)) : null));
};
var StyledTextInput = withStyles__default(styles$6)(TextInput);

var InputField = function (props) {
    var classes = props.classes, _a = props.name, name = _a === void 0 ? 'unnamed' : _a, value = props.value, _b = props.type, type = _b === void 0 ? 'text' : _b, placeholder = props.placeholder, disabled = props.disabled, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, _c = props.clearFormValueOnUnmount, clearFormValueOnUnmount = _c === void 0 ? true : _c, prependContent = props.prependContent, appendContent = props.appendContent, errorMessage = props.errorMessage, rest = __rest(props, ["classes", "name", "value", "type", "placeholder", "disabled", "onChange", "onFocus", "onBlur", "clearFormValueOnUnmount", "prependContent", "appendContent", "errorMessage"]);
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
        case 'submit':
        case 'reset':
            return (React.createElement(StyledButton, { type: type }, value || type));
        case 'text':
        case 'number':
        case 'email':
        case 'password':
            return (React.createElement(StyledTextInput, __assign({}, rest, { isFocused: isFocused, onFocus: onFocusWrapper, onBlur: onBlurWrapper, onChange: onChangeWrapper, disabled: disabled, placeholder: placeholder, type: type, name: name, errorMsg: errorMsg, value: internalValue, appendContent: appendContent, prependContent: prependContent })));
    }
    return React.createElement("input", __assign({}, props));
};

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

var PasswordField = function (props) {
    var _a = props.showPasswordByDefault, showPasswordByDefault = _a === void 0 ? false : _a, classes = props.classes, type = props.type, rest = __rest(props, ["showPasswordByDefault", "classes", "type"]);
    /** Toggle show password state */
    var _b = __read(React.useState(showPasswordByDefault), 2), showPassword = _b[0], setShowPassword = _b[1];
    /** Toggle show password Icons */
    var appendContent = (React.createElement("div", { className: classes.append, onClick: function () { return setShowPassword(function (currVal) { return !currVal; }); } }, showPassword ? (React.createElement(Eye, { className: classes.icon })) : (React.createElement(EyeDisabled, { className: classes.icon }))));
    return (React.createElement(InputField, __assign({}, rest, { type: showPassword ? 'text' : 'password', appendContent: appendContent })));
};
var StyledPasswordField = withStyles__default(styles$7)(PasswordField);

var styles$8 = (function (theme) { return ({
    /** Root Wrapper */
    root: {
        transition: '0.3s',
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
        color: theme.textColorSecondary,
        fontFamily: theme.fontMedium,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        '&:hover $input ~ $checkmark': {
            backgroundColor: theme.inputBackgroundColorHover,
        },
        '&:active $input ~ $checkmark': {
            backgroundColor: theme.inputBackgroundColorClick,
        },
        '&:hover $input:checked ~ $checkmark': {
            backgroundColor: theme.inputColorHighlightHover,
        },
        '&:active $input:checked ~ $checkmark': {
            backgroundColor: theme.inputColorHighlightClick,
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
        padding: 10,
    },
}); });

var RadioField = function (props) {
    /** Get props */
    var classes = props.classes, value = props.value, name = props.name, checked = props.checked, placeholder = props.placeholder, onChange = props.onChange, rest = __rest(props, ["classes", "value", "name", "checked", "placeholder", "onChange"]);
    /** Getting values from Form context (if the field is wrapped inside a form */
    var _a = React.useContext(FormContext), updateFormValue = _a.updateFormValue, formValues = _a.formValues;
    /** Get checked value when using within a form or solo */
    var checkedValue = formValues ? formValues[name] === value : checked;
    /** Wrappers to merge form and props methods */
    var onChangeWrapper = function (e) {
        var _a = e.target, name = _a.name, targetValue = _a.value;
        updateFormValue && updateFormValue(name, targetValue);
        onChange && onChange(e);
    };
    /** On mount/unmount logic */
    React.useEffect(function () {
        /** On mount */
        /** Update form with internal value on mount */
        checked && updateFormValue && updateFormValue(name, value);
        return function () {
            /** On unmount */
            /** Clear Form value if needed */
        };
    }, []);
    return (React.createElement("label", { className: classes.root },
        React.createElement("input", __assign({}, rest, { type: "radio", className: classes.input, name: name, value: value, checked: checkedValue, onChange: onChangeWrapper })),
        React.createElement("span", { className: classes.checkmark }),
        React.createElement("div", { className: classes.placeholder }, placeholder)));
};
var StyledRadioField = withStyles__default(styles$8)(RadioField);

exports.Body = StyledBody;
exports.Button = StyledButton;
exports.Col = StyledCol;
exports.Container = StyledContainer;
exports.Eye = Eye;
exports.EyeDisabled = EyeDisabled;
exports.Form = StyledForm;
exports.FormContext = FormContext;
exports.InputField = InputField;
exports.PasswordField = StyledPasswordField;
exports.PrependBackground = PrependBackground;
exports.Profile = index;
exports.RadioField = StyledRadioField;
exports.Row = StyledRow;
exports.ThemeProvider = ThemeProvider;
exports.Title = StyledTitle;
exports.Wrapper = StyledCard;
//# sourceMappingURL=index.js.map
