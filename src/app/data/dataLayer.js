class DataLayerService {
  constructor(dataFactory) {
    this.dataFactory = dataFactory;
  }
  
  getStories() {
    return this.dataFactory.get('/stories');
  }
  
  getUnassignedSections() {
    return this.dataFactory.get('/sections');
  }
}

angular.module('story-book.data-layer', ['dataFactory'])
  .service('dataLayer', DataLayerService);