'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.html_upgrader = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  bootstrap: function(test) {
    //test.expect(1);

    var actual = grunt.file.read('tmp/test/bootstrap2-3/fixtures/buttons.html');
    var expected = grunt.file.read('test/bootstrap2-3/expected/buttons.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');
    test.done();
  },
  fontAwesome: function(test) {
    //test.expect(1);

    var actual = grunt.file.read('tmp/test/fontAwesome3-4/fixtures/icons.html');
    var expected = grunt.file.read('test/fontAwesome3-4/expected/icons.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');
    test.done();
  }
};
