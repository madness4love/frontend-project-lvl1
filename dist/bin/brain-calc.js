#!/usr/bin/env node
"use strict";

var _pairs = require("@hexlet/pairs");

var _randomNum = _interopRequireDefault(require("../common-func/randomNum"));

var _ = _interopRequireDefault(require(".."));

var _randomOperand = _interopRequireDefault(require("../common-func/randomOperand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rule = 'What is the result of the expression?';

const getRightAnswer = (randNum1, operator, randNum2) => {
  switch (operator) {
    case '+':
      return randNum1 + randNum2;

    case '-':
      return randNum1 - randNum2;

    case '*':
      return randNum1 * randNum2;

    default:
  }

  return false;
};

const getGameData = () => {
  const randNum1 = (0, _randomNum.default)(15);
  const randNum2 = (0, _randomNum.default)(20);
  const operator = (0, _randomOperand.default)();
  const isCorrectAnswer = getRightAnswer(randNum1, operator, randNum2);
  const isQuestion = `${randNum1} ${operator} ${randNum2}`;
  return (0, _pairs.cons)(isQuestion, isCorrectAnswer);
};

(0, _.default)(getGameData, rule);