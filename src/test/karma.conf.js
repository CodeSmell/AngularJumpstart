module.exports = function ( config ) {
    config.set( {
    	//  used to resolve all relative paths
        basePath         : '../../',
        frameworks       : ['jasmine'],
        files            : [
            'src/main/webapp/js/**/*.js',
            'src/test/js/**/*.js'
        ],
        exclude          : [],
        preprocessors    : {
            'src/main/webapp/js/**/*.js' : ['coverage']
        },
        reporters        : ['progress', 'coverage', 'html', 'junit'],
        port             : 9876,
        colors           : true,
        logLevel         : config.LOG_INFO,
        browsers         : ['Chrome', 'PhantomJS'],
        plugins          : [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-html-reporter',
            'karma-coverage'
        ],
        coverageReporter : {
            type : 'html',
            dir  : 'target/test/coverage/'
        },
        htmlReporter: {
        	outputDir: 'target/test/karma_html'
        },
        junitReporter: {
            outputFile: 'target/test/test-results.xml'
        },
        // options to keep running and watch for changes
        singleRun        : true,
        autoWatch        : false
    } );
};