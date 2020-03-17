#!/usr/bin/env node
"use strict";

var _pairs = require("@hexlet/pairs");

var _ = _interopRequireDefault(require("../.."));

var _randomNum = _interopRequireDefault(require("../../common-func/randomNum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = num => num % 2 === 0 ? 'yes' : 'no';

const getGameData = () => {
  const randomNum = (0, _randomNum.default)(100);
  const rightAnswer = isEven(randomNum);
  return (0, _pairs.cons)(randomNum, rightAnswer);
};

(0, _.default)(getGameData, rule);