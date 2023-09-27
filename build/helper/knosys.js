const { resolve: resolvePath } = require('path');
const { readFileSync } = require('fs');

const rootPath = require('./path').getLocalRoot();

module.exports = require(resolvePath(rootPath, JSON.parse(readFileSync(resolvePath(rootPath, '.knosysrc'), 'utf8').toString().trim()).$path));
