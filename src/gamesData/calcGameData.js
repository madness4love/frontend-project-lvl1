import { cons } from '@hexlet/pairs';
import { getRandomNum } from '../utils';

export default () => {
  const randomOperator = ['+', '-', '*'];

  const randNum1 = getRandomNum(1, 15);
  const randNum2 = getRandomNum(2, 20);
  const operator = randomOperator[getRandomNum(0, 2)];

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

  const rightAnswer = getRightAnswer(randNum1, operator, randNum2);
  const question = `${randNum1} ${operator} ${randNum2}`;
  return cons(question, rightAnswer);
};
