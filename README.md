# AngularJumpstart
This is a template to jump start a JavaScript / AngularJS project in Eclipse IDE.
This was put together after reading numerous blogs and forums. 

The project structure is modeled after a Maven project

```
src
---- main
-------- java 
-------- resources
------------ karma.conf.js
-------- webapp
------------ WEB-INF
---------------- web.xml
------------ lib (third party js) 
------------ js
---------------- hello.js
------------ TheBasics.html

---- test (unit tests)
-------- java
-------- js
------------ hello_test.js

---- e2e (end to end tests)
-------- js
------------ TheBasics.po.js
------------ TheBasics.spec.js
-------- protractor.conf.js

package.json
pom.xml

``` 

# Git and Eclipse
Create a folder for the Git repositories outside of the Eclipse workspace. 
If the Eclipse workspace is c:\workspace use something like this:

        c:\dev\sandbox

Use Git Bash to clone this project into the local directory for Git (created above).

	git clone https://github.com/CodeSmell/AngularJumpstart.git


Use eGit in Eclipse and choose the _add an existing local Git repository to this view_ option.
Specify the directory where the Git project was cloned.

	c:\dev\sandbox\AngularJumpstart

In Eclipse, right click on the newly created repository in the Git Repository view.
* choose Import Project... and then select New Project Wizard
* choose the appropriate project (Static Web Project)
* make sure that you set the project location to the directory where the Git project was cloned 

# Configure the Eclipse project 
Install the Angular JS Eclipse plugin via Eclipse Marketplace

In Eclipse, right click on the project and choose the _Configure | Convert to AngularJS project_ menu option 
Then choose the _Configure | Convert to Maven project_ menu option

# Getting a project ready for JavaScript unit testing
Download and install nodeJS

	https://nodejs.org/

Create a file name: `package.json`  (already created) 

```
    {
        "name": "AngularJumpstart",
        "private": true,
    }
```

Install karma (unit test runner). 
Navigate to the project root directory and run these commands:

```
npm install karma --save-dev 
npm install karma-jasmine --save-dev 
npm install karma-chrome-launcher --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install karma-junit-reporter --save-dev
npm install karma-coverage --save-dev
npm install karma-html-reporter --save-dev
```

This will create a `node_modules` folder, which was added to _.gitignore_. 

Create a file name: `karma.conf.js` (already created).

# Running JavaScript Unit Tests
## From the Command Line
Install the karma cmd line

    npm install -g karma-cli 

From the command line navigate to the project root directory and run this:
	
	karma start src/main/resources/karma.conf.js

## From Maven
Add the maven-karma plugin to POM.xml (already done). 
Then run the test goals: 
	
	mvn clean test

## Test reports
Under the target folder there will be junit XML test reports.
In Eclipse, you can double-click them to see the results of the tests in the JUnit view.

# Running Angular E2E Tests
