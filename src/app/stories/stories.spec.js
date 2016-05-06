describe( 'Stories', function() {
  describe( 'StoriesController', function() {
    var $controller;

    beforeEach( module( 'story-book.stories' ) );

    beforeEach( inject( function( _$controller_, _$state_ ) {
      $controller = _$controller_;
      $state = _$state_;
    }));

    it( 'should instantiate the controller with a list of stories and sections', inject( function() {
      var controller = $controller('storiesController', { $state: $state, stories: [], unassignedSections: [] });
      
      expect(controller.stories).toEqual([]);
      expect(controller.unassignedSections).toEqual([]);
    }));
  });
});
