"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _identity = _interopRequireDefault(require("./identity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const randomNum = () => Math.random() * 10;

var _default = () => {
  let index = (0, _identity.default)(randomNum());

  if (index < 4 || index === 0) {
    index = '+';
  } else if (index >= 4 && index < 7) {
    index = '-';
  } else {
    index = '*';
  }

  return index;
};

exports.default = _default;