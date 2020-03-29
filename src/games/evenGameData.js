import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const randomNum = getRandomNum(1, 100);

  const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

  const rightAnswer = isEven(randomNum);
  return cons(randomNum, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
