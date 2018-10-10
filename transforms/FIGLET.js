'use strict';

const findRoot = require('find-root');
const figlet = require('figlet');
const merge = require('lodash/merge');
const template = require('lodash/template');


const ownerApplicationPackage = require(`${findRoot(process.cwd())}/package.json`); // eslint-disable-line import/no-dynamic-require


const wrapWithPre = ({ code = '' }) => `<pre>\n${code}\n</pre>`;


module.exports = ({
  variables
}) => (content, {
  text = '',
  font = 'Standard',
  horizontalLayout = 'default',
  verticalLayout = 'default',
  printDirection = 0,
  showHardBlanks = 'false',
}) => wrapWithPre({
  code: template(text)(merge({}, ownerApplicationPackage, variables)).split(/\\n/).map(textPart => figlet.textSync(template(textPart.trim())(ownerApplicationPackage), {
    font,
    horizontalLayout,
    verticalLayout,
    printDirection,
    showHardBlanks: showHardBlanks === 'true',
  })).join('\n'),
});
