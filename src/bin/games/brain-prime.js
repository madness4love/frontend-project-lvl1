#!/usr/bin/env node
import startGame from '../..';
import getGameData from '../../gamesData/primeGameData';


const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

startGame(getGameData, rule);
