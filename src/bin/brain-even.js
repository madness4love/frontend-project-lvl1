#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import game from '..';
import getRandomNum from '../common-func/randomNum';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

const getGameData = () => {
  const randomNum = getRandomNum(100);

  const isRightAnswer = isEven(randomNum);
  return cons(randomNum, isRightAnswer);
};

game(getGameData, rule);
