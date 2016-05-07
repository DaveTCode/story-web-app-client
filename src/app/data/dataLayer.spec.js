describe('Data Layer', function() {
  var dataLayer, $httpBackend;
  
  beforeEach(module('story-book.data-layer') );
  
  beforeEach(inject(function(_$httpBackend_, _$log_, _dataLayer_) {
    dataLayer = _dataLayer_;
    $httpBackend = _$httpBackend_;
  }));
  
  describe('get unassigned sections', function() {
    it('Should return empty array if no values returned from route', function() {
      $httpBackend.expectGET('http://api.angularTemplate.com/sections').respond(200, []);
      $httpBackend.expectGET('loading/loading-modal.tpl.html').respond(200, '');
      
      dataLayer.getUnassignedSections().then(function(sections) {
        expect(sections).toEqual([]);
      }, function(err) {
        expect(err).toBeUndefined();
      });
      
      $httpBackend.flush();
    });
    
    it('Should return a single unassigned section', function() {
      $httpBackend.expectGET('http://api.angularTemplate.com/sections').respond(200, [
        {
          id: 1,
          title: 'Test Section',
          snippet: 'A little bit of the section to display...',
          dateModified: new Date(2016, 2, 3),
          dateCreated: new Date(2016, 1, 1)
        }
      ]);
      $httpBackend.expectGET('loading/loading-modal.tpl.html').respond(200, '');
      
      dataLayer.getUnassignedSections().then(function(sections) {
        expect(sections.length).toEqual(1);
        expect(sections[0].id).toEqual(1);
        expect(sections[0].title).toEqual('Test Section');
        expect(sections[0].snippet).toEqual('A little bit of the section to display...');
        expect(sections[0].dateCreated).toEqual(new Date(2016, 1, 1));
        expect(sections[0].dateModified).toEqual(new Date(2016, 2, 3));
      }, function(err) {
        expect(err).toBeUndefined();
      });
      
      $httpBackend.flush();
    });
    
    it('Should return multiple sections', function() {
      $httpBackend.expectGET('http://api.angularTemplate.com/sections').respond(200, [
        {
          id: 1,
          title: 'Test Section',
          snippet: 'A little bit of the section to display...',
          dateModified: new Date(2016, 2, 3),
          dateCreated: new Date(2016, 1, 1)
        },
        {
          id: 2,
          title: 'Test Section',
          snippet: 'A little bit of the section to display...',
          dateModified: new Date(2016, 2, 3),
          dateCreated: new Date(2016, 1, 1)
        }
      ]);
      $httpBackend.expectGET('loading/loading-modal.tpl.html').respond(200, '');
      
      dataLayer.getUnassignedSections().then(function(sections) {
        expect(sections.length).toEqual(2);
        expect(sections[0].id).toEqual(1);
        expect(sections[1].id).toEqual(2);
      }, function(err) {
        expect(err).toBeUndefined();
      });
      
      $httpBackend.flush();
    });
  });
  
  describe('get stories', function() {
    it('Should handle a blank response by returning 0 stories', function() {
      $httpBackend.expectGET('http://api.angularTemplate.com/stories').respond(200, []);
      $httpBackend.expectGET('loading/loading-modal.tpl.html').respond(200, '');
      
      dataLayer.getStories().then(function(stories) {
        expect(stories).toEqual([]);
      }, function(err) {
        expect(err).toBeUndefined();
      });
      
      $httpBackend.flush();
    });
    
    it('Should handle a single story with single chapter/section', function() {
      $httpBackend.expectGET('http://api.angularTemplate.com/stories').respond(200, [
        {
          id: 1,
          title: 'Story 1',
          blurb: 'A little bit of text about the story',
          chapters: [
            {
              id: 1,
              title: 'Chapter 1',
              sections: [
                {
                  id: 1,
                  title: 'Section 1',
                  snippet: 'Snippet',
                  dateCreated: new Date(2016, 1, 1),
                  dateModified: new Date(2016, 2, 3)
                }
              ]
            }
          ]
        }
      ]);
      $httpBackend.expectGET('loading/loading-modal.tpl.html').respond(200, '');
      
      dataLayer.getStories().then(function(stories) {
        expect(stories.length).toEqual(1);
        expect(stories[0].id).toEqual(1);
        expect(stories[0].title).toEqual('Story 1');
        expect(stories[0].blurb).toEqual('A little bit of text about the story');
        expect(stories[0].chapters.length).toEqual(1);
        expect(stories[0].chapters[0].id).toEqual(1);
        expect(stories[0].chapters[0].title).toEqual('Chapter 1');
        expect(stories[0].chapters[0].sections.length).toEqual(1);
      }, function(err) {
        expect(err).toBeUndefined();
      });
      
      $httpBackend.flush();
    });
  });
});
