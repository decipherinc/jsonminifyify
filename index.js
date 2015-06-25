'use strict';

var minimatch = require('minimatch'),
  jsonminify = require('jsonminify'),
  transformify = require('transformify'),
  path = require('path'),
  through2 = require('through2');

module.exports = function stub(file, opts) {
  var match = false;

  opts = opts || {};
  opts.cwd = opts.cwd || process.cwd();
  opts.files = opts.files && [].concat(opts.files);

  opts.files.map(function (glob) {
    return path.join(opts.cwd, glob)
  })
    .forEach(function (glob) {
      if (minimatch(file, glob)) {
        return !(match = true);
      }
    });

  if (match) {
    return transformify(function (json) {
      return jsonminify(json);
    })(file);
  }
  return through2();
};
