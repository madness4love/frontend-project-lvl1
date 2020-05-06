import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 2) {
    return false;
  }

  const halfOfNum = Math.ceil(num / 2);

  for (let div = 2; div <= halfOfNum; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};


const getGameData = () => {
  const randNum = getRandomNum(1, 100);

  const rightAnswer = isPrime(randNum) ? 'yes' : 'no';
  const question = String(randNum);
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
