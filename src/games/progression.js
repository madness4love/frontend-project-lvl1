import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'What number is missing in the progression?';

const countOfDigitInProgression = 10;

const getProgression = (start, step) => {
  let result = String(start);

  for (let index = 1; index < countOfDigitInProgression; index += 1) {
    const nextNumber = start + step * index;
    result = `${result} ${nextNumber}`;
  }
  return result;
};

const getGameData = () => {
  const startDigit = getRandomNum(1, 100);
  const step = getRandomNum(2, 50);
  const hideElementPosition = getRandomNum(1, countOfDigitInProgression);
  const progression = getProgression(startDigit, step);

  const rightAnswer = startDigit + step * hideElementPosition;
  const question = progression.replace(rightAnswer, '..');
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
