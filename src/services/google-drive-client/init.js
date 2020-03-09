/*
 * This file is meant to be execute as a standalone script in order to obtain the google-drive token
 * from the command line. It's registered as "google-drive" in the package.json file, and can be
 * executed via "npm run google-drive"
 */
const GoogleDriveClient = require('.');

const client = new GoogleDriveClient();
client.init();