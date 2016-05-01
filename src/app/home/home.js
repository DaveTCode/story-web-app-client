function homeConfig($stateProvider) {
  $stateProvider.state( 'app.home', {
    url: 'home',
    views: {
      'main': {
        controller: 'homeController',
        controllerAs: 'home',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data: { pageTitle: 'Home' },
    resolve: {
      'stories': function() {
        return [
          new Story('Test Story 1', 'This is a blurb for the test story #1'),
          new Story('Test Story 2', 'This is a blurb for the test story #2'),
          new Story('Test Story 3', 'This is a blurb for the test story #3'),
          new Story('Test Story 4', 'This is a blurb for the test story #4'),
          new Story('Test Story 5', 'This is a blurb for the test story #5')
        ];
      },
      'unassignedSections': function () {
        return [
          new Section('A loose section', 'This is some _markdown_ defined __content__')
        ]
      }
    }
  });
}

class HomeController {
  constructor(stories, unassignedSections) {
    this.stories = stories;
    this.unassignedSections = unassignedSections;
  }
}

angular.module('angularTemplate.home', ['ui.router'])
  .config(homeConfig)
  .controller('homeController', HomeController);
