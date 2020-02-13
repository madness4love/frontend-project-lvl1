#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandomNum from '../common-func/randomNum';
import game from '..';

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
  const index = getRandomNum(isProgression.length - 1);

  const getStartPosition = (n) => {
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
    return getStartPosition(i + 1);
  };

  getStartPosition(index);
  return answer;
};

const getGameData = () => {
  const randNum1 = getRandomNum(100);
  const randNum2 = getRandomNum(50);
  const progression = getProgression(randNum1, randNum2);

  const isCorrectAnswer = getRightAnswer(progression);
  const isQuestion = progression.replace(isCorrectAnswer, '..');
  return cons(isQuestion, isCorrectAnswer);
};

game(getGameData, rule);
