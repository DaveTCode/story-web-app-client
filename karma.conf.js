module.exports = function(config){
  config.set({
    basePath : './',
    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'build/**/*.js',
      'src/**/*.spec.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
    plugins : [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher'
            ],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};