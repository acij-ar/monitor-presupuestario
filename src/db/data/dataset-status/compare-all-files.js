const files = require('../files');
const GoogleDriveClient = require('../google-drive-client');
const fileStatus = require('./file-status');
const logger = require('../../../utils/logger');

/**
 * Compares the md5 checksum of the files listed in ./files with
 * the md5 cheksum of the files uploaded in google drive.
 *
 * @returns {Promise<FileStatus[]>}
 */

module.exports = async () => {
  const driveClient = new GoogleDriveClient();
  await driveClient.init();

  let filesInDriveFolder = await driveClient.listFilesInFolder({ folderId: '1CwdEQNMpgUvMjL-Cok2n16vT55F2AT52' });
  logger.info('Got file status from google drive folder');

  const fileStatusPromises = files.map(localFile => {
    const { md5Checksum: expectedMD5 } = filesInDriveFolder.find(fileInDriveFolder => fileInDriveFolder.id === localFile.id );
    return fileStatus({ path: localFile.path, expectedMD5 }).then(result => ({...result, ...localFile}));
  });

  return Promise.all(fileStatusPromises);
};
