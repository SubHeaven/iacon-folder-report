const mapDir = require('../tools/mapDir.js');

module.exports = function (pathname, level, filter) {
    return new Promise(resolve => {
        level = isNaN(parseInt(level)) ? 0 : parseInt(level)
        filter = filter === '' ? '%' : filter

        mapDir(pathname, level, filter)
            .then(data => resolve(data))
    })
}
