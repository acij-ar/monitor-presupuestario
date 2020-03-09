/*
 * This file is meant to be execute as a standalone script in order to download the latest versions
 * of the datasets available from google-drive. It's registered as "download-datasets" in the package.json file,
 * and can be executed via "npm run download-datasets"
 */
require('./update-files')();