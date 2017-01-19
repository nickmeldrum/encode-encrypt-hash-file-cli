'use strict'

const args = require('./args')
const convert = require('./convert')
const fs = require('./fs-promise')

fs.readFile(args.input, args.encoding)
  .then(convert[args.operation])
  .then(data => fs.writeFile(args.output, data))
  .then(data => console.log('written'))
  .catch(err => console.log(err.message))
