"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatter = getFormatter;

var _getUserLocale = _interopRequireDefault(require("get-user-locale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale["default"])(), options);
  };
}