import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (gameDataPair, rule) => {
  console.log('Welcome to the Brain games!');
  console.log(rule);
  console.log('');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const number0fRounds = 3;

  for (let i = 1; i <= number0fRounds; i += 1) {
    const gameData = gameDataPair();
    const question = car(gameData);
    const rightAnswer = cdr(gameData);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congradulation, ${userName}!`);
};
