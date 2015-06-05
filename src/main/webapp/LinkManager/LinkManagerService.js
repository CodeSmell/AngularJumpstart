app.service('Projects', function() {

	this.projectsArray = [
	     		        {
	     		           id: '10',
	                        name: 'AngularJS',
	                        site: 'http://angularjs.org',
	                        description: 'HTML enhanced for web apps!'
	                      },
	                      {
	                        id: '20',
	                        name: 'jQuery',
	                        site: 'http://jquery.com/',
	                        description: 'Write less, do more.'
	                      },
	                      {
	                        id: '30',                	 
	                        name: 'Backbone',
	                        site: 'http://documentcloud.github.com/backbone/',
	                        description: 'Models for your apps.'
	                      }];

	
	this.getIndexById = function(id){
		var len = this.projectsArray.length;
		for (var i=0; i < len; i++) {
			if (this.projectsArray[i].id == id) {
				return i;
			}
		}
		return null;		
	}
	
	this.findById = function(id) {
		var index = this.getIndexById(id);
		if (index!=null) {
			return this.projectsArray[index];
		}
		return null;
	}
	
	this.save = function(project) {
		// this would normally call a REST service to add the project
		var index = this.getIndexById(project.id);
		if (index!=null){
			// update existing project
			this.projectsArray.splice(index, 1, project);
		}
		else {
			// new project
			if (!project.id) project.id = Math.random();
			this.projectsArray.push(project);	
		}		
	}
	
	this.remove = function(id) {
		// this would normally call a REST service to remove the project
		var index = this.getIndexById(id);
		if (index!=null){
			this.projectsArray.splice(index, 1);
		}
	}
	
	this.fetch = function() {
		// this would normally call a REST service
		// to get the list
		return this.projectsArray;
	};
})