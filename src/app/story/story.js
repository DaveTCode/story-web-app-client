function storyConfig($stateProvider) {
  $stateProvider.state('app.home.story', {
    url: '/story/{storyId:int}',
    views: {
      'content': {
        controller: 'storyController',
        controllerAs: 'data',
        templateUrl: 'story/story.tpl.html'
      }
    },
    data: { pageTitle: 'Story' },
    resolve: {
      'story': function ($stateParams) {
        return new Story(1, 'Test Story 1', 'This is a blurb for the test story #1', [
          new Chapter(1, 'Test Chapter 1'),
          new Chapter(2, 'Test Chapter 2'),
          new Chapter(3, 'Test Chapter 3'),
          new Chapter(4, 'Test Chapter 4')
        ]);
      }
    }
  });
}

class StoryController {
  constructor($state, story) {
    this.$state = $state;
    this.story = story;
  }

  loadChapter(chapter) {
    this.$state.go('app.home.chapter', { chapterId: chapter.id });
  }
}

angular.module('story-book.story', ['ui.router'])
  .config(storyConfig)
  .controller('storyController', StoryController);