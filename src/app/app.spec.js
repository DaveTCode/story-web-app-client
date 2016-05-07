describe( 'Main Application File', function() {
  describe( 'HomeController', function() {
    var $controller;

    beforeEach( module( 'story-book' ) );

    beforeEach( inject( function( _$controller_, _$state_ ) {
      $controller = _$controller_;
      $state = _$state_;
    }));

    it( 'should instantiate the controller with a list of unassigned sections', inject( function() {
      var controller = $controller('homeController', { $state: $state, unassignedSections: [] });
      
      expect(controller.unassignedSections).toEqual([]);
    }));
  });
});
