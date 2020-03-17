import { cons } from '@hexlet/pairs';
import { getRandomNum } from '../utils';

export default () => {
  const randNum = getRandomNum(1, 100);

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

  const rightAnswer = getRightAnswer(randNum);
  const question = `${randNum}`;
  return cons(question, rightAnswer);
};
