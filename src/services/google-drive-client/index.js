const fs = require('fs');
const driveClient = require('./drive-client');
const logger = require('../../utils/logger');

class GoogleDriveClient {

  /**
   * Initializes the google drive client from the googleapis lib
   */
  async init() {
    this._client = await driveClient();
    logger.info('Google drive initialized successfully');
  }

  /**
   * Downloads file using the google drive client
   *
   * @param {object} params -
   * @param {string} params.fileId - File id used in google drive
   * @param {string} params.outputPath - Target path to download file
   * @returns {Promise} - Promise that resolves when the download finishes
   */
  downloadFile({fileId, outputPath}) {
    logger.info(`Downloading ${fileId} to ${outputPath}`);
    const dest = fs.createWriteStream(outputPath);
    const file = {fileId, alt: 'media'};
    const options = {responseType: 'stream'};
    const downloadFilePromiseHandler = (resolve, reject) => {
      const driveClientCallback = (err, res) => {
        if (err) {
          return reject(err);
        }
        res.data
          .on('end', () => {
            logger.info(`File ${fileId} downloaded successfully`);
            resolve();
          })
          .on('error', reject)
          .pipe(dest);
      };
      this._client.files.get(file, options, driveClientCallback);
    };
    return new Promise(downloadFilePromiseHandler);
  }

  /**
   * @typedef {object} FileInfo
   * @property {string} md5Checksum - MD5 checksum of the google drive file
   */

  /**
   * Lists the files in a google drive folder
   *
   * @param {object} params -
   * @param {string} params.folderId - Folder id used in google drive
   * @returns {Promise<FileInfo[]>} - Promise that resolves with the files info
   */
  listFilesInFolder({folderId}) {
    const params = {
      fields: 'files(id, name, md5Checksum)',
      q: `'${folderId}' in parents`,
    };
    const listFilesInFolderPromiseHandler = (resolve, reject) => {
      const listFilesCallback = (err, res) => (err ? reject(err) : resolve(res.data.files));
      this._client.files.list(params, listFilesCallback);
    };
    return new Promise(listFilesInFolderPromiseHandler);
  }
}

module.exports = GoogleDriveClient;
