"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("react-calendar/dist/Calendar.css");

require("react-clock/dist/Clock.css");

var _DateTimePicker = _interopRequireDefault(require("./DateTimePicker"));

require("./DateTimePicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// File is created during build phase and placed in dist directory
// eslint-disable-next-line import/no-unresolved
var _default = _DateTimePicker["default"];
exports["default"] = _default;