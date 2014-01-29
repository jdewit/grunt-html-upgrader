var cheerio = require('cheerio'),
    upgraders = [
      'bootstrap2-3',
      'fontAwesome3-4'
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
      try {
        results.push(rule.run($));
      } catch(e) {
        grunt.log.warn('Error processing the ruleset with title "' + rule.title + '"');
      }
    }

    var html = $.html();

    html = html.replace(/&apos;/g, "'"); // ' fix
    html = html.replace(/&amp;&amp;/g, "&&"); // && fix
    html = html.replace(/&gt;/g, ">"); // > fix
    html = html.replace(/&lt;/g, "<"); // < fix

    return html;
  }
};
