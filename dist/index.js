"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _pairs = require("@hexlet/pairs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (gameDataPair, rule) => {
  console.log('Welcome to the Brain games!');
  console.log(rule);
  console.log('');

  const userName = _readlineSync.default.question('May i have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log('');

  for (let i = 1; i <= 3; i += 1) {
    const gameData = gameDataPair();
    const question = (0, _pairs.car)(gameData);
    const rightAnswer = (0, _pairs.cdr)(gameData);
    console.log(`Question: ${question}`);

    const userAnswer = _readlineSync.default.question('Your answer: ');

    if (String(userAnswer) === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congradulation, ${userName}!`);
};

exports.default = _default;