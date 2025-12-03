const prompt = require('prompt-sync')({sigint : true});
const fs = require('fs');

const { addWord } = require('./addWord.js');
addWord();