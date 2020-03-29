import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import getGameEngine from '..';

const rule = 'What number is missing in the progression?';

const getProgression = (start, step) => {
  let result = String(start);
  let index = 10;
  let previousNumber = start;
  let nextNumber = previousNumber + step;

  while (index > 0) {
    result += ` ${nextNumber}`;
    index -= 1;
    previousNumber = nextNumber;
    nextNumber = previousNumber + step;
  }
  return result;
};


const getRightAnswer = (string) => {
  const isProgression = string;
  let answer = '';
  const index = getRandomNum(1, isProgression.length - 1);

  const getStartPositionAndAnswer = (n) => {
    let position = isProgression[n];
    let i = n;
    if (position === ' ') {
      position = isProgression[i + 1];
      while (position !== ' ') {
        i += 1;
        position = isProgression[i];
        if (position === ' ') {
          return answer;
        }
        answer += position;
      }
    }
    return getStartPositionAndAnswer(i + 1);
  };

  getStartPositionAndAnswer(index);
  return answer;
};

const getGameData = () => {
  const randNum1 = getRandomNum(1, 100);
  const randNum2 = getRandomNum(2, 50);
  const progression = getProgression(randNum1, randNum2);

  const rightAnswer = getRightAnswer(progression);
  const question = progression.replace(rightAnswer, '..');
  return cons(question, rightAnswer);
};

export default () => getGameEngine(getGameData, rule);
