import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (n1, n2) => {
  const greatestNum = Math.max(n1, n2);
  const smallestNum = Math.min(n1, n2);
  const result = greatestNum % smallestNum;

  if (result === 0) {
    return smallestNum;
  }
  return getGcd(smallestNum, result);
};

const getGameData = () => {
  const randNum1 = getRandomNum(10, 100);
  const randNum2 = getRandomNum(5, 50);

  const rightAnswer = String(getGcd(randNum1, randNum2));
  const question = `${randNum1} ${randNum2}`;
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
