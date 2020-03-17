#!/usr/bin/env node
"use strict";

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = _.default.question('May i have your name? ');

console.log(`Hello, ${name}!`);