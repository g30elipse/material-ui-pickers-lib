"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var clsx_1 = __importDefault(require("clsx"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var Year = /** @class */ (function (_super) {
    __extends(Year, _super);
    function Year() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            _this.props.onSelect(_this.props.value);
        };
        return _this;
    }
    Year.prototype.render = function () {
        var _a;
        var _b = this.props, classes = _b.classes, selected = _b.selected, disabled = _b.disabled, value = _b.value, children = _b.children, other = __rest(_b, ["classes", "selected", "disabled", "value", "children"]);
        return (React.createElement(Typography_1.default, __assign({ role: "button", component: "div", className: clsx_1.default(classes.root, (_a = {},
                _a[classes.selected] = selected,
                _a[classes.disabled] = disabled,
                _a)), tabIndex: disabled ? -1 : 0, onClick: this.handleClick, onKeyPress: this.handleClick, color: selected ? 'primary' : 'default', variant: selected ? 'h5' : 'subtitle1', children: children }, other)));
    };
    Year.propTypes = {
        children: PropTypes.node.isRequired,
        classes: PropTypes.object.isRequired,
        disabled: PropTypes.bool,
        onSelect: PropTypes.func.isRequired,
        selected: PropTypes.bool,
        value: PropTypes.any.isRequired,
        innerRef: PropTypes.any,
    };
    Year.defaultProps = {
        selected: false,
        disabled: false,
    };
    return Year;
}(React.PureComponent));
exports.Year = Year;
exports.styles = function (theme) {
    return createStyles_1.default({
        root: {
            height: theme.spacing.unit * 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            outline: 'none',
            '&:focus': {
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        selected: {
            margin: '10px 0',
            fontWeight: theme.typography.fontWeightMedium,
        },
        disabled: {
            pointerEvents: 'none',
            color: theme.palette.text.hint,
        },
    });
};
exports.default = withStyles_1.default(exports.styles, { name: 'MuiPickersYear' })(Year);
