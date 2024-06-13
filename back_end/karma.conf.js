// Karma configuration
// Generated on Sun Jun 09 2024 17:48:55 GMT-0600 (hora estándar central)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'Spec/**/*[sS]pec.js',
      'spec/jasmine_examples/**/*.[sS]pec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
      'yes'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      'spec/**/*[sS]pec.js':['coverage'],
      'spec/jasmine_examples/**/*.[sS]pec.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress', 'junit', 'coverage', 'sonarqube'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,
    Plugins:[
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage',
      'karma-sonarqube-unit-reporter',
      'karma-sonarqube-reporter'
    ],

    junitReporter:{
      outputDir: 'reports',
      outputFile: 'genericTestExecution.xml',
      suite: 'models',
      useBrowserName: true,
      nameFormatter: undefined,
      classNameFormatter: undefined,
      properties: {},
      xmlVersion: null
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'reports',
      subdir: 'coverage'
    },

    sonarqubeReporter: {
      basePath: 'spec',
      filePattern: 'Spec/**/*[sS]pec.js',
      encoding: 'UTF-8',
      outputFolder: 'reports',
      legacyMode: false,
      /* reportName:(metadata) => {
        return metadata.concat('xml').join('.');
      }, */
      reportName:'genericTestExecutionSonar.xml'
    }

    /* sonarQubeUnitReporter: {
        sonarQubeVersion: '8.7.0',
        outputFile: 'reports/genericTestExecution.xml',
        useBrowserName: false
    } */
  })
}