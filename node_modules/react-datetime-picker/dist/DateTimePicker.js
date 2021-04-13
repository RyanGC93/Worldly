"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeEventProps = _interopRequireDefault(require("make-event-props"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

var _reactCalendar = _interopRequireDefault(require("react-calendar"));

var _reactFit = _interopRequireDefault(require("react-fit"));

var _reactClock = _interopRequireDefault(require("react-clock"));

var _DateTimeInput = _interopRequireDefault(require("./DateTimeInput"));

var _propTypes2 = require("./shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var allViews = ['hour', 'minute', 'second'];
var baseClassName = 'react-datetime-picker';
var outsideActionEvents = ['mousedown', 'focusin', 'touchstart'];

var DateTimePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateTimePicker, _PureComponent);

  var _super = _createSuper(DateTimePicker);

  function DateTimePicker() {
    var _this;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onOutsideAction", function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.closeWidgets();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDateChange", function (value, closeWidgets) {
      var prevValue = _this.props.value;

      if (prevValue) {
        var valueWithHour = new Date(value);
        valueWithHour.setHours(prevValue.getHours(), prevValue.getMinutes(), prevValue.getSeconds(), prevValue.getMilliseconds());

        _this.onChange(valueWithHour, closeWidgets);
      } else {
        _this.onChange(value, closeWidgets);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var closeWidgets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.closeWidgets;
      var onChange = _this.props.onChange;

      if (closeWidgets) {
        _this.closeWidgets();
      }

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus;

      if (onFocus) {
        onFocus(event);
      } // Internet Explorer still fires onFocus on disabled elements


      if (disabled) {
        return;
      }

      switch (event.target.name) {
        case 'day':
        case 'month':
        case 'year':
          _this.openCalendar();

          break;

        case 'hour12':
        case 'hour24':
        case 'minute':
        case 'second':
          _this.openClock();

          break;

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openClock", function () {
      _this.setState({
        isCalendarOpen: false,
        isClockOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openCalendar", function () {
      _this.setState({
        isCalendarOpen: true,
        isClockOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCalendar", function () {
      _this.setState(function (prevState) {
        return {
          isCalendarOpen: !prevState.isCalendarOpen,
          isClockOpen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeWidgets", function () {
      _this.setState(function (prevState) {
        if (!prevState.isCalendarOpen && !prevState.isClockOpen) {
          return null;
        }

        return {
          isCalendarOpen: false,
          isClockOpen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (event) {
      return event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      return _this.onChange(null);
    });

    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideActionListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$state = this.state,
          isCalendarOpen = _this$state.isCalendarOpen,
          isClockOpen = _this$state.isClockOpen;
      var _this$props2 = this.props,
          onCalendarClose = _this$props2.onCalendarClose,
          onCalendarOpen = _this$props2.onCalendarOpen,
          onClockClose = _this$props2.onClockClose,
          onClockOpen = _this$props2.onClockOpen;
      var isWidgetOpen = isCalendarOpen || isClockOpen;
      var prevIsWidgetOpen = prevState.isCalendarOpen || prevState.isClockOpen;

      if (isWidgetOpen !== prevIsWidgetOpen) {
        this.handleOutsideActionListeners();
      }

      if (isCalendarOpen !== prevState.isCalendarOpen) {
        var callback = isCalendarOpen ? onCalendarOpen : onCalendarClose;
        if (callback) callback();
      }

      if (isClockOpen !== prevState.isClockOpen) {
        var _callback = isClockOpen ? onClockOpen : onClockClose;

        if (_callback) _callback();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideActionListeners(false);
    }
  }, {
    key: "handleOutsideActionListeners",
    value: function handleOutsideActionListeners(shouldListen) {
      var _this2 = this;

      var _this$state2 = this.state,
          isCalendarOpen = _this$state2.isCalendarOpen,
          isClockOpen = _this$state2.isClockOpen;
      var isWidgetOpen = isCalendarOpen || isClockOpen;
      var shouldListenWithFallback = typeof shouldListen !== 'undefined' ? shouldListen : isWidgetOpen;
      var fnName = shouldListenWithFallback ? 'addEventListener' : 'removeEventListener';
      outsideActionEvents.forEach(function (eventName) {
        return document[fnName](eventName, _this2.onOutsideAction);
      });
    }
  }, {
    key: "renderInputs",
    value: function renderInputs() {
      var _this$props3 = this.props,
          amPmAriaLabel = _this$props3.amPmAriaLabel,
          autoFocus = _this$props3.autoFocus,
          calendarAriaLabel = _this$props3.calendarAriaLabel,
          calendarIcon = _this$props3.calendarIcon,
          clearAriaLabel = _this$props3.clearAriaLabel,
          clearIcon = _this$props3.clearIcon,
          dayAriaLabel = _this$props3.dayAriaLabel,
          dayPlaceholder = _this$props3.dayPlaceholder,
          disableCalendar = _this$props3.disableCalendar,
          disabled = _this$props3.disabled,
          format = _this$props3.format,
          hourAriaLabel = _this$props3.hourAriaLabel,
          hourPlaceholder = _this$props3.hourPlaceholder,
          locale = _this$props3.locale,
          maxDate = _this$props3.maxDate,
          maxDetail = _this$props3.maxDetail,
          minDate = _this$props3.minDate,
          minuteAriaLabel = _this$props3.minuteAriaLabel,
          minutePlaceholder = _this$props3.minutePlaceholder,
          monthAriaLabel = _this$props3.monthAriaLabel,
          monthPlaceholder = _this$props3.monthPlaceholder,
          name = _this$props3.name,
          nativeInputAriaLabel = _this$props3.nativeInputAriaLabel,
          required = _this$props3.required,
          secondAriaLabel = _this$props3.secondAriaLabel,
          secondPlaceholder = _this$props3.secondPlaceholder,
          showLeadingZeros = _this$props3.showLeadingZeros,
          value = _this$props3.value,
          yearAriaLabel = _this$props3.yearAriaLabel,
          yearPlaceholder = _this$props3.yearPlaceholder;
      var _this$state3 = this.state,
          isCalendarOpen = _this$state3.isCalendarOpen,
          isClockOpen = _this$state3.isClockOpen;

      var _concat = [].concat(value),
          _concat2 = _slicedToArray(_concat, 1),
          valueFrom = _concat2[0];

      var ariaLabelProps = {
        amPmAriaLabel: amPmAriaLabel,
        dayAriaLabel: dayAriaLabel,
        hourAriaLabel: hourAriaLabel,
        minuteAriaLabel: minuteAriaLabel,
        monthAriaLabel: monthAriaLabel,
        nativeInputAriaLabel: nativeInputAriaLabel,
        secondAriaLabel: secondAriaLabel,
        yearAriaLabel: yearAriaLabel
      };
      var placeholderProps = {
        dayPlaceholder: dayPlaceholder,
        hourPlaceholder: hourPlaceholder,
        minutePlaceholder: minutePlaceholder,
        monthPlaceholder: monthPlaceholder,
        secondPlaceholder: secondPlaceholder,
        yearPlaceholder: yearPlaceholder
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(baseClassName, "__wrapper")
      }, /*#__PURE__*/_react["default"].createElement(_DateTimeInput["default"], _extends({}, ariaLabelProps, placeholderProps, {
        autoFocus: autoFocus,
        className: "".concat(baseClassName, "__inputGroup"),
        disabled: disabled,
        format: format,
        isWidgetOpen: isCalendarOpen || isClockOpen,
        locale: locale,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        name: name,
        onChange: this.onChange,
        placeholder: this.placeholder,
        required: required,
        showLeadingZeros: showLeadingZeros,
        value: valueFrom
      })), clearIcon !== null && /*#__PURE__*/_react["default"].createElement("button", {
        "aria-label": clearAriaLabel,
        className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.clear,
        onFocus: this.stopPropagation,
        type: "button"
      }, clearIcon), calendarIcon !== null && !disableCalendar && /*#__PURE__*/_react["default"].createElement("button", {
        "aria-label": calendarAriaLabel,
        className: "".concat(baseClassName, "__calendar-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onBlur: this.resetValue,
        onClick: this.toggleCalendar,
        onFocus: this.stopPropagation,
        type: "button"
      }, calendarIcon));
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      var disableCalendar = this.props.disableCalendar;
      var isCalendarOpen = this.state.isCalendarOpen;

      if (isCalendarOpen === null || disableCalendar) {
        return null;
      }

      var _this$props4 = this.props,
          calendarClassName = _this$props4.calendarClassName,
          dateTimePickerClassName = _this$props4.className,
          dateTimePickerMaxDetail = _this$props4.maxDetail,
          onChange = _this$props4.onChange,
          value = _this$props4.value,
          calendarProps = _objectWithoutProperties(_this$props4, ["calendarClassName", "className", "maxDetail", "onChange", "value"]);

      var className = "".concat(baseClassName, "__calendar");
      return /*#__PURE__*/_react["default"].createElement(_reactFit["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _mergeClassNames["default"])(className, "".concat(className, "--").concat(isCalendarOpen ? 'open' : 'closed'))
      }, /*#__PURE__*/_react["default"].createElement(_reactCalendar["default"], _extends({
        className: calendarClassName,
        onChange: this.onDateChange,
        value: value || null
      }, calendarProps))));
    }
  }, {
    key: "renderClock",
    value: function renderClock() {
      var disableClock = this.props.disableClock;
      var isClockOpen = this.state.isClockOpen;

      if (isClockOpen === null || disableClock) {
        return null;
      }

      var _this$props5 = this.props,
          clockClassName = _this$props5.clockClassName,
          dateTimePickerClassName = _this$props5.className,
          maxDetail = _this$props5.maxDetail,
          onChange = _this$props5.onChange,
          value = _this$props5.value,
          clockProps = _objectWithoutProperties(_this$props5, ["clockClassName", "className", "maxDetail", "onChange", "value"]);

      var className = "".concat(baseClassName, "__clock");

      var _concat3 = [].concat(value),
          _concat4 = _slicedToArray(_concat3, 1),
          valueFrom = _concat4[0];

      var maxDetailIndex = allViews.indexOf(maxDetail);
      return /*#__PURE__*/_react["default"].createElement(_reactFit["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _mergeClassNames["default"])(className, "".concat(className, "--").concat(isClockOpen ? 'open' : 'closed'))
      }, /*#__PURE__*/_react["default"].createElement(_reactClock["default"], _extends({
        className: clockClassName,
        renderMinuteHand: maxDetailIndex > 0,
        renderSecondHand: maxDetailIndex > 1,
        value: valueFrom
      }, clockProps))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props6 = this.props,
          className = _this$props6.className,
          disabled = _this$props6.disabled;
      var _this$state4 = this.state,
          isCalendarOpen = _this$state4.isCalendarOpen,
          isClockOpen = _this$state4.isClockOpen;
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: (0, _mergeClassNames["default"])(baseClassName, "".concat(baseClassName, "--").concat(isCalendarOpen || isClockOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className)
      }, this.eventProps, {
        onFocus: this.onFocus,
        ref: function ref(_ref) {
          if (!_ref) {
            return;
          }

          _this3.wrapper = _ref;
        }
      }), this.renderInputs(), this.renderCalendar(), this.renderClock());
    }
  }, {
    key: "eventProps",
    get: function get() {
      return (0, _makeEventProps["default"])(this.props);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextState = {};

      if (nextProps.isCalendarOpen !== prevState.isCalendarOpenProps) {
        nextState.isCalendarOpen = nextProps.isCalendarOpen;
        nextState.isCalendarOpenProps = nextProps.isCalendarOpen;
      }

      if (nextProps.isClockOpen !== prevState.isClockOpenProps) {
        nextState.isClockOpen = nextProps.isClockOpen;
        nextState.isClockOpenProps = nextProps.isClockOpen;
      }

      return nextState;
    }
  }]);

  return DateTimePicker;
}(_react.PureComponent);

exports["default"] = DateTimePicker;
var iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 19,
  height: 19,
  viewBox: '0 0 19 19',
  stroke: 'black',
  strokeWidth: 2
};

var CalendarIcon = /*#__PURE__*/_react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__calendar-button__icon ").concat(baseClassName, "__button__icon")
}), /*#__PURE__*/_react["default"].createElement("rect", {
  fill: "none",
  height: "15",
  width: "15",
  x: "2",
  y: "2"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "6",
  x2: "6",
  y1: "0",
  y2: "4"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "13",
  x2: "13",
  y1: "0",
  y2: "4"
}));

var ClearIcon = /*#__PURE__*/_react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon")
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "4",
  x2: "15",
  y1: "4",
  y2: "15"
}), /*#__PURE__*/_react["default"].createElement("line", {
  x1: "15",
  x2: "4",
  y1: "4",
  y2: "15"
}));

DateTimePicker.defaultProps = {
  calendarIcon: CalendarIcon,
  clearIcon: ClearIcon,
  closeWidgets: true,
  isCalendarOpen: null,
  isClockOpen: null,
  maxDetail: 'minute'
};

var isValue = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]);

DateTimePicker.propTypes = {
  amPmAriaLabel: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  calendarAriaLabel: _propTypes["default"].string,
  calendarClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  calendarIcon: _propTypes["default"].node,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  clearAriaLabel: _propTypes["default"].string,
  clearIcon: _propTypes["default"].node,
  clockClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  closeWidgets: _propTypes["default"].bool,
  dayAriaLabel: _propTypes["default"].string,
  dayPlaceholder: _propTypes["default"].string,
  disableCalendar: _propTypes["default"].bool,
  disableClock: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  hourAriaLabel: _propTypes["default"].string,
  hourPlaceholder: _propTypes["default"].string,
  isCalendarOpen: _propTypes["default"].bool,
  isClockOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDate: _propTypes2.isMaxDate,
  maxDetail: _propTypes["default"].oneOf(allViews),
  minDate: _propTypes2.isMinDate,
  minuteAriaLabel: _propTypes["default"].string,
  minutePlaceholder: _propTypes["default"].string,
  monthAriaLabel: _propTypes["default"].string,
  monthPlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onCalendarClose: _propTypes["default"].func,
  onCalendarOpen: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onClockClose: _propTypes["default"].func,
  onClockOpen: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  secondAriaLabel: _propTypes["default"].string,
  secondPlaceholder: _propTypes["default"].string,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)]),
  yearAriaLabel: _propTypes["default"].string,
  yearPlaceholder: _propTypes["default"].string
};