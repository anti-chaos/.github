const { getLocalRoot, getDataRoot, scanAndSortByAsc, readDirDeeply, readData, saveData, mkdir, readMetadata } = require('../helper');

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
        const dayDir = `${yearDir}/${monthFile.split('.')[0]}/${day}`;

        mkdir(dayDir);
        saveData(`${dayDir}/metadata.yml`, { title, description, origin: { url } });
      });
    });
  });
}

function generateDailies(markdownToYaml) {
  if (markdownToYaml === 'init') {
    convertMarkdownToYaml();
  }
}

module.exports = { generateDailies };
