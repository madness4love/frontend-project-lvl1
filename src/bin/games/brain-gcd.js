#!/usr/bin/env node
import startGame from '../..';
import getGameData from '../../gamesData/gcdGameData';

const rule = 'Find the greatest common divisor of given numbers.';

startGame(getGameData, rule);
