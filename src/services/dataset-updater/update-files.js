const compareAllFiles = require('../dataset-status');
const GoogleDriveClient = require('../google-drive-client');
const logger = require('../../utils/logger');
const md5File = require('md5-file/promise');
const fs = require('fs');

module.exports = async () => {
  const fileStatus = await compareAllFiles();
  const outdatedFiles = fileStatus.filter(file => !file.upToDate);

  if (outdatedFiles.length === 0) {
    logger.info('All files are up to date');
    return
  }

  logger.info(`Outdated files: ${outdatedFiles.length}`);
  const driveClient = new GoogleDriveClient();
  await driveClient.init();
  const downloadPromises = outdatedFiles.map(async file => {
    const outputPath = file.path;
    try {
      await driveClient.downloadFile({ fileId: file.id, outputPath });
      const fileMD5 = await md5File(outputPath);
      fs.writeFileSync(file.md5Path, fileMD5);
      logger.info(`Wrote md5 checksum for file ${file.filename}`);
    } catch(e) {
      logger.error(e) // TODO: Maybe catch download errors and retry?
    }
  });
  // TODO: add try catch for when downloads fail
  await Promise.all(downloadPromises);
  logger.info('All files updated');
};
