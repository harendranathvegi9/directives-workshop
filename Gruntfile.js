module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'package.json', 'src/*.js'],
      options: {
      }
    },
    karma: {
      options: {
        frameworks: ['jasmine'],
        files: [
          'lib/jquery-1.10.2.js',
          'lib/angular.js',
          'lib/angular-mocks.js',
          'src/**/*.js'],
        browsers: ['Chrome']
      },
      tdd: {
        autoWatch: true
      },
      ci: {
        singleRun: true
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'karma:ci']);
};