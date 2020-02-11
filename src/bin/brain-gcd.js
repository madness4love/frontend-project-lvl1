#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandomNum from '../common-func/randomNum';
import game from '..';


const rule = 'Find the greatest common divisor of given numbers.';
const getRightAnswer = (n1, n2) => {
  const geatestNum = Math.max(n1, n2);
  const smallestNum = Math.min(n1, n2);
  const result = geatestNum % smallestNum;

  if (result === 0) {
    return smallestNum;
  }
  return getRightAnswer(smallestNum, result);
};

const getGameData = () => {
  const randNum1 = getRandomNum(100);
  const randNum2 = getRandomNum(50);

  const isCorrectAnswer = getRightAnswer(randNum1, randNum2);
  const isQuestion = `${randNum1} ${randNum2}`;
  return cons(isQuestion, isCorrectAnswer);
};

game(getGameData, rule);
