"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SecondInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateUtils = require("@wojtekmaj/date-utils");

var _Input = _interopRequireDefault(require("./Input"));

var _propTypes2 = require("../shared/propTypes");

var _utils = require("../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SecondInput(_ref) {
  var hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      minute = _ref.minute,
      _ref$showLeadingZeros = _ref.showLeadingZeros,
      showLeadingZeros = _ref$showLeadingZeros === void 0 ? true : _ref$showLeadingZeros,
      otherProps = _objectWithoutProperties(_ref, ["hour", "maxTime", "minTime", "minute", "showLeadingZeros"]);

  function isSameMinute(date) {
    return date && hour === (0, _dateUtils.getHours)(date).toString() && minute === (0, _dateUtils.getMinutes)(date).toString();
  }

  var maxSecond = (0, _utils.safeMin)(59, isSameMinute(maxTime) && (0, _dateUtils.getSeconds)(maxTime));
  var minSecond = (0, _utils.safeMax)(0, isSameMinute(minTime) && (0, _dateUtils.getSeconds)(minTime));
  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    max: maxSecond,
    min: minSecond,
    name: "second",
    showLeadingZeros: showLeadingZeros
  }, otherProps));
}

SecondInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].string,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  minute: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].string
};