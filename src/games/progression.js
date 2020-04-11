import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'What number is missing in the progression?';

const getProgression = (start, step) => {
  let result = String(start);
  let index = 1;
  const numberOfDigit = 10;

  while (index < numberOfDigit) {
    const nextNumber = start + step * index;
    result += ` ${nextNumber}`;
    index += 1;
  }
  return result;
};

const getGameData = () => {
  const randNum1 = getRandomNum(1, 100);
  const randNum2 = getRandomNum(2, 50);
  const index = getRandomNum(1, 10);
  const progression = getProgression(randNum1, randNum2);

  const rightAnswer = randNum1 + randNum2 * index;
  const question = progression.replace(rightAnswer, '..');
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
