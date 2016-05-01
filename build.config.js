module.exports = {
  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    sass: 'src/sass/main.scss'
  },

  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  vendor_files: {
    js: [
      'node_modules/angular/angular.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-cookies/angular-cookies.js',
      'node_modules/angular-material/angular-material.js',
      'node_modules/angular-messages/angular-messages.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    css: [
    ],
    assets: [
    ]
  },
};
