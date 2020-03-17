#!/usr/bin/env node
import startGame from '../..';
import getGameData from '../../gamesData/evenGameData';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

startGame(getGameData, rule);
