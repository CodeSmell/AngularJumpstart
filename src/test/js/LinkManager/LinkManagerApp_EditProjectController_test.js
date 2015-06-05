describe('LinkManager EditProjectController',function() {
	var scope, ctrl, projSvc;

	// load the module
	beforeEach(module('LinkManagerApp'));

	beforeEach(inject(function($controller, $rootScope, _$location_, $injector) {
		scope = $rootScope.$new();
		$location = _$location_;
		projSvc = $injector.get('Projects');

		$location.path('/edit/20');
		ctrl = $controller('EditProjectController', {
			'$scope' : scope,
			'$location' : $location,
			'$routeParams': {projectId: '20'},
			'Projects' : projSvc
		});
	}));

	it('should have a project ready for editing', function() {
		// controller location   
	    expect($location.path()).toBe('/edit/20');
		
		// the controller was passed the id 20
		// so it should have "retrieved" the jQuery project
		expect(ctrl.project.id).toBe('20');
		expect(ctrl.project.name).toBe('jQuery');
		
		// change the description
		ctrl.project.name = 'jQuery (edit)';
		ctrl.save();
		
		// successful save redirects to main page
		expect($location.path()).toBe('/');
		
		var proj = projSvc.findById('20');
		expect(proj===null).toBe(false);
		expect(proj.name).toBe('jQuery (edit)');
	});
});