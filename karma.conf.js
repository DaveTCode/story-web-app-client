module.exports = function(config){
  config.set({
    basePath : './',
    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'build/**/*.js',
      'src/**/*.spec.js'
    ],
    preprocessors: {
      'build/src/**/*.js': 'coverage'
    },
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
    plugins : [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-coverage'
            ],
    reporters: ['dots', 'junit', 'coverage'],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit',
      useBrowserName: false
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
      subdir: '.'
    }
  });
};