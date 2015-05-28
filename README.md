# AngularJumpstart
This is a template to jump start a JavaScript / AngularJS project in Eclipse IDE.
This was put together after reading numerous blogs and forums. 

# Git and Eclipse
establish an area for Git repositories outside of the Eclipse workspace
if the workspace is c:\workspace use something like this:

        c:\dev\sandbox

Use Git Bash to clone project into local directory (above)

	git clone https://github.com/CodeSmell/AngularJumpstart.git


use eGit in Eclipse and choose the add an existing local Git repository to this view button

	c:\dev\sandbox\AngularJumpstart

Right click on the newly created repository in the Git Repository view in eGit

choose Import Project... and then select New Project Wizard

choose the appropriate project (Static Web Project)

Make sure that you set the project location to the working directory for the Git repository 
	
	c:\dev\sandbox\AngularJumpstart


# Update the Eclipse project
Right click on the newly created project
Convert to AngularJS project 
-- install Angular JS Eclipse plugin via marketplace

Right click on the newly created project
Convert to Maven project

# Getting a project ready for JavaScript unit testing
* Download and install nodeJS

	https://nodejs.org/

* Create a file name: package.json  
** already created for you 

    
    {
        "name": "AngularJumpstart",
        "private": true,
    }

* Install karma (unit test runner)
** navigate to the project root directory and run these commands:
```
npm install karma --save-dev 
npm install karma-jasmine --save-dev 
npm install karma-chrome-launcher --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install karma-junit-reporter --save-dev
npm install karma-coverage --save-dev
npm install karma-html-reporter --save-dev
```

this creates the node_modules folder, which was added to _.gitignore_

* install karma cmd line

    npm install -g karma-cli 

* create a file name: karma.conf.js  
** already created for you 

# Running Tests
From the command line navigate to the project root directory and run this:
	
	karma start src/main/resources/karma.conf.js

or 

Add maven-karma plugin to POM.xml (already done) and run 
	
	mvn clean test



