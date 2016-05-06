module.exports = function(config){
  config.set({
    basePath : './',
    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'build/**/*.js',
      'src/**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
    plugins : [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher'
            ],
    reporters: ['dots', 'junit'],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};