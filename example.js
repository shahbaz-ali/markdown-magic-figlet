"use strict";

const path = require('path');
const markdownMagic = require('markdown-magic');
const { FIGLET } = require('./index.js');

const config = {
  transforms: {
    FIGLET: FIGLET({ variables: { foo: 'bar' } }),
  },
};

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
