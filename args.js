'use strict'

const convert = require('./convert')

function outputArgs() {
    console.log('command line example: "node index operation inputfilename outputfilename"')
    console.log(`available operations: [${Object.keys(convert).join(', ')}]`)
}

function errorAndExit(msg) {
    console.error(`error: ${msg}`)
    outputArgs()
    process.exit()
}

if (!process.argv[2]) errorAndExit('no operation specified')
if (!convert[process.argv[2]]) errorAndExit('operation not available')
if (!process.argv[3]) errorAndExit('no input filename specified')
if (!process.argv[4]) errorAndExit('no output filename specified')

module.exports = {
    operation: process.argv[2],
    input: process.argv[3],
    output: process.argv[4],
    encoding: 'utf8',
    args: process.argv.slice(2)
}
