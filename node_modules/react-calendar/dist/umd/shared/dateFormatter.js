"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatWeekday = exports.formatShortWeekday = exports.formatYear = exports.formatMonthYear = exports.formatMonth = exports.formatLongDate = exports.formatDate = void 0;

var _getUserLocale = _interopRequireDefault(require("get-user-locale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale["default"])(), options);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

var formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatYearOptions = {
  year: 'numeric'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatDate = getSafeFormatter(formatDateOptions);
exports.formatDate = formatDate;
var formatLongDate = getSafeFormatter(formatLongDateOptions);
exports.formatLongDate = formatLongDate;
var formatMonth = getSafeFormatter(formatMonthOptions);
exports.formatMonth = formatMonth;
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
exports.formatMonthYear = formatMonthYear;
var formatYear = getSafeFormatter(formatYearOptions);
exports.formatYear = formatYear;
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
exports.formatShortWeekday = formatShortWeekday;
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
exports.formatWeekday = formatWeekday;