/**
 * Page Object for TheBasics 
 */
var AngularBasics = function() {
  this.nameInput = element(by.model('yourName'));
  this.greeting = element(by.binding('yourName'));

  this.get = function() {
    browser.get('Basic/TheBasics.html');
  };

  this.typeName = function(name) {
    this.nameInput.sendKeys(name);
  };
};

module.exports = AngularBasics;