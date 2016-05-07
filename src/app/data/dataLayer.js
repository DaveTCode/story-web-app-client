/**
 * The DataLayerService acts as a proxy to the common data factory module. It
 * maps from the server side json to the client side objects.
 */
class DataLayerService {
  constructor($log, dataFactory) {
    this.dataFactory = dataFactory;
    this.$log = $log;
  }
  
  /**
   * Get the list of stories from the server and maps them into the objects
   * required for use in the application.
   */
  getStories() {
    this.$log.debug('Retrieving story list');
    return this.dataFactory.get('stories').then(function(stories) {
      return stories.data.map((story) => {
        const chapters = story.chapters && story.chapters.map((chapter) => {
          const sections = chapter.sections && chapter.sections.map((section) => {
            return new Section(section.id, section.title, section.snippet, section.dateModified, section.dateCreated);
          });
          
          return new Chapter(chapter.id, chapter.title, sections);
        });
        
        return new Story(story.id, story.title, story.blurb, chapters);
      });
    });
  }
  
  /**
   * Get the list of unassigned sections (i.e. that are not part of a chapter)
   * and map them into the client side Section object.
   */
  getUnassignedSections() {
    this.$log.debug('Retrieving unassigned sections');
    return this.dataFactory.get('sections').then(function(sections) {
      return sections.data.map((section) => {
        return new Section(section.id, section.title, section.snippet, section.dateModified, section.dateCreated);
      });
    });
  }
}

angular.module('story-book.data-layer', ['dataFactory'])
  .service('dataLayer', DataLayerService);