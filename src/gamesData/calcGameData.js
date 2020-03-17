import { cons } from '@hexlet/pairs';
import { getRandomNum, identity } from '../utils';

export default () => {
  const getRandomOperand = () => {
    const randomNum = () => Math.random() * 10;

    let index = identity(randomNum());
    if (index < 4 || index === 0) {
      index = '+';
    } else if (index >= 4 && index < 7) {
      index = '-';
    } else {
      index = '*';
    }
    return index;
  };

  const randNum1 = getRandomNum(1, 15);
  const randNum2 = getRandomNum(2, 20);
  const operator = getRandomOperand();

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
