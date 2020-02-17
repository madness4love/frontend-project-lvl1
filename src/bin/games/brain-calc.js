#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandomNum from '../../common-func/randomNum';
import startGame from '../..';
import getRandomOperand from '../../common-func/randomOperand';

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
  const randNum1 = getRandomNum(15);
  const randNum2 = getRandomNum(20);
  const operator = getRandomOperand();

  const rightAnswer = getRightAnswer(randNum1, operator, randNum2);
  const question = `${randNum1} ${operator} ${randNum2}`;
  return cons(question, rightAnswer);
};

startGame(getGameData, rule);
