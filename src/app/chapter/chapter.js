function chapterConfig($stateProvider) {
  $stateProvider.state('app.home.chapter', {
    url: '/chapter/{chapterId:int}',
    views: {
      'content': {
        controller: 'chapterController',
        controllerAs: 'data',
        templateUrl: 'chapter/chapter.tpl.html'
      }
    },
    data: { pageTitle: 'Chapter' },
    resolve: {
      'chapter': function ($stateParams) {
        return new Chapter(1, 'A chapter title');
      }
    }
  });
}

class ChapterController {
  constructor($state, chapter) {
    this.$state = $state;
    this.chapter = chapter;
  }

  loadSection(section) {
    this.$state.go('app.section', { sectionId: section.id });
  }
}

angular.module('story-book.chapter', ['ui.router'])
  .config(chapterConfig)
  .controller('chapterController', ChapterController);