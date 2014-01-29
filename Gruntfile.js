/*
 * grunt-html-upgrader
 * https://github.com/jdewit/html-upgrader
 *
 * Copyright (c) 2014 Joris de Wit
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    html_upgrader: {
      bootstrap2_3: {
        options: {
          type: 'bootstrap2-3'
        },
        files: {
          'tmp': ['test/bootstrap2-3/fixtures/**/*.html'],
        },
      },
      fontAwesome3_4: {
        options: {
          type: 'fontAwesome3-4'
        },
        files: {
          'tmp': ['test/fontAwesome3-4/fixtures/**/*.html'],
        },
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'html_upgrader', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
