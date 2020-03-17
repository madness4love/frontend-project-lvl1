import { cons } from '@hexlet/pairs';
import { getRandomNum } from '../utils';

export default () => {
  const randNum1 = getRandomNum(10, 100);
  const randNum2 = getRandomNum(5, 50);

  const getRightAnswer = (n1, n2) => {
    const geatestNum = Math.max(n1, n2);
    const smallestNum = Math.min(n1, n2);
    const result = geatestNum % smallestNum;

    if (result === 0) {
      return smallestNum;
    }
    return getRightAnswer(smallestNum, result);
  };

  const rightAnswer = getRightAnswer(randNum1, randNum2);
  const question = `${randNum1} ${randNum2}`;
  return cons(question, rightAnswer);
};
