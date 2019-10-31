import * as React from "react";
import { WithStyles } from 'react-jss';
interface ITextFieldProps {
    name: string;
    type: string;
    placeholder?: string;
    value: any;
    disabled?: boolean;
    onChange: (e: React.BaseSyntheticEvent) => void;
    onFocus: (e: React.BaseSyntheticEvent) => void;
    onBlur: (e: React.BaseSyntheticEvent) => void;
    isFocused?: any;
    errorMsg?: string;
    prependContent?: any;
    appendContent?: any;
}
declare const StyledTextField: React.ComponentType<Pick<ITextFieldProps & React.HTMLProps<HTMLInputElement> & WithStyles<(theme: any) => {
    root: {
        position: string;
        borderRadius: number;
        overflow: string;
        border: string;
        transition: string;
        backgroundColor: string;
        display: string;
        justifyContent: string;
        '&:focus-within': {
            border: string;
            outline: string;
        };
    };
    invalidRoot: {
        border: string;
    };
    disabledRoot: {
        backgroundColor: string;
    };
    inputWrapper: {
        flex: number;
        position: string;
    };
    input: {
        width: string;
        height: string;
        border: number;
        padding: number;
        backgroundColor: string;
        transition: string;
        color: string;
        fontFamily: string;
        fontSize: number;
        '&:focus': {
            color: string;
            outline: string;
        };
    };
    inputWithPlaceholder: {
        paddingBottom: number;
        paddingTop: number;
    };
    invalidInput: {
        '&:focus': {
            color: string;
        };
    };
    placeholder: {
        pointerEvents: string;
        position: string;
        transition: string;
        fontSize: number;
        fontFamily: string;
        display: string;
        verticalAlign: string;
        color: string;
        width: string;
        height: string;
        left: number;
        top: number;
        padding: number;
        margin: number;
        transform: string;
        transformOrigin: string;
    };
    invalidPlaceholder: {};
    placeholderCollapsed: {
        fontSize: number;
        transform: string;
    };
    prepend: {
        transition: string;
        position: string;
        backgroundColor: string;
        minWidth: number;
        overflow: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        zIndex: number;
    };
    prependMargin: {
        marginRight: number;
    };
    prependContent: {
        display: string;
        alignItems: string;
        justifyContent: string;
        color: string;
        padding: number;
        paddingLeft: number;
        height: string;
    };
    prependBackground: {
        right: number;
        zIndex: number;
        position: string;
        height: string;
    };
    invalidPrepend: {
        backgroundColor: string;
    };
    append: {
        display: string;
        alignItems: string;
        justifyContent: string;
        paddingLeft: number;
    };
    errorMessage: {
        color: string;
        fontFamily: string;
        fontSize: number;
    };
}>, "errorMsg" | "name" | "type" | "placeholder" | "value" | "disabled" | "onChange" | "onFocus" | "onBlur" | "isFocused" | "prependContent" | "appendContent" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "cite" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "data" | "dateTime" | "default" | "defer" | "download" | "encType" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "label" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "nonce" | "noValidate" | "open" | "optimum" | "pattern" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "size" | "sizes" | "span" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "summary" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "ref" | "key"> & {
    classes?: Partial<Record<"placeholder" | "prependContent" | "root" | "invalidRoot" | "disabledRoot" | "inputWrapper" | "input" | "inputWithPlaceholder" | "invalidInput" | "invalidPlaceholder" | "placeholderCollapsed" | "prepend" | "prependMargin" | "prependBackground" | "invalidPrepend" | "append" | "errorMessage", string>> | undefined;
}>;
export default StyledTextField;
export { StyledTextField as TextField };
