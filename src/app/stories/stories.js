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
    data: { pageTitle: 'Stories' }
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
