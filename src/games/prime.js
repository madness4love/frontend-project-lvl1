import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// eslint-disable-next-line consistent-return
const isPrime = (num) => {
  let div = Math.floor(num / 2);

  while (div >= 2) {
    if (num % div === 0) {
      return false;
    }
    if (div === 2 && num % div !== 0) {
      return true;
    }
    div -= 1;
  }
};

const getGameData = () => {
  const randNum = getRandomNum(1, 100);

  const rightAnswer = isPrime(randNum) ? 'yes' : 'no';
  const question = `${randNum}`;
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
