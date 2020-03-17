#!/usr/bin/env node
import startGame from '../..';
import getGameData from '../../gamesData/calcGameData';

const rule = 'What is the result of the expression?';

startGame(getGameData, rule);
