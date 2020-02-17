#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandomNum from '../../common-func/randomNum';
import startGame from '../..';


const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRightAnswer = (number) => {
  let answer = '';
  if (number < 4) {
    return 'yes';
  }
  const isPrime = (divisor) => {
    const div = divisor;
    if (number % div === 0) {
      answer = 'no';
      return answer;
    }
    if (div === 2 && number % div !== 0) {
      answer = 'yes';
      return answer;
    }
    return isPrime(div - 1);
  };
  isPrime(Math.floor(number / 2));
  return answer;
};

const getGameData = () => {
  const randNum = getRandomNum(100);

  const rightAnswer = getRightAnswer(randNum);
  const question = `${randNum}`;
  return cons(question, rightAnswer);
};

startGame(getGameData, rule);
