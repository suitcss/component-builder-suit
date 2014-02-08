/**
 * Module dependencies.
 */

var autoprefixer = require('autoprefixer');
var fs = require('fs');
var path = require('path');
var rework = require('rework');
var suit = require('rework-suit');

/**
 * Expose hook `before styles`.
 */

module.exports = function (builder) {
  builder.hook('before styles', preprocess);
};

/**
 * SUIT preprocessor stack
 */

function preprocess(pkg, cb) {
  if (!pkg.config.styles) return cb();
  var files = pkg.config.styles.filter(onlyCss);
  var browserConfig = [
    'Explorer >= 8',
    'last 2 Chrome versions',
    'last 2 Firefox versions',
    'last 2 Safari versions',
    'last 2 iOS versions',
    'Android 4'
  ];

  files.forEach(function (file) {
    var css = fs.readFileSync(pkg.path(file), 'utf-8');
    css = rework(css).use(suit).toString();
    css = autoprefixer(browserConfig).process(css).css;
    css = '/* Generated from "' + file + '" */\n' + css;
    pkg.removeFile('styles', file);
    pkg.addFile('styles', file, css);
  });

  process.nextTick(cb);
}

/**
 * Only css-files.
 */

function onlyCss(filename) {
  return filename.match(/.css$/);
}
