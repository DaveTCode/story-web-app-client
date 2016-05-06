describe( 'Chapter', function() {
  describe( 'ChapterController', function() {
    var $controller;

    beforeEach( module( 'story-book.chapter' ) );

    beforeEach( inject( function( _$controller_, _$state_ ) {
      $controller = _$controller_;
      $state = _$state_;
    }));

    it( 'should instantiate the controller with a chapter', inject( function() {
      var controller = $controller('chapterController', { $state: $state, chapter: {} });
      
      expect(controller.chapter).toEqual({});
    }));
  });
});
