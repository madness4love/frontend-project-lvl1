import { cons, cdr, car } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'Find the greatest common divisor of given numbers.';

/* const getRightAnswer = (n1, n2) => {
  const geatestNum = Math.max(n1, n2);
  const smallestNum = Math.min(n1, n2);
  const result = geatestNum % smallestNum;

  if (result === 0) {
    return smallestNum;
  }
  return getRightAnswer(smallestNum, result);
}; */

const getGcd = (n1, n2) => {
  const geatestNum = Math.max(n1, n2);
  const smallestNum = Math.min(n1, n2);

  const pairOfNumbers = cons(geatestNum, smallestNum);
  const result = car(pairOfNumbers) % cdr(pairOfNumbers);

  if (result === 0) {
    return cdr(pairOfNumbers);
  }
  return getGcd(cdr(pairOfNumbers), result);
};

const getGameData = () => {
  const randNum1 = getRandomNum(10, 100);
  const randNum2 = getRandomNum(5, 50);

  const rightAnswer = getGcd(randNum1, randNum2);
  const question = `${randNum1} ${randNum2}`;
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
