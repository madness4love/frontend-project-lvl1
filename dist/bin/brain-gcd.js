#!/usr/bin/env node
"use strict";

var _pairs = require("@hexlet/pairs");

var _randomNum = _interopRequireDefault(require("../common-func/randomNum"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rule = 'Find the greatest common divisor of given numbers.';

const getRightAnswer = (n1, n2) => {
  const geatestNum = Math.max(n1, n2);
  const smallestNum = Math.min(n1, n2);
  const result = geatestNum % smallestNum;

  if (result === 0) {
    return smallestNum;
  }

  return getRightAnswer(smallestNum, result);
};

const getGameData = () => {
  const randNum1 = (0, _randomNum.default)(100);
  const randNum2 = (0, _randomNum.default)(50);
  const isCorrectAnswer = getRightAnswer(randNum1, randNum2);
  const isQuestion = `${randNum1} ${randNum2}`;
  return (0, _pairs.cons)(isQuestion, isCorrectAnswer);
};

(0, _.default)(getGameData, rule);