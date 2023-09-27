const { getLocalRoot, getDataRoot, scanAndSortByAsc, readDirDeeply, readData, saveData, mkdir, resolvePathFromParams, readEntity } = require('../helper');

const feedFormat = /^\d{2}\.(\d{2})\s\-\s《\[([^\[\]]+)?\]\(([^\(\)]+)\)》：(.+)$/;

function convertMarkdownToYaml() {
  const localDataRoot = getDataRoot();
  const sourceDir = `${getLocalRoot()}/daily`
  const paramPath = 'year';

  readDirDeeply(sourceDir, paramPath.split('/'), {}, (_, params) => {
    const collectionPath = `${sourceDir}/${params.year}`;
    const yearDir = `${localDataRoot}/dailies/${params.year}`;

    scanAndSortByAsc(collectionPath).forEach(monthFile => {
      readData(`${collectionPath}/${monthFile}`).split('\n').forEach(feed => {
        if (!feed) {
          return;
        }

        const [full, day, title, url, description] = feed.match(feedFormat);
        const month = monthFile.split('.')[0];
        const dayDir = `${yearDir}/${month}/${day}`;

        mkdir(dayDir);
        saveData(`${dayDir}/metadata.yml`, { title, description, date: `${params.year}-${month}-${day} 00:00:00 +0800`, origin: { url } });
      });
    });
  });
}

function generateFromYaml() {
  const localDataRoot = getDataRoot();
  const dataSourceDir = `${localDataRoot}/dailies`
  const paramPath = 'year/month/day';
  const siteDataDir = `${getLocalRoot()}/site/_data`;
  const siteData = { items: {} };

  readDirDeeply(dataSourceDir, paramPath.split('/'), {}, (_, params) => {
    const entity = readEntity(`${dataSourceDir}/${resolvePathFromParams(paramPath, params)}`);

    siteData.items[`${params.year}${params.month}${params.day}`] = entity;
  });

  saveData(`${siteDataDir}/dailies.yml`, siteData);
}

function generateDailies(markdownToYaml) {
  if (markdownToYaml === 'init') {
    convertMarkdownToYaml();
  } else {
    generateFromYaml();
  }
}

module.exports = { generateDailies };
