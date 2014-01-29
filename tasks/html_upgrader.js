/*
 * grunt-html-upgrader
 * https://github.com/jdewit/html-upgrader
 *
 * Copyright (c) 2014 Joris de Wit
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var Upgrader = require('./lib/upgrader.js');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('html_upgrader', 'Upgrade your html files in a snap', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      type: 'bootstrap2-3'
    });
    var contents;

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      f.src.forEach(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return;
        }

        contents = Upgrader.run(grunt.file.read(filepath), options.type, grunt);

        grunt.file.write(f.dest + '/' + filepath, contents);

        grunt.log.writeln('Upgraded' + filepath + ' successfully.');

      });
    });
  });
};
