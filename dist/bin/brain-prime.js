#!/usr/bin/env node
"use strict";

var _pairs = require("@hexlet/pairs");

var _randomNum = _interopRequireDefault(require("../common-func/randomNum"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRightAnswer = number => {
  let answer = '';

  if (number < 4) {
    return 'yes';
  }

  const isPrime = divisor => {
    const div = divisor;

    if (number % div === 0) {
      answer = 'no';
      return answer;
    }

    if (div === 2 && number % div !== 0) {
      answer = 'yes';
      return answer;
    }

    return isPrime(div - 1);
  };

  isPrime(Math.floor(number / 2));
  return answer;
};

const getGameData = () => {
  const randNum = (0, _randomNum.default)(100);
  const isCorrectAnswer = getRightAnswer(randNum);
  const isQuestion = `${randNum}`;
  return (0, _pairs.cons)(isQuestion, isCorrectAnswer);
};

(0, _.default)(getGameData, rule);