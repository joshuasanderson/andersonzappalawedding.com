module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      sass: {
        files: ['assets/styles/sass/**/*.scss'],
        tasks: ['css']
      }
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dev: {
        files: {
          'assets/styles/css/site.css': 'assets/styles/sass/site.scss'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments: true,
        expand: true
      },
      dev: {
        files: {
            'assets/styles/css/site.min.css': ['assets/styles/css/site.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('css', ['sass', 'cssmin']);
  grunt.registerTask('default', ['css', 'watch']);

};
