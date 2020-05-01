import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let div = 2;

  while (num % div !== 0) {
    div += 1;
  }
  return num === div;
};


const getGameData = () => {
  const randNum = getRandomNum(1, 100);

  const rightAnswer = isPrime(randNum) ? 'yes' : 'no';
  const question = String(randNum);
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
