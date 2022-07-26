// import { spawnSync } from 'child_process'
const path = require('path');
const reader = require('xlsx');
const { randomUUID } = require('crypto');

module.exports = function (data, destpath) {
    // const { stdout } = spawnSync('powershell',
    //     ["(New-Object -ComObject Shell.Application).NameSpace('shell:Downloads').Self.Path"],
    //     {
    //         shell: true,
    //         windowsVerbatimArguments: true,
    //         encoding: 'utf8'
    //     })

    // const pathname = path.join(String(stdout).split('\r\n')[0], `report-${randomUUID()}.xls`)
    const pathname = path.join(destpath, `report-${randomUUID()}.xls`)

    const workBook = reader.utils.book_new()
    const workSheet = reader.utils.json_to_sheet(data)
    reader.utils.book_append_sheet(workBook, workSheet, 'response')
    const exportFileName = pathname
    reader.writeFile(workBook, exportFileName)
}
