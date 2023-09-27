const { resolve: resolvePath } = require('path');

const localRoot = resolvePath(__dirname, '../..');

function getLocalRoot() {
  return localRoot;
}

function getDataRoot() {
  return `${localRoot}/data`;
}

function resolveDatetimeParamPathFromRef(datetimeRef) {
  const yearStr = datetimeRef.slice(0, 4);
  const monthStr = datetimeRef.slice(4, 6);
  const dayStr = datetimeRef.slice(6, 8);
  const timeStr = datetimeRef.slice(8);

  return [yearStr, monthStr, `${dayStr}-${timeStr}`].join('/');
}

module.exports = { getLocalRoot, getDataRoot, resolveDatetimeParamPathFromRef };
