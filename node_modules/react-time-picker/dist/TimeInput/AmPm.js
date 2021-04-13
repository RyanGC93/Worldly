"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AmPm;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

var _dateUtils = require("@wojtekmaj/date-utils");

var _dates = require("../shared/dates");

var _propTypes2 = require("../shared/propTypes");

var _utils = require("../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AmPm(_ref) {
  var ariaLabel = _ref.ariaLabel,
      className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      locale = _ref.locale,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value;
  var amDisabled = minTime && (0, _dates.convert24to12)((0, _dateUtils.getHours)(minTime))[1] === 'pm';
  var pmDisabled = maxTime && (0, _dates.convert24to12)((0, _dateUtils.getHours)(maxTime))[1] === 'am';
  var name = 'amPm';

  var _getAmPmLabels = (0, _utils.getAmPmLabels)(locale),
      _getAmPmLabels2 = _slicedToArray(_getAmPmLabels, 2),
      amLabel = _getAmPmLabels2[0],
      pmLabel = _getAmPmLabels2[1];

  return /*#__PURE__*/_react["default"].createElement("select", {
    "aria-label": ariaLabel,
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(name)),
    disabled: disabled,
    name: name,
    onChange: onChange,
    ref: function ref(_ref2) {
      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    value: value !== null ? value : ''
  }, !value && /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "--"), /*#__PURE__*/_react["default"].createElement("option", {
    disabled: amDisabled,
    value: "am"
  }, amLabel), /*#__PURE__*/_react["default"].createElement("option", {
    disabled: pmDisabled,
    value: "pm"
  }, pmLabel));
}

AmPm.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].oneOf(['am', 'pm'])
};