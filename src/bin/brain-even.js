#!/usr/bin/env node
import { rule, game } from '../games/brain-even-game';
import welcome from '../common-func/welcome';

welcome();
rule();
game();
