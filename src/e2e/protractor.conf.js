exports.config = {
	framework: "jasmine2",
		
	// The address of a running selenium server.
	seleniumAddress : 'http://localhost:4444/wd/hub',
	
	// Spec patterns are relative to the configuration file location
	specs : [ 'js/*/*.spec.js' ],
	
	baseUrl: 'http://localhost:8080/AngularJumpstart/',
	
	capabilities: {
		  'browserName': 'phantomjs',
		  'phantomjs.binary.path': require('phantomjs').path
	},
	
	onPrepare : function() {
		var reporters = require('jasmine-reporters');
		var junitReporter = new reporters.JUnitXmlReporter({
		    savePath: 'target/e2e',
		    consolidateAll: false		    
		});
		jasmine.getEnv().addReporter(junitReporter);
	}
};