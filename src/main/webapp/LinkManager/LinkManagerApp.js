var app = angular.module('LinkManagerApp', [ 'ngRoute' ])

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'ProjectListController as projectList',
		templateUrl : 'list.html',
		resolve : {
			projects : function(Projects) {
				return Projects.fetch();
			}
		}
	}).when('/edit/:projectId', {
		controller : 'EditProjectController as editProject',
		templateUrl : 'detail.html'
	}).when('/new', {
		controller : 'NewProjectController as editProject',
		templateUrl : 'detail.html'
	}).otherwise({
		redirectTo : '/'
	});
})

app.controller('ProjectListController', function(projects) {
	this.projects = projects;
})

app.controller('NewProjectController', function($location, Projects) {
	this.save = function() {
		Projects.save(this.project);
		$location.path('/');
	};
})

app.controller('EditProjectController', function($location, $routeParams, Projects) {
	// get the project id #
	var projectId = $routeParams.projectId;

	// find the project to edit in the array
	this.project = Projects.findById(projectId);

	this.destroy = function() {
		Projects.remove(projectId);
		$location.path('/');
	};

	this.save = function() {		
		Projects.save(this.project);
		$location.path('/');
	};
});
