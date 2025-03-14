const { generateAuthors, generateDailies } = require('../generator');

const generators = {
  author: generateAuthors,
  daily: generateDailies,
};

function generateFiles(moduleName, ...args) {
  const gen = generators[moduleName];

  if (!moduleName || !gen) {
    return;
  }

  gen(...args);
}

module.exports = { execute: generateFiles };
