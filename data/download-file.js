const {google} = require('googleapis');
const fs = require('fs');

module.exports = ({driveClient, fileId, outputPath}) => {
    const drive = google.drive({version: 'v3', auth: driveClient});
    const dest = fs.createWriteStream(outputPath);

    drive.files.get(
        {fileId: fileId, alt: 'media'},
        {responseType: 'stream'},
        (err, res) => res.data
            .on('end', () => console.log(`Finished downloading file ${fileId} to ${outputPath}`))
            .on('error', err => console.log('Error', err))
            .pipe(dest)
    )
};
