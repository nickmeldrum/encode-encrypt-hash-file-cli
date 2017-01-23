'use strict'

const argsBuilder = require('./args')
const convert = require('./convert')
const fs = require('./fs-promise')

const args = argsBuilder({
    logFunc: console.log,
    errorLogFunc: console.error,
    errorCompleteFunc: process.exit
}, process.argv.slice(2))

fs.read(args.input, args.encoding)
  .then(convert[args.operation].bind(null, args))
  .then(data => fs.write(args.output, data))
  .then(data => console.log('written'))
  .then(() => {if (args.clean) return fs.delete(args.input)})
  .catch(err => console.log(err.message))
