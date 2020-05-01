import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (start, step) => {
  let result = String(start);

  for (let index = 1; index < progressionLength; index += 1) {
    const nextNumber = start + step * index;
    result = `${result} ${nextNumber}`;
  }
  return result;
};

const getGameData = () => {
  const startDigit = getRandomNum(1, 100);
  const step = getRandomNum(2, 50);
  const hideElementPosition = getRandomNum(1, progressionLength);
  const progression = getProgression(startDigit, step);

  const rightAnswer = String(startDigit + step * hideElementPosition);
  const question = progression.replace(rightAnswer, '..');
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
