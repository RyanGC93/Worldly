"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert12to24 = convert12to24;
exports.convert24to12 = convert24to12;

function convert12to24(hour12, amPm) {
  var hour24 = parseInt(hour12, 10);

  if (amPm === 'am' && hour24 === 12) {
    hour24 = 0;
  } else if (amPm === 'pm' && hour24 < 12) {
    hour24 += 12;
  }

  return hour24;
}

function convert24to12(hour24) {
  var hour12 = hour24 % 12 || 12;
  return [hour12, hour24 < 12 ? 'am' : 'pm'];
}