'use strict'

const fs = require('fs')

exports.readFile = function (filename, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, encoding, function(err, data) {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

exports.writeFile = function (filename, encoding) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filename, encoding, function(err, data) {
            if (err) reject(err)
            else resolve(data)
        })
    })
}
