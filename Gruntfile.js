module.exports = function(grunt) {
  var path = require('path')
  var src  = path.join(__dirname, 'src', 'Gruntfile.js');
  var dest = path.join(process.cwd(), 'Gruntfile.jss');
  var lib  = path.join(process.cwd(), 'lib');
  var dist = path.join(process.cwd(), 'dist');
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    mkdir : {
      all : {
        options: {
          mode : 0755,
          create: [lib, dist]
        }
      }
    },
    copy: {
      main: {
        src: src,
        dest: dest
      }
    },
    "npm-install": [
      'babel',
      'grunt',
      'grunt-babel',
      'load-grunt-tasks'
    ]
  });
  grunt.registerTask('build', ['mkdir', 'copy', 'npm-install']);
}
