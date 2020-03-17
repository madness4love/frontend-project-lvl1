import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';

export default () => {
  const randomNum = getRandomNum(1, 100);

  const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

  const rightAnswer = isEven(randomNum);
  return cons(randomNum, rightAnswer);
};
