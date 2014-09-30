/*global describe,it*/
'use strict';
var assert = require('assert'),
  pajination = require('../lib/pajination.js');

describe('pajination node module.', function() {
  it('must be awesome', function() {
    assert( pajination.awesome(), 'awesome');
  });
});
