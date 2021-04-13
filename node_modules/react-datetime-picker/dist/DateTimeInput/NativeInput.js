"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NativeInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateUtils = require("@wojtekmaj/date-utils");

var _propTypes2 = require("../shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NativeInput(_ref) {
  var ariaLabel = _ref.ariaLabel,
      disabled = _ref.disabled,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value,
      valueType = _ref.valueType;

  var nativeValueParser = function () {
    switch (valueType) {
      case 'hour':
        return function (receivedValue) {
          return "".concat((0, _dateUtils.getISOLocalDate)(receivedValue), "T").concat((0, _dateUtils.getHours)(receivedValue), ":00");
        };

      case 'minute':
        return function (receivedValue) {
          return "".concat((0, _dateUtils.getISOLocalDate)(receivedValue), "T").concat((0, _dateUtils.getHoursMinutes)(receivedValue));
        };

      case 'second':
        return _dateUtils.getISOLocalDateTime;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  var step = function () {
    switch (valueType) {
      case 'hour':
        return 3600;

      case 'minute':
        return 60;

      case 'second':
        return 1;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return /*#__PURE__*/_react["default"].createElement("input", {
    "aria-label": ariaLabel,
    disabled: disabled,
    max: maxDate ? nativeValueParser(maxDate) : null,
    min: minDate ? nativeValueParser(minDate) : null,
    name: name,
    onChange: onChange,
    onFocus: stopPropagation,
    required: required,
    step: step,
    style: {
      visibility: 'hidden',
      position: 'absolute',
      zIndex: '-999'
    },
    type: "datetime-local",
    value: value ? nativeValueParser(value) : ''
  });
}

NativeInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]),
  valueType: _propTypes2.isValueType
};