'use strict'

const chai = require('chai')
const expect = chai.expect

const convert = require('./convert.js')

const input = 'a test'
const args = {
    encoding: 'utf8'
}

describe('convert', function() {
    describe('rot13', function() {
        it('run once is the rotated text', function() {
            const once = convert.rot13(args, input)
            expect(once).to.equal('n grfg')
        })

        it('run twice returns original', function() {
            const once = convert.rot13(args, input)
            const twice = convert.rot13(args, once)
            expect(twice).to.equal(input)
        })
    })

    describe('base64', function() {
        it('encoding then decoding returns original', function() {
            const encoded = convert.base64encode(args, input)
            const decoded = convert.base64decode(args, encoded)

            expect(decoded).to.equal(input)
        })

        it('encoding is different to original', function() {
            const encoded = convert.base64encode(args, input)

            expect(encoded).to.not.equal(input)
        })

        it('encoding is correctly encoded', function() {
            const encoded = convert.base64encode(args, input)

            expect(encoded).to.equal('YSB0ZXN0')
        })
    })
})
