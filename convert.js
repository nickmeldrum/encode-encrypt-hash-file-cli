'use strict'

const args = require('./args')

exports.encrypt = function (input) {
    return input
}

exports.decrypt = function (input) {
    return input
}

exports.hash = function (input) {
}

exports.base64encode = function (input) {
    return new Buffer(input, args.encoding).toString('base64')
}

exports.base64decode = function (input) {
    return new Buffer(input, 'base64').toString(args.encoding)
}

exports.rot13 = function (input) {
    return input.replace(
        /[a-z]/gi, c =>
        String.fromCharCode((c<='Z'?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26)
    )
}
