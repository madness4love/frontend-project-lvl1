#!/usr/bin/env node
import readlineSync from '../..';

const name = readlineSync.question('May i have your name? ');
console.log(`Hello, ${name}!`);
