/**
 * Test dependencies.
 */

var Builder = require('component-builder');
var plugin = require('../');

/**
 * Tests.
 */

describe('SUIT builder plugin', function () {
  var builder = new Builder(__dirname + '/fixtures/component');
  builder.use(plugin);

  it('should add vendor prefixes to CSS', function (done) {
    builder.build(function (err, res) {
      res.css.should.include('-webkit-');
      done();
    });
  });

  it('should resolve custom properties / variables in the CSS', function (done) {
    builder.build(function (err, res) {
      res.css.should.not.include('var-');
      done();
    });
  });
});
