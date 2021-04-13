"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateUtils = require("@wojtekmaj/date-utils");

var _DayInput = _interopRequireDefault(require("react-date-picker/dist/DateInput/DayInput"));

var _MonthInput = _interopRequireDefault(require("react-date-picker/dist/DateInput/MonthInput"));

var _MonthSelect = _interopRequireDefault(require("react-date-picker/dist/DateInput/MonthSelect"));

var _YearInput = _interopRequireDefault(require("react-date-picker/dist/DateInput/YearInput"));

var _Hour12Input = _interopRequireDefault(require("react-time-picker/dist/TimeInput/Hour12Input"));

var _Hour24Input = _interopRequireDefault(require("react-time-picker/dist/TimeInput/Hour24Input"));

var _MinuteInput = _interopRequireDefault(require("react-time-picker/dist/TimeInput/MinuteInput"));

var _SecondInput = _interopRequireDefault(require("react-time-picker/dist/TimeInput/SecondInput"));

var _AmPm = _interopRequireDefault(require("react-time-picker/dist/TimeInput/AmPm"));

var _Divider = _interopRequireDefault(require("./Divider"));

var _NativeInput = _interopRequireDefault(require("./DateTimeInput/NativeInput"));

var _dateFormatter = require("./shared/dateFormatter");

var _dates = require("./shared/dates");

var _propTypes2 = require("./shared/propTypes");

var _utils = require("./shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
var allViews = ['hour', 'minute', 'second'];

function toDate(value) {
  if (value instanceof Date) {
    return value;
  }

  return new Date(value);
}

function datesAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
}

function isSameDate(date, year, month, day) {
  return year === (0, _dateUtils.getYear)(date).toString() && month === (0, _dateUtils.getMonthHuman)(date).toString() && day === (0, _dateUtils.getDate)(date).toString();
}

function getValue(value, index) {
  if (!value) {
    return null;
  }

  var rawValue = Array.isArray(value) && value.length === 2 ? value[index] : value;

  if (!rawValue) {
    return null;
  }

  var valueDate = toDate(rawValue);

  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueDate;
}

function getDetailValue(_ref, index) {
  var value = _ref.value,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate;
  var valuePiece = getValue(value, index);

  if (!valuePiece) {
    return null;
  }

  return (0, _utils.between)(valuePiece, minDate, maxDate);
}

var getDetailValueFrom = function getDetailValueFrom(args) {
  return getDetailValue(args, 0);
};

var getDetailValueTo = function getDetailValueTo(args) {
  return getDetailValue(args, 1);
};

function isValidInput(element) {
  return element.tagName === 'INPUT' && element.type === 'number';
}

function findInput(element, property) {
  var nextElement = element;

  do {
    nextElement = nextElement[property];
  } while (nextElement && !isValidInput(nextElement));

  return nextElement;
}

function focus(element) {
  if (element) {
    element.focus();
  }
}

function _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
  var usedFunctions = [];
  var pattern = new RegExp(Object.keys(elementFunctions).map(function (el) {
    return "".concat(el, "+");
  }).join('|'), 'g');
  var matches = placeholder.match(pattern);
  return placeholder.split(pattern).reduce(function (arr, element, index) {
    var divider = element &&
    /*#__PURE__*/
    // eslint-disable-next-line react/no-array-index-key
    _react["default"].createElement(_Divider["default"], {
      key: "separator_".concat(index)
    }, element);

    var res = [].concat(_toConsumableArray(arr), [divider]);
    var currentMatch = matches && matches[index];

    if (currentMatch) {
      var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function (elementFunction) {
        return currentMatch.match(elementFunction);
      })];

      if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
        res.push(currentMatch);
      } else {
        res.push(renderFunction(currentMatch, index));
        usedFunctions.push(renderFunction);
      }
    }

    return res;
  }, []);
}

var DateTimeInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateTimeInput, _PureComponent);

  var _super = _createSuper(DateTimeInput);

  function DateTimeInput() {
    var _this;

    _classCallCheck(this, DateTimeInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      amPm: null,
      year: null,
      month: null,
      day: null,
      hour: null,
      minute: null,
      second: null
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      if (event.target === event.currentTarget) {
        // Wrapper was directly clicked
        var firstInput = event.target.children[1];
        focus(firstInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case _this.dateDivider:
        case _this.timeDivider:
          {
            event.preventDefault();
            var input = event.target;
            var property = event.key === 'ArrowLeft' ? 'previousElementSibling' : 'nextElementSibling';
            var nextInput = findInput(input, property);
            focus(nextInput);
            break;
          }

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      var key = event.key,
          input = event.target;
      var isNumberKey = !isNaN(parseInt(key, 10));

      if (!isNumberKey) {
        return;
      }

      var value = input.value;
      var max = input.getAttribute('max');
      /**
       * Given 1, the smallest possible number the user could type by adding another digit is 10.
       * 10 would be a valid value given max = 12, so we won't jump to the next input.
       * However, given 2, smallers possible number would be 20, and thus keeping the focus in
       * this field doesn't make sense.
       */

      if (value * 10 > max || value.length >= max.length) {
        var property = 'nextElementSibling';
        var nextInput = findInput(input, property);
        focus(nextInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      switch (name) {
        case 'hour12':
          {
            _this.setState(function (prevState) {
              return {
                hour: value ? (0, _dates.convert12to24)(parseInt(value, 10), prevState.amPm) : null
              };
            }, _this.onChangeExternal);

            break;
          }

        case 'hour24':
          {
            _this.setState({
              hour: value ? parseInt(value, 10) : null
            }, _this.onChangeExternal);

            break;
          }

        default:
          {
            _this.setState(_defineProperty({}, name, value ? parseInt(value, 10) : null), _this.onChangeExternal);
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeNative", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;

      if (!onChange) {
        return;
      }

      var processedValue = function () {
        if (!value) {
          return null;
        }

        var _value$split = value.split('T'),
            _value$split2 = _slicedToArray(_value$split, 2),
            valueDate = _value$split2[0],
            valueTime = _value$split2[1];

        var _valueDate$split = valueDate.split('-'),
            _valueDate$split2 = _slicedToArray(_valueDate$split, 3),
            yearString = _valueDate$split2[0],
            monthString = _valueDate$split2[1],
            dayString = _valueDate$split2[2];

        var year = parseInt(yearString, 10);
        var monthIndex = parseInt(monthString, 10) - 1 || 0;
        var day = parseInt(dayString, 10) || 1;

        var _valueTime$split = valueTime.split(':'),
            _valueTime$split2 = _slicedToArray(_valueTime$split, 3),
            hourString = _valueTime$split2[0],
            minuteString = _valueTime$split2[1],
            secondString = _valueTime$split2[2];

        var hour = parseInt(hourString, 10) || 0;
        var minute = parseInt(minuteString, 10) || 0;
        var second = parseInt(secondString, 10) || 0;
        var proposedValue = new Date();
        proposedValue.setFullYear(year, monthIndex, day);
        proposedValue.setHours(hour, minute, second, 0);
        return proposedValue;
      }();

      onChange(processedValue, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeAmPm", function (event) {
      var value = event.target.value;

      _this.setState({
        amPm: value
      }, _this.onChangeExternal);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeExternal", function () {
      var onChange = _this.props.onChange;

      if (!onChange) {
        return;
      }

      var formElements = [_this.dayInput, _this.monthInput, _this.yearInput, _this.hour12Input, _this.hour24Input, _this.minuteInput, _this.secondInput, _this.amPmInput].filter(Boolean);
      var formElementsWithoutSelect = formElements.slice(0, -1);
      var values = {};
      formElements.forEach(function (formElement) {
        values[formElement.name] = formElement.value;
      });

      if (formElementsWithoutSelect.every(function (formElement) {
        return !formElement.value;
      })) {
        onChange(null, false);
      } else if (formElements.every(function (formElement) {
        return formElement.value && formElement.validity.valid;
      })) {
        var year = parseInt(values.year, 10);
        var monthIndex = parseInt(values.month, 10) - 1 || 0;
        var day = parseInt(values.day || 1, 10);
        var hour = parseInt(values.hour24 || (0, _dates.convert12to24)(values.hour12, values.amPm) || 0, 10);
        var minute = parseInt(values.minute || 0, 10);
        var second = parseInt(values.second || 0, 10);
        var proposedValue = new Date();
        proposedValue.setFullYear(year, monthIndex, day);
        proposedValue.setHours(hour, minute, second, 0);
        var processedValue = proposedValue;
        onChange(processedValue, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderDay", function (currentMatch, index) {
      var _this$props = _this.props,
          autoFocus = _this$props.autoFocus,
          dayAriaLabel = _this$props.dayAriaLabel,
          dayPlaceholder = _this$props.dayPlaceholder,
          showLeadingZeros = _this$props.showLeadingZeros;
      var _this$state = _this.state,
          day = _this$state.day,
          month = _this$state.month,
          year = _this$state.year;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
      return /*#__PURE__*/_react["default"].createElement(_DayInput["default"], _extends({
        key: "day"
      }, _this.commonInputProps, {
        ariaLabel: dayAriaLabel,
        autoFocus: index === 0 && autoFocus,
        month: month,
        placeholder: dayPlaceholder,
        showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
        value: day,
        year: year
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonth", function (currentMatch, index) {
      var _this$props2 = _this.props,
          autoFocus = _this$props2.autoFocus,
          locale = _this$props2.locale,
          monthAriaLabel = _this$props2.monthAriaLabel,
          monthPlaceholder = _this$props2.monthPlaceholder,
          showLeadingZeros = _this$props2.showLeadingZeros;
      var _this$state2 = _this.state,
          month = _this$state2.month,
          year = _this$state2.year;

      if (currentMatch && currentMatch.length > 4) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      if (currentMatch.length > 2) {
        return /*#__PURE__*/_react["default"].createElement(_MonthSelect["default"], _extends({
          key: "month"
        }, _this.commonInputProps, {
          ariaLabel: monthAriaLabel,
          autoFocus: index === 0 && autoFocus,
          locale: locale,
          placeholder: monthPlaceholder,
          "short": currentMatch.length === 3,
          value: month,
          year: year
        }));
      }

      var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
      return /*#__PURE__*/_react["default"].createElement(_MonthInput["default"], _extends({
        key: "month"
      }, _this.commonInputProps, {
        ariaLabel: monthAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: monthPlaceholder,
        showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
        value: month,
        year: year
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderYear", function (currentMatch, index) {
      var _this$props3 = _this.props,
          autoFocus = _this$props3.autoFocus,
          yearAriaLabel = _this$props3.yearAriaLabel,
          yearPlaceholder = _this$props3.yearPlaceholder;
      var year = _this.state.year;
      return /*#__PURE__*/_react["default"].createElement(_YearInput["default"], _extends({
        key: "year"
      }, _this.commonInputProps, {
        ariaLabel: yearAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: yearPlaceholder,
        value: year,
        valueType: "day"
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour", function (currentMatch, index) {
      if (/h/.test(currentMatch)) {
        return _this.renderHour12(currentMatch, index);
      }

      return _this.renderHour24(currentMatch, index);
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour12", function (currentMatch, index) {
      var _this$props4 = _this.props,
          autoFocus = _this$props4.autoFocus,
          hourAriaLabel = _this$props4.hourAriaLabel,
          hourPlaceholder = _this$props4.hourPlaceholder;
      var _this$state3 = _this.state,
          amPm = _this$state3.amPm,
          hour = _this$state3.hour;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return /*#__PURE__*/_react["default"].createElement(_Hour12Input["default"], _extends({
        key: "hour12"
      }, _this.commonInputProps, {
        amPm: amPm,
        ariaLabel: hourAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: hourPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: hour
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour24", function (currentMatch, index) {
      var _this$props5 = _this.props,
          autoFocus = _this$props5.autoFocus,
          hourAriaLabel = _this$props5.hourAriaLabel,
          hourPlaceholder = _this$props5.hourPlaceholder;
      var hour = _this.state.hour;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return /*#__PURE__*/_react["default"].createElement(_Hour24Input["default"], _extends({
        key: "hour24"
      }, _this.commonInputProps, {
        ariaLabel: hourAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: hourPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: hour
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMinute", function (currentMatch, index) {
      var _this$props6 = _this.props,
          autoFocus = _this$props6.autoFocus,
          minuteAriaLabel = _this$props6.minuteAriaLabel,
          minutePlaceholder = _this$props6.minutePlaceholder;
      var _this$state4 = _this.state,
          hour = _this$state4.hour,
          minute = _this$state4.minute;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return /*#__PURE__*/_react["default"].createElement(_MinuteInput["default"], _extends({
        key: "minute"
      }, _this.commonInputProps, {
        ariaLabel: minuteAriaLabel,
        autoFocus: index === 0 && autoFocus,
        hour: hour,
        placeholder: minutePlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: minute
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSecond", function (currentMatch, index) {
      var _this$props7 = _this.props,
          autoFocus = _this$props7.autoFocus,
          secondAriaLabel = _this$props7.secondAriaLabel,
          secondPlaceholder = _this$props7.secondPlaceholder;
      var _this$state5 = _this.state,
          hour = _this$state5.hour,
          minute = _this$state5.minute,
          second = _this$state5.second;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch ? currentMatch.length === 2 : true;
      return /*#__PURE__*/_react["default"].createElement(_SecondInput["default"], _extends({
        key: "second"
      }, _this.commonInputProps, {
        ariaLabel: secondAriaLabel,
        autoFocus: index === 0 && autoFocus,
        hour: hour,
        minute: minute,
        placeholder: secondPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: second
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderAmPm", function (currentMatch, index) {
      var _this$props8 = _this.props,
          amPmAriaLabel = _this$props8.amPmAriaLabel,
          autoFocus = _this$props8.autoFocus,
          locale = _this$props8.locale;
      var amPm = _this.state.amPm;
      return /*#__PURE__*/_react["default"].createElement(_AmPm["default"], _extends({
        key: "ampm"
      }, _this.commonInputProps, {
        ariaLabel: amPmAriaLabel,
        autoFocus: index === 0 && autoFocus,
        locale: locale,
        onChange: _this.onChangeAmPm,
        value: amPm
      }));
    });

    return _this;
  }

  _createClass(DateTimeInput, [{
    key: "renderCustomInputs",
    value: function renderCustomInputs() {
      var placeholder = this.placeholder;
      var format = this.props.format;
      var elementFunctions = {
        d: this.renderDay,
        M: this.renderMonth,
        y: this.renderYear,
        h: this.renderHour,
        H: this.renderHour,
        m: this.renderMinute,
        s: this.renderSecond,
        a: this.renderAmPm
      };
      var allowMultipleInstances = typeof format !== 'undefined';
      return _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
    }
  }, {
    key: "renderNativeInput",
    value: function renderNativeInput() {
      var _this$props9 = this.props,
          disabled = _this$props9.disabled,
          maxDate = _this$props9.maxDate,
          minDate = _this$props9.minDate,
          name = _this$props9.name,
          nativeInputAriaLabel = _this$props9.nativeInputAriaLabel,
          required = _this$props9.required;
      var value = this.state.value;
      return /*#__PURE__*/_react["default"].createElement(_NativeInput["default"], {
        key: "time",
        ariaLabel: nativeInputAriaLabel,
        disabled: disabled,
        maxDate: maxDate || defaultMaxDate,
        minDate: minDate || defaultMinDate,
        name: name,
        onChange: this.onChangeNative,
        required: required,
        value: value,
        valueType: this.valueType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      /* eslint-disable jsx-a11y/click-events-have-key-events */

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        onClick: this.onClick
      }, this.renderNativeInput(), this.renderCustomInputs());
    }
  }, {
    key: "formatTime",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      var options = {
        hour: 'numeric'
      };
      var level = allViews.indexOf(maxDetail);

      if (level >= 1) {
        options.minute = 'numeric';
      }

      if (level >= 2) {
        options.second = 'numeric';
      }

      return (0, _dateFormatter.getFormatter)(options);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "formatNumber",
    get: function get() {
      var options = {
        useGrouping: false
      };
      return (0, _dateFormatter.getFormatter)(options);
    }
  }, {
    key: "dateDivider",
    get: function get() {
      return this.datePlaceholder.match(/[^0-9a-z]/i)[0];
    }
  }, {
    key: "timeDivider",
    get: function get() {
      return this.timePlaceholder.match(/[^0-9a-z]/i)[0];
    }
  }, {
    key: "datePlaceholder",
    get: function get() {
      var locale = this.props.locale;
      var year = 2017;
      var monthIndex = 11;
      var day = 11;
      var date = new Date(year, monthIndex, day);
      var formattedDate = (0, _dateFormatter.formatDate)(locale, date);
      var datePieces = ['year', 'month', 'day'];
      var datePieceReplacements = ['y', 'M', 'd'];

      function formatDatePiece(name, dateToFormat) {
        return (0, _dateFormatter.getFormatter)(_defineProperty({
          useGrouping: false
        }, name, 'numeric'))(locale, dateToFormat).match(/\d{1,}/);
      }

      var placeholder = formattedDate;
      datePieces.forEach(function (datePiece, index) {
        var formattedDatePiece = formatDatePiece(datePiece, date);
        var datePieceReplacement = datePieceReplacements[index];
        placeholder = placeholder.replace(formattedDatePiece, datePieceReplacement);
      });
      return placeholder;
    }
  }, {
    key: "timePlaceholder",
    get: function get() {
      var locale = this.props.locale;
      var hour24 = 21;
      var hour12 = 9;
      var minute = 13;
      var second = 14;
      var date = new Date(2017, 0, 1, hour24, minute, second);
      return this.formatTime(locale, date).replace(this.formatNumber(locale, hour12), 'h').replace(this.formatNumber(locale, hour24), 'H').replace(this.formatNumber(locale, minute), 'mm').replace(this.formatNumber(locale, second), 'ss').replace(new RegExp((0, _utils.getAmPmLabels)(locale).join('|')), 'a');
    }
  }, {
    key: "placeholder",
    get: function get() {
      var format = this.props.format;

      if (format) {
        return format;
      }

      return "".concat(this.datePlaceholder, "\xA0").concat(this.timePlaceholder);
    }
  }, {
    key: "maxTime",
    get: function get() {
      var maxDate = this.props.maxDate;

      if (!maxDate) {
        return null;
      }

      var _this$state6 = this.state,
          year = _this$state6.year,
          month = _this$state6.month,
          day = _this$state6.day;

      if (!isSameDate(maxDate, year, month, day)) {
        return null;
      }

      return (0, _dateUtils.getHoursMinutesSeconds)(maxDate);
    }
  }, {
    key: "minTime",
    get: function get() {
      var minDate = this.props.minDate;

      if (!minDate) {
        return null;
      }

      var _this$state7 = this.state,
          year = _this$state7.year,
          month = _this$state7.month,
          day = _this$state7.day;

      if (!isSameDate(minDate, year, month, day)) {
        return null;
      }

      return (0, _dateUtils.getHoursMinutesSeconds)(minDate);
    }
  }, {
    key: "commonInputProps",
    get: function get() {
      var _this2 = this;

      var _this$props10 = this.props,
          className = _this$props10.className,
          disabled = _this$props10.disabled,
          isWidgetOpen = _this$props10.isWidgetOpen,
          maxDate = _this$props10.maxDate,
          minDate = _this$props10.minDate,
          required = _this$props10.required;
      return {
        className: className,
        disabled: disabled,
        maxDate: maxDate || defaultMaxDate,
        minDate: minDate || defaultMinDate,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        placeholder: '--',
        // This is only for showing validity when editing
        required: required || isWidgetOpen,
        itemRef: function itemRef(ref, name) {
          // Save a reference to each input field
          _this2["".concat(name, "Input")] = ref;
        }
      };
    }
  }, {
    key: "commonTimeInputProps",
    get: function get() {
      var maxTime = this.maxTime,
          minTime = this.minTime;
      return {
        maxTime: maxTime,
        minTime: minTime
      };
    }
    /**
     * Returns value type that can be returned with currently applied settings.
     */

  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return maxDetail;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var minDate = nextProps.minDate,
          maxDate = nextProps.maxDate;
      var nextState = {};
      /**
       * If isWidgetOpen flag has changed, we have to update it.
       * It's saved in state purely for use in getDerivedStateFromProps.
       */

      if (nextProps.isWidgetOpen !== prevState.isWidgetOpen) {
        nextState.isWidgetOpen = nextProps.isWidgetOpen;
      }
      /**
       * If the next value is different from the current one  (with an exception of situation in
       * which values provided are limited by minDate and maxDate so that the dates are the same),
       * get a new one.
       */


      var nextValue = getDetailValueFrom({
        value: nextProps.value,
        minDate: minDate,
        maxDate: maxDate
      });
      var values = [nextValue, prevState.value];

      if ( // Toggling calendar visibility resets values
      nextState.isCalendarOpen // Flag was toggled
      || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getDetailValueFrom({
          value: value,
          minDate: minDate,
          maxDate: maxDate
        });
      }))) || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getDetailValueTo({
          value: value,
          minDate: minDate,
          maxDate: maxDate
        });
      })))) {
        if (nextValue) {
          var _convert24to = (0, _dates.convert24to12)((0, _dateUtils.getHours)(nextValue));

          var _convert24to2 = _slicedToArray(_convert24to, 2);

          nextState.amPm = _convert24to2[1];
          nextState.year = (0, _dateUtils.getYear)(nextValue).toString();
          nextState.month = (0, _dateUtils.getMonthHuman)(nextValue).toString();
          nextState.day = (0, _dateUtils.getDate)(nextValue).toString();
          nextState.hour = (0, _dateUtils.getHours)(nextValue).toString();
          nextState.minute = (0, _dateUtils.getMinutes)(nextValue).toString();
          nextState.second = (0, _dateUtils.getSeconds)(nextValue).toString();
        } else {
          nextState.amPm = null;
          nextState.year = null;
          nextState.month = null;
          nextState.day = null;
          nextState.hour = null;
          nextState.minute = null;
          nextState.second = null;
        }

        nextState.value = nextValue;
      }

      return nextState;
    }
  }]);

  return DateTimeInput;
}(_react.PureComponent);

exports["default"] = DateTimeInput;
DateTimeInput.defaultProps = {
  maxDetail: 'minute',
  name: 'datetime'
};

var isValue = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]);

DateTimeInput.propTypes = {
  amPmAriaLabel: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string.isRequired,
  dayAriaLabel: _propTypes["default"].string,
  dayPlaceholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  hourAriaLabel: _propTypes["default"].string,
  hourPlaceholder: _propTypes["default"].string,
  isWidgetOpen: _propTypes["default"].bool,
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
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  secondAriaLabel: _propTypes["default"].string,
  secondPlaceholder: _propTypes["default"].string,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)]),
  yearAriaLabel: _propTypes["default"].string,
  yearPlaceholder: _propTypes["default"].string
};