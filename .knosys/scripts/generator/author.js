const { getLocalDataRoot, getDataSourceRoot, readDirDeeply, saveData, resolvePathFromParams, readEntity } = require('../helper');

function generateAuthors() {
  const dataSourceDir = `${getDataSourceRoot()}/people`
  const paramPath = 'nickname';
  const siteData = { items: {} };

  readDirDeeply(dataSourceDir, paramPath.split('/'), {}, (_, params) => {
    const entity = readEntity(`${dataSourceDir}/${resolvePathFromParams(paramPath, params)}`);

    siteData.items[params.nickname] = entity;
  });

  saveData(`${getLocalDataRoot()}/people.yml`, siteData);
}

module.exports = { generateAuthors };
