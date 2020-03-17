#!/usr/bin/env node
import startGame from '../..';
import getGameData from '../../gamesData/progressionGameData';

const rule = 'What number is missing in the progression?';

startGame(getGameData, rule);
