class HomeController {
  constructor($state, unassignedSections) {
    this.$state = $state;
    this.unassignedSections = unassignedSections;
  }

  loadSection(section) {
    this.$state.go('app.section', { sectionId: section.id });
  }
}

function run($rootScope, errorService) {
  /*
   * Error handler - whenever we hit an error resolving data in a state function
   * this function is called to display an error to the user and allow them to
   * refresh the page.
   */
  $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
    errorService.showError(error);
  });

  /*
   * We make use of the state change success event to set the page title.
   */
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $rootScope.pageTitle = toState.data.pageTitle + ' | Story Book' ;
    }
  });
}

function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/app/home/stories');

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'parent.tpl.html',
      controller: function () { },
      controllerAs: 'app'
    })
    .state('app.home', {
      url: '/home',
      abstract: true,
      views: {
        'main': {
          controller: 'homeController',
          controllerAs: 'home',
          templateUrl: 'home.tpl.html'
        }
      },
      resolve: {
        'unassignedSections': function () {
          return [
            new Section(1, 'A loose section', 'This is a snippet of the section', new Date(), new Date()),
            new Section(2, 'Another loose section', 'This is a snippet of the section', new Date(), new Date())
          ];
        }
      }
    });
}
  
angular.module('story-book', [
  'templates-app',
  'templates-common',
  'ngAnimate',
  'ngCookies',
  'ngMaterial',
  'ngSanitize',
  'ui.router',
  'story-book.chapter',
  'story-book.section',
  'story-book.stories',
  'story-book.story',
  'errors',
  'dataFactory'])
  .config(config)
  .run(run)
  .controller('homeController', HomeController);
