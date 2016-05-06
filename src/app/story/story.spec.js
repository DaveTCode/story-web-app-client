describe( 'Story', function() {
  describe( 'StoryController', function() {
    var $controller;

    beforeEach( module( 'story-book.story' ) );

    beforeEach( inject( function( _$controller_, _$state_ ) {
      $controller = _$controller_;
      $state = _$state_;
    }));

    it( 'should instantiate the controller with a single story', inject( function() {
      var controller = $controller('storyController', { $state: $state, story: {} });
      
      expect(controller.story).toEqual({});
    }));
  });
});
