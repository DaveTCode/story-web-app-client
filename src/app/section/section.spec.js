describe( 'Section', function() {
  describe( 'SectionController', function() {
    var $controller;

    beforeEach( module( 'story-book.section' ) );

    beforeEach( inject( function( _$controller_, _$state_ ) {
      $controller = _$controller_;
      $state = _$state_;
    }));

    it( 'should instantiate the controller with a section', inject( function() {
      var controller = $controller('sectionController', { section: {}, contents: {} });
      
      expect(controller.section).toEqual({});
      expect(controller.contents).toEqual({});
    }));
  });
});
