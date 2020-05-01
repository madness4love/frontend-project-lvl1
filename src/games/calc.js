import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'What is the result of the expression?';

const getRightAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }
  return false;
};

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const lastIndex = operators.length - 1;

  const randNum1 = getRandomNum(1, 15);
  const randNum2 = getRandomNum(2, 20);
  const operator = operators[getRandomNum(0, lastIndex)];

  const rightAnswer = String(getRightAnswer(randNum1, randNum2, operator));
  const question = `${randNum1} ${operator} ${randNum2}`;
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
