#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandomNum from '../common-func/randomNum';
import game from '..';
import getRandomOperand from '../common-func/randomOperand';


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
};

const getGameData = () => {
  const randNum1 = getRandomNum(15);
  const randNum2 = getRandomNum(20);
  const operator = getRandomOperand();

  const isCorrectAnswer = getRightAnswer(randNum1, operator, randNum2);
  const isQuestion = `${randNum1} ${operator} ${randNum2}`;
  return cons(isQuestion, isCorrectAnswer);
};

game(getGameData, rule);
