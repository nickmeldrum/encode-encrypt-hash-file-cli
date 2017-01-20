'use strict'

const crypto = require('crypto')

exports.encrypt = function (args, input) {
    const cipher = crypto.createCipher('aes-256-ctr', args.password)
    const crypted = cipher.update(input, 'utf8', 'hex')
    return crypted + cipher.final('hex')
}

exports.decrypt = function (args, input) {
    const decipher = crypto.createDecipher('aes-256-ctr', args.password)
    const decrypted = decipher.update(input, 'hex', 'utf8')
    return decrypted + decipher.final('utf8')
}

function hash (hashMethod, args, input) {
    return crypto.createHash(hashMethod)
        .update(input, 'utf8')
        .digest('hex')
}

exports.hashmd5 = function (args, input) {
    return hash('md5', args, input)
}

exports.hashsha1 = function (args, input) {
    return hash('sha1', args, input)
}

exports.hashsha256 = function (args, input) {
    return hash('sha256', args, input)
}

exports.base64encode = function (args, input) {
    return new Buffer(input, args.encoding).toString('base64')
}

exports.base64decode = function (args, input) {
    return new Buffer(input, 'base64').toString(args.encoding)
}

exports.rot13 = function (args, input) {
    return input.replace(
        /[a-z]/gi, c =>
        String.fromCharCode((c<='Z'?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26)
    )
}
