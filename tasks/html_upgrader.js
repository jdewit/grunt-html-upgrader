/*
 * grunt-html-upgrader
 * https://github.com/jdewit/html-upgrader
 *
 * Copyright (c) 2014 Joris de Wit
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var BootstrapUpgrader = require('./lib/upgraders/bootstrap3.js');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('html_upgrader', 'Upgrade your html files in a snap', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });
    var contents;

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      f.src.forEach(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return;
        }

        grunt.log.writeln('Upgrading ' + filepath);

        contents = BootstrapUpgrader.perform(grunt.file.read(filepath), true, grunt);//.output;

          //for (var i = 0; i < report.results.length; i++) {
            //var message = report.results[i] || "No Changes";
            //$scope.rules[i].runMessage = message;
            //$scope.rules[i].runClass = (message === "No Changes") ? "label-default" : "label-success";
          //}
          //$scope.hasRun = true;



        grunt.file.write(f.dest + '/' + filepath, contents);

        // Print a success message.
        grunt.log.writeln(filepath + ' created.');

      //console.log('what', this.fileSrc);
      });
    });

//      // Concat specified files.
//      var src = f.src.filter(function(filepath) {
//        // Warn on and remove invalid source files (if nonull was set).
//        if (!grunt.file.exists(filepath)) {
//          grunt.log.warn('Source file "' + filepath + '" not found.');
//          return false;
//        } else {
//          return true;
//        }
//      }).map(function(filepath) {
//        // Read file source.
//        return grunt.file.read(filepath);
//      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      //src += options.punctuation;

      // Write the destination file.

      //src.forEach(function(file) {
        //console.log('wooo', file);
        //grunt.file.write(f.dest + '/' + file, file);

        //// Print a success message.
        //grunt.log.writeln(file + ' created.');
      //});
  });

};
