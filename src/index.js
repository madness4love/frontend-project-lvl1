import readlineSync from 'readline-sync';

export default readlineSync;
//rules
export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
//rules

//greeting
const greeting = () => {
  return readlineSync.question('May I have your name? ');
};
export const hello = () => {
  console.log(`Hello, ${greeting()}`);
};
//greeting

//game

const isEven = num => (num % 2 === 0) ? 'yes' : 'no';

export const question = () => {
  for (let i = 1; i < 4; i += 1) {
    const randomNum = Math.ceil(Math.random() * 10);
    console.log(`Question: ${randomNum}`);  
    const answer = () => {
      return readlineSync.question('Your answer: ');
    };
    if (`${answer()}` === isEven(randomNum)) {
      console.log('Correct!');
      if (i === 3) {
        return console.log(`Congratulations, ${greeting()}!`)
      }
    } else {
      return console.log(`'${answer()}' is wrong answer ;(. Correct answer was '${isEven()}'.\n Let's try again, ${greeting()}!`)
    }
  }
};