// Copyright (c) 2017-2018, Substratum LLC (https://substratum.net) and/or its affiliates. All rights reserved.

/* global describe beforeEach it */

const assert = require('assert')

describe('ps', () => {
  let subject, results

  beforeEach(async () => {
    subject = require('../command-process/ps')

    results = await subject()
  })

  it('returns processes', () => {
    assert.notStrictEqual(results.length, 0)
  })

  it('types name, pid, cmd correctly', () => {
    results.forEach(item => {
      assert.equal(typeof item.name, 'string')
      assert.equal(typeof item.pid, 'number')
      assert.equal(typeof item.cmd, 'string')
    })
  })

  it('finds itself', () => {
    assert.notEqual(results.filter(item => {
      return (item.name.indexOf('node') >= 0 && item.cmd.indexOf('_spec.js') >= 0)
    }).length, 0)
  })
})
