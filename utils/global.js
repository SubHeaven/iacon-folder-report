const fs = require('fs');

const isDir = (pathname) => {
    return fs.statSync(pathname).isDirectory()
}

const isFile = (pathname) => {
    return fs.statSync(pathname).isFile()
}

module.exports = {
    isDir,
    isFile
}
