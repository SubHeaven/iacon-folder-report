import createReport from './services/createReport.mjs'
import writeReport from './services/downloadReport.js'

const processPath = async (pathname, level, filter, destpath) => {
    const report = await createReport(pathname, level, filter)
    writeReport(report, destpath)
}

export {
    processPath
}