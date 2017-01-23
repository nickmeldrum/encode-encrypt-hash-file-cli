'use strict'

const fs = require('fs')
const convert = require('./convert')

module.exports = function(externals, args) {
    const _args = {}

    if (!externals.logFunc) externals.logFunc = () => {}
    if (!externals.errorLogFunc) externals.errorLogFunc = () => {}
    if (!externals.errorCompleteFunc) externals.errorCompleteFunc = () => {}

    function outputArgs() {
        externals.logFunc('command line example:')
        externals.logFunc('\t>node index operation inputfilename outputfilename [options]')
        externals.logFunc('available operations:')
        externals.logFunc(`\t[${Object.keys(convert).join(', ')}]`)
        externals.logFunc('options:')
        externals.logFunc('\t-c          : clean input file (ie. remove it after operation successfully complete)')
        externals.logFunc('\t-p password : required for encrypt and decrypt operations')
    }

    function errorAndExit(msg) {
        externals.errorLogFunc(`error: ${msg}`)
        outputArgs()
        externals.errorCompleteFunc()
    }

    function setMandatoryArguments() {
        if (!args[0]) errorAndExit('no operation specified')
        if (!convert[args[0]]) errorAndExit(`operation ${args[0]} not available`)
        _args.operation = args[0]

        if (!args[1]) errorAndExit('no input filename specified')
        if (!fs.existsSync(args[1])) errorAndExit(`input file ${args[1]} does not exist`)
        _args.input = args[1]

        if (!args[2]) errorAndExit('no output filename specified')
        _args.output = args[2]
    }

    function setOptions() {
        _args.encoding = 'utf8'

        for(var i = 3; i < args.length; i++) {
            switch (args[i].toLowerCase()) {
                case '-c':
                    _args.clean = true
                    break
                case '-p':
                    if (i + 1 == args.length) errorAndExit('password not specified')
                    _args.password = args[++i]
                    break
                case '-u':
                    break
                default:
                    errorAndExit(`unknown option: ${args[i]}`)
            }
        }
    }

    setMandatoryArguments()
    setOptions()

    return _args
}
