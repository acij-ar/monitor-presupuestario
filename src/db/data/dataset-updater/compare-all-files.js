const files = require('./files');
const GoogleDriveClient = require('../google-drive-client');
const fileStatus = require('./file-status');
const logger = require('../../../utils/logger');

module.exports = async () => {
  const driveClient = new GoogleDriveClient();
  await driveClient.init();

  let filesInDriveFolder = await driveClient.listFilesInFolder({ folderId: '1CwdEQNMpgUvMjL-Cok2n16vT55F2AT52' });
  logger.info('Got file status from google drive folder');

  const fileStatusPromises = files.map(localFile => {
    const { md5Checksum: expectedMD5 } = filesInDriveFolder.find(fileInDriveFolder => fileInDriveFolder.id === localFile.id );
    return fileStatus({ filename: localFile.filename, expectedMD5 }).then(result => ({...result, ...localFile}));
  });

  return Promise.all(fileStatusPromises);
};
