const { generateDailies } = require('../generator');

const generators = {
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
