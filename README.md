# grunt-html-upgrader

> Upgrade your html files with Grunt!

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html-upgrader --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html-upgrader');
```

## The "html_upgrader" task

### Overview
In your project's Gruntfile, add a section named `html_upgrader` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html_upgrader: {
    options: {
      type: 'bootstrap2-3' //optional
    },
    main: {
      files: {
        'dest/path': ['path/to/my/html/**/*.html']
      }
    },
  },
});
```

### Upgraders

* _Bootstrap 2.3 -> 3.0_

Upgrade bootstrap 2.3 html to 3.0 in seconds.
Thanks to @divshot for most of the work https://github.com/divshot/bootstrap3_upgrader


### Status

This is still unstable and a WIP. 

Any help with adding more upgrade scripts and improving the project is much appreciated.


