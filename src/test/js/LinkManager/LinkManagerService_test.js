describe('LinkManager Service', function() {
	var projSvc;

	// load the module
	beforeEach(module('LinkManagerApp'));

	// inject your service for testing
	beforeEach(inject(function($injector) {
		expect($injector.has('Projects')).toBe(true);
		projSvc = $injector.get('Projects');
	}));

	it('should get the list of projects', function() {
		var projList = projSvc.fetch();

		expect(projList).toBeDefined();
		expect(projList.length).toBe(3);
	});

	it('should find a project by id', function() {
		var proj = projSvc.findById('20');
		
		expect(proj===null).toBe(false);
		expect(proj.name).toBe('jQuery');		
	});
	
	it('should add a project', function() {
		var newProj = {
	           id: '40',
               name: 'AngularUI',
               site: 'https://angular-ui.github.io/',
               description: 'contains UI widgets and directives'
             };
		
		expect(projSvc.fetch().length).toBe(3);
		
		projSvc.save(newProj);

		expect(projSvc.fetch().length).toBe(4);
		
		var proj = projSvc.findById('40');
		expect(proj===null).toBe(false);
		expect(proj.name).toBe('AngularUI');
	});
	
	
	it('should remove a project using the id', function() {
		var projList = projSvc.fetch();
		
		expect(projList.length).toBe(3);
		
		projSvc.remove('10');

		expect(projList.length).toBe(2);
		var proj = projSvc.findById('10');
		expect(proj===null).toBe(true);
	});

	
});