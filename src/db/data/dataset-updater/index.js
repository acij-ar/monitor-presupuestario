const compareAllFiles = require('../dataset-status');
const GoogleDriveClient = require('../google-drive-client');
const logger = require('../../../utils/logger');

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
  const downloadPromises = outdatedFiles.map(file => {
    const outputPath = file.path;
    return driveClient.downloadFile({ fileId: file.id, outputPath })
  });
  await Promise.all(downloadPromises);
  logger.info('All files updated');
};
