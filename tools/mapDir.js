/* eslint-disable eqeqeq */
/* eslint-disable no-async-promise-executor */
const fs = require('fs');
const path = require('path');
const { check } = require('../utils/marker.js');
const { isDir } = require('../utils/global.js');
const getAllFiles = require('./getAllFiles.js');

const list = []

const mapDir = (pathname, level, filter, currentLevel = 0) => {
    return new Promise(resolve => {
        const dir = path.normalize(pathname)

        if (dir != '.' && isDir(dir)) {
            if (level >= currentLevel) {
                if (level === currentLevel) {
                    let acess = true
                    if (filter) acess = check(path.basename(pathname), filter)
                    if (acess) {
                        const files = getAllFiles(pathname)
                        list.push({ Caminho: pathname, Arquivos: files.length })
                    }
                } else {
                    const items = fs.readdirSync(dir)
                    items.forEach((item) => {
                        const pathabsolute = path.join(dir, item)
                        if (isDir(pathabsolute)) mapDir(pathabsolute, level, filter, currentLevel + 1)
                    })
                }
            }
        } else {
            console.log('\nErro: caminho não foi encontrado')
        }

        resolve(list)
    })
}

module.exports = mapDir
