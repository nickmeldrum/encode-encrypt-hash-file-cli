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

    describe('hashing', function() {
        it('md5 is different to original', function() {
            const encoded = convert.hashmd5(args, input)
            expect(encoded).to.not.equal(input)
        })

        it('md5 is correct hash', function() {
            const encoded = convert.hashmd5(args, input)
            expect(encoded).to.equal('2e03b237b4cd416b390b0a7150ac8029')
        })

        it('sha1 is different to original', function() {
            const encoded = convert.hashsha1(args, input)
            expect(encoded).to.not.equal(input)
        })

        it('sha1 is correct hash', function() {
            const encoded = convert.hashsha1(args, input)
            expect(encoded).to.equal('9939b05dd1a3763f5f856e065d277190d648994f')
        })

        it('sha256 is different to original', function() {
            const encoded = convert.hashsha256(args, input)
            expect(encoded).to.not.equal(input)
        })

        it('sha256 is correct hash', function() {
            const encoded = convert.hashsha256(args, input)
            expect(encoded).to.equal('a82639b6f8c3a6e536d8cc562c3b86ff4b012c84ab230c1e5be649aa9ad26d21')
        })
    })

    describe('encrypting and decrypting', function() {
        it('encrypt is different to original', function() {
            args.password = 'Password1'
            const encrypted = convert.encrypt(args, input)
            expect(encrypted).to.not.equal(input)
        })
        
        it('encrypting then decrypting with same password returns original', function() {
            args.password = 'Password1'
            const encrypted = convert.encrypt(args, input)
            const decrypted = convert.decrypt(args, encrypted)
            expect(decrypted).to.equal(input)
        })
        
        it('encrypting then decrypting with wrong password does not return original', function() {
            args.password = 'Password1'
            const encrypted = convert.encrypt(args, input)
            args.password = 'Password2'
            const decrypted = convert.decrypt(args, encrypted)
            expect(decrypted).to.not.equal(input)
        })
    })
})
