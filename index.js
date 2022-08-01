const createReport = require('./services/createReport.js');
const writeReport = require('./services/downloadReport.js');

const processPath = async (pathname, level, filter, destpath) => {
    const report = await createReport(pathname, level, filter)
    writeReport(report, destpath)
}

module.exports = {
    processPath
}