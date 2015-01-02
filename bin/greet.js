#!/usr/bin/env node

var greet = require("greet");
var parseArgs = require("minimist");

var argv = parseArgs(process.argv.slice(2));

var name = argv._[0] || "";
var drunk = argv.drunk;

console.log(greet(name, drunk));