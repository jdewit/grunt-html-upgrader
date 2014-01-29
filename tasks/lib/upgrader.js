var cheerio = require('cheerio'),
    upgraders = [
      'bootstrap2-3'
    ];

module.exports = {
  run: function(input, type, grunt) {
    if (upgraders.indexOf(type) === -1) {
      grunt.log.warn(type + ' upgrader not valid.');

      return false;
    }

    var $ = cheerio.load(input);
    var results = [];
    var rules = require('./upgraders/' + type + '.js');
    var rule;

    for (var i = 0; i < rules.length; i++) {
      rule = rules[i];
      results.push(rule.run($));
    }

    return $.html();
  }
};
