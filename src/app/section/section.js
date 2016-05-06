function sectionConfig($stateProvider) {
  $stateProvider.state('app.section', {
    url: '/section/{sectionId:int}',
    views: {
      'main': {
        controller: 'sectionController',
        controllerAs: 'data',
        templateUrl: 'section/section.tpl.html'
      }
    },
    data: { pageTitle: 'Section' },
    resolve: {
      'section': function ($stateParams) {
        return new Section(1, 'The title of the section', 'A small snippet', new Date(), new Date());
      },
      'contents': function ($stateParams) {
        return 'This is the section contents as a multiline _markdown_ string.';
      }
    }
  });
}

class SectionController {
  constructor(section, contents) {
    this.section = section;
    this.contents = contents;
  }
}

angular.module('story-book.section', ['ui.router'])
  .config(sectionConfig)
  .controller('sectionController', SectionController);