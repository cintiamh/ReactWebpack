var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
// var ReactTestUtils = require('react-addons-test-utils');
var expect = require('expect');
var HelloText = require('../HelloText'); //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<HelloText/>);
    expect(root).toExist();
  });
});
