const { resolveRootPath, getDataSourceRoot, getLocalDataRoot, scanAndSortByAsc, readDirDeeply, readData, saveData, mkdir, ensureDirExists, resolvePathFromParams, readEntity } = require('../helper');

const feedFormat = /^\d{2}\.(\d{2})\s\-\s《\[([^\[\]]+)?\]\(([^\(\)]+)\)》：(.+)$/;

function convertMarkdownToYaml() {
  const localDataRoot = getDataSourceRoot();
  const sourceDir = `${resolveRootPath()}/daily`
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
  const dataSourceDir = `${getDataSourceRoot()}/dailies`
  const paramPath = 'year/month/day';
  const siteDataDir = getLocalDataRoot();
  const siteData = { items: {} };
  const mdDir = `${resolveRootPath()}/daily`;
  const mdData = {};

  readDirDeeply(dataSourceDir, paramPath.split('/'), {}, (_, params) => {
    const entity = readEntity(`${dataSourceDir}/${resolvePathFromParams(paramPath, params)}`);
    const { year, month, day } = params;

    siteData.items[`${year}${month}${day}`] = entity;

    if (!mdData[year]) {
      mdData[year] = {};
    }

    if (!mdData[year][month]) {
      mdData[year][month] = [];
    }

    mdData[year][month].push(`${month}.${day} - 《[${entity.title}](${entity.origin.url})》：${entity.description}`);
  });

  saveData(`${siteDataDir}/dailies.yml`, siteData);

  Object.keys(mdData).forEach(year => {
    const yearDir = `${mdDir}/${year}`;

    ensureDirExists(yearDir, true);

    Object.keys(mdData[year]).forEach(month => {
      saveData(`${yearDir}/${month}.md`, mdData[year][month].join('\n\n') + '\n');
    });
  });
}

function generateDailies(markdownToYaml) {
  if (markdownToYaml === 'init') {
    convertMarkdownToYaml();
  } else {
    generateFromYaml();
  }
}

module.exports = { generateDailies };
