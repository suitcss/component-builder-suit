/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var rework = require('rework');
var conformance = require('rework-suit-conformance');

/**
 * Expose hook `before styles`.
 */

module.exports = function (builder) {
  builder.use(checkPackages);
};

/**
 * SUIT conformance tests
 */

function checkPackages(builder) {
  builder.hook('before styles', checkComponents);

  function checkComponents(pkg, cb) {
    if (!pkg.config.styles) return cb();
    var files = pkg.config.styles.filter(onlyCss);

    files.forEach(function (file) {
      var css = fs.readFileSync(pkg.path(file), 'utf-8');
      css = rework(css).use(conformance);
    });

    process.nextTick(cb);
  }
}

/**
 * Match CSS files
 */

function onlyCss(filename) {
  return filename.match(/.css$/);
}
