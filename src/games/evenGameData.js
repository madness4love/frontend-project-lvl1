import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getAnswer = (num) => {
  switch (isEven(num)) {
    case true:
      return 'yes';
    default:
      return 'no';
  }
};


const getGameData = () => {
  const randomNum = getRandomNum(1, 100);

  const rightAnswer = getAnswer(randomNum);

  return cons(randomNum, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
