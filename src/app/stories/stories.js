function homeConfig($stateProvider) {
  $stateProvider.state( 'app.home.stories', {
    url: '/stories',
    views: {
      'content': {
        controller: 'storiesController',
        controllerAs: 'data',
        templateUrl: 'stories/stories.tpl.html'
      }
    },
    data: { pageTitle: 'Stories' },
    resolve: {
      'stories': function() {
        return [
          new Story(1, 'Test Story 1', 'This is a blurb for the test story #1', []),
          new Story(2, 'Test Story 2', 'This is a blurb for the test story #2', []),
          new Story(3, 'Test Story 3', 'This is a blurb for the test story #3', []),
          new Story(4, 'Test Story 4', 'This is a blurb for the test story #4', []),
          new Story(5, 'Test Story 5', 'This is a blurb for the test story #5', [])
        ];
      }
    }
  });
}

class StoriesController {
  constructor($state, stories, unassignedSections) {
    this.$state = $state;
    this.stories = stories;
    this.unassignedSections = unassignedSections;
  }

  loadStory(story) {
    this.$state.go('app.home.story', { storyId: story.id });
  }
}

angular.module('story-book.stories', ['ui.router'])
  .config(homeConfig)
  .controller('storiesController', StoriesController);
