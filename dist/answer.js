"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.answer = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const answer = () => {
  const ans = _readlineSync.default.question('Your answer: ');

  return ans;
};

exports.answer = answer;