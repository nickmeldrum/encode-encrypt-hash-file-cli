'use strict'

const chai = require('chai')
const expect = chai.expect

const convert = require('./convert.js')

describe('convert', function() {
    describe('rot13', function() {
        it('run once is the rotated text', function() {
            const input = 'a test'
            const once = convert.rot13({}, input)
            expect(once).to.equal('n grfg')
        })

        it('run twice returns original', function() {
            const input = 'a test'
            const once = convert.rot13({}, input)
            const twice = convert.rot13({}, once)
            expect(twice).to.equal(input)
        })
    })
})
