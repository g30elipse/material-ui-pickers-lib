import { Omit } from '@material-ui/core';
import { PopoverProps as PopoverPropsType } from '@material-ui/core/Popover';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DateTextFieldProps } from '../_shared/DateTextField';
export interface OuterInlineWrapperProps extends Omit<DateTextFieldProps, 'utils' | 'onClick'> {
    wider?: boolean;
    /** On open callback */
    onOpen?: () => void;
    /** On close callback */
    onClose?: () => void;
    /** Dialog props passed to material-ui Dialog */
    PopoverProps?: Partial<PopoverPropsType>;
}
export interface InlineWrapperProps extends OuterInlineWrapperProps {
    handleAccept: () => void;
    isAccepted: boolean;
    /** Show only calendar for datepicker in popover mode */
    onlyCalendar: boolean;
}
export declare class InlineWrapper extends React.PureComponent<InlineWrapperProps & WithStyles<typeof styles>> {
    static propTypes: any;
    static defaultProps: {
        value: Date;
        onlyCalendar: boolean;
        isAccepted: boolean;
    };
    static getDerivedStateFromProps(nextProps: InlineWrapperProps): {
        anchorEl: null;
    } | null;
    state: {
        anchorEl: null;
    };
    open: (e: React.SyntheticEvent<Element, Event>) => void;
    close: () => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    render(): JSX.Element;
}
export declare const styles: {
    popoverPaper: {
        width: number;
        paddingBottom: number;
    };
    popoverPaperWider: {
        width: number;
    };
};
declare const _default: React.ComponentType<Pick<Pick<InlineWrapperProps & {
    classes: Record<"popoverPaper" | "popoverPaperWider", string>;
}, "label" | "select" | "style" | "title" | "mask" | "children" | "value" | "onChange" | "format" | "labelFunc" | "disableOpenOnEnter" | "isAccepted" | "classes" | "onError" | "fullWidth" | "defaultValue" | "manifest" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "component" | "disabled" | "error" | "margin" | "required" | "variant" | "innerRef" | "autoComplete" | "autoFocus" | "FormHelperTextProps" | "helperText" | "InputLabelProps" | "inputRef" | "multiline" | "name" | "rows" | "rowsMax" | "SelectProps" | "type" | "invalidLabel" | "emptyLabel" | "maxDate" | "minDate" | "disablePast" | "disableFuture" | "maxDateMessage" | "minDateMessage" | "invalidDateMessage" | "keepCharPositions" | "InputProps" | "inputProps" | "onClear" | "keyboard" | "keyboardIcon" | "clearable" | "TextFieldComponent" | "InputAdornmentProps" | "KeyboardButtonProps" | "adornmentPosition" | "onInputChange" | "handleAccept" | "onlyCalendar" | "wider" | "onOpen" | "onClose" | "PopoverProps"> & Pick<PropTypes.InferProps<any>, string | number | symbol> & Pick<InlineWrapperProps & {
    classes: Record<"popoverPaper" | "popoverPaperWider", string>;
}, never>, string | number | symbol> & import("@material-ui/core").StyledComponentProps<"popoverPaper" | "popoverPaperWider">>;
export default _default;
