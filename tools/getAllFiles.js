const fs = require('fs');
const path = require('path');
const { isDir, isFile } = require('../utils/global.js');

function getAllFiles (pathname, ListFiles = []) {
    pathname = path.normalize(pathname)

    const files = fs.readdirSync(pathname)

    for (const file of files) {
        const pathabsolute = path.join(pathname, file)

        if (isDir(pathabsolute)) {
            ListFiles = getAllFiles(pathabsolute, ListFiles)
        } else if (isFile(pathabsolute)) {
            ListFiles.push(pathabsolute)
        }
    }

    return ListFiles
}

module.exports = getAllFiles
