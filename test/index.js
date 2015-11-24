/* global describe, it */

'use strict'

import Locator from '../src'
import { assert } from 'chai'

describe('LocateEquationsInString', () => {
  describe('defaults', () => {
    describe('inline delimiters', () => {
      it('are \\(...\\)', () => {
        var locator = new Locator()
        assert.deepEqual(locator.config.inlineMath, [['\\(', '\\)']])
      })
    })

    describe('display delimiters', () => {
      it('are $$...$$ and \\begin{equation}...\\end{equation}', () => {
        var locator = new Locator()
        assert.deepEqual(locator.config.displayMath, [['$$', '$$'], ['\\begin{equation*?}', '\\end{equation}']])
      })
    })

    it('process escapes is true', () => {
      var locator = new Locator()
      assert(locator.config.processEscapes)
    })

    it('receives config', () => {
      var locator = new Locator({
        inlineMath: [['a', 'b']],
        displayMath: [['c', 'd']],
        processEscapes: false
      })

      assert.deepEqual(locator.config.inlineMath, [['a', 'b']])
      assert.deepEqual(locator.config.displayMath, [['c', 'd']])
      assert.equal(locator.config.processEscapes, false)
    })
  })
})
