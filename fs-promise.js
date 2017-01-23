'use strict'

const fs = require('fs')

exports.read = function (filename, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, encoding, function(err, data) {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

exports.write = function (filename, encoding) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filename, encoding, function(err, written) {
            if (err) reject(err)
            else resolve(written)
        })
    })
}

exports.delete = function (filename) {
    return new Promise(function (resolve, reject) {
        fs.unlink(filename, function(err) {
            if (err) reject(err)
            else resolve()
        })
    })
}
