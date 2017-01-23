'use strict'

const fs = require('fs')
const chai = require('chai')
const expect = chai.expect

const argsBuilder = require('./args.js')

describe('args', function() {
    beforeEach(function() {
        fs.writeFileSync('dummy-input-file.txt')
    })

    afterEach(function() {
        fs.unlinkSync('dummy-input-file.txt')
    })

    it('no args passed in and an example is logged out', function() {
        var logged = false
        const args = argsBuilder({
            logFunc: msg => { if (msg.includes('example')) logged = true }
        }, [])

        expect(logged).to.be.true
    })

    it('no args passed in and error complete func is called', function() {
        var errorCompleteFuncCalled = false
        const args = argsBuilder({
            errorCompleteFunc: () => { errorCompleteFuncCalled = true}
        }, [])

        expect(errorCompleteFuncCalled).to.be.true
    })

    it('op passed in that is not available in convert library, not available is error logged out', function() {
        var logged = false
        const args = argsBuilder({
            errorLogFunc: msg => { if (msg.includes('not available')) logged = true }
        }, ['made-up-op'])

        expect(logged).to.be.true
    })

    it('op passed in that is not available and error complete func is called', function() {
        var errorCompleteFuncCalled = false
        const args = argsBuilder({
            errorCompleteFunc: () => { errorCompleteFuncCalled = true}
        }, ['made-up-op'])

        expect(errorCompleteFuncCalled).to.be.true
    })

    it('no input file specified is logged out', function() {
        var logged = false
        const args = argsBuilder({
            errorLogFunc: msg => { if (msg.includes('no input file')) logged = true }
        }, ['rot13'])

        expect(logged).to.be.true
    })

    it('no input file makes error complete func to be called', function() {
        var errorCompleteFuncCalled = false
        const args = argsBuilder({
            errorCompleteFunc: () => { errorCompleteFuncCalled = true}
        }, ['rot13'])

        expect(errorCompleteFuncCalled).to.be.true
    })

    it('input file does not exist is logged out', function() {
        var logged = false
        const args = argsBuilder({
            errorLogFunc: msg => { if (msg.includes('does not exist')) logged = true }
        }, ['rot13', 'made-up-file'])

        expect(logged).to.be.true
    })

    it('input file does not exist makes error complete func to be called', function() {
        var errorCompleteFuncCalled = false
        const args = argsBuilder({
            errorCompleteFunc: () => { errorCompleteFuncCalled = true}
        }, ['rot13', 'made-up-file'])

        expect(errorCompleteFuncCalled).to.be.true
    })

    it('no output file specified is logged out', function() {
        var logged = false
        const args = argsBuilder({
            errorLogFunc: msg => { if (msg.includes('no output file')) logged = true }
        }, ['rot13', 'argsinput-file.txt'])

        expect(logged).to.be.true
    })

    it('no output file makes error complete func to be called', function() {
        var errorCompleteFuncCalled = false
        const args = argsBuilder({
            errorCompleteFunc: () => { errorCompleteFuncCalled = true}
        }, ['rot13', 'input-file.txt'])

        expect(errorCompleteFuncCalled).to.be.true
    })
})
