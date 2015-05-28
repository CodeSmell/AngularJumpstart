/**
 * Protractor/Jasmine test 
 */
var AngularBasics = require('./TheBasics.po.js');

describe('TheBasicsTest', function() {
	var basicPage;
	
	beforeEach(function(){
		basicPage = new AngularBasics();
		expect(basicPage).not.toBeUndefined();
		basicPage.get();
	});
	
	it('tests the Basic page', function() {
		basicPage.typeName("Yoda");
		expect(basicPage.greeting.getText()).toEqual('Hello Yoda!');
	});
});