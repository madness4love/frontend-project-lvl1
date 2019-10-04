#!/usr/bin/env node
import readlineSync from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = readlineSync.question('May i have your name? ');
console.log(`Hello, ${name}!`);
