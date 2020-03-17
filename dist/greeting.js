"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = () => {
  const name = _readlineSync.default.question('May I have your name? ');

  return name;
};

exports.greeting = greeting;