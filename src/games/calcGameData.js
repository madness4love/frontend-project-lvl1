import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'What is the result of the expression?';

const getRightAnswer = (num1, oper, num2) => {
  switch (oper) {
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
  const randomOperator = ['+', '-', '*'];
  const length = randomOperator.length - 1;

  const randNum1 = getRandomNum(1, 15);
  const randNum2 = getRandomNum(2, 20);
  const operator = randomOperator[getRandomNum(0, length)];

  const rightAnswer = getRightAnswer(randNum1, operator, randNum2);
  const question = `${randNum1} ${operator} ${randNum2}`;
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
