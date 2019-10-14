import readlineSync from 'readline-sync';
import { greeting } from './greeting';
import { answer } from './answer';
import { identity } from './identity';

export default readlineSync;
// rules
export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
// rules

// game
const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

// eslint-disable-next-line consistent-return
export const game = () => {
  const name = identity(greeting());
  console.log(`Hello, ${name}`);

  for (let i = 1; i < 4; i += 1) {
    const randomNum = Math.ceil(Math.random() * 10);
    console.log(`Question: ${randomNum}`);
    const ans = identity(answer());
    if (`${ans}` === isEven(randomNum)) {
      console.log('Correct!');
      if (i === 3) {
        return console.log(`Congratulations, ${name}!`);
      }
    } else {
      return console.log(`'${ans}' is wrong answer ;(. Correct answer was '${isEven(randomNum)}'.\n Let's try again, ${name}!`);
    }
  }
};
