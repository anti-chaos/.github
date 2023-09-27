const { getLocalRoot, getDataRoot, readDirDeeply, saveData, resolvePathFromParams, readEntity } = require('../helper');

function generateAuthors() {
  const localDataRoot = getDataRoot();
  const dataSourceDir = `${localDataRoot}/people`
  const paramPath = 'nickname';
  const siteDataDir = `${getLocalRoot()}/site/_data`;
  const siteData = { items: {} };

  readDirDeeply(dataSourceDir, paramPath.split('/'), {}, (_, params) => {
    const entity = readEntity(`${dataSourceDir}/${resolvePathFromParams(paramPath, params)}`);

    siteData.items[params.nickname] = entity;
  });

  saveData(`${siteDataDir}/people.yml`, siteData);
}

module.exports = { generateAuthors };
