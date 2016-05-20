exports.config = {

    /**
     * language of your feature files
     * options: french, spanish, norwegian, polish, german, russian
     */
    language: 'english',

    /**
     * set selenium host and port
     */
    selenium: {
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
    },
    // sauceConnectOpts: {
    //     doctor: true,
    //     logger: function (message) {},
    //     verbose: true,
    //     username: process.env.SAUCE_USERNAME,
    //     accessKey: process.env.SAUCE_ACCESS_KEY,
    //     tunnelIdentifier: true,
    // },

    // desiredCapabilities: {
    //     browserName: 'chrome',
    //     version: '27',
    //     platform: 'XP',
    //     tags: ['examples'],
    //     name: 'This is an example test',
    //    'public': false
    // },
    // host: 'ondemand.saucelabs.com',
    // port: 80,
    // user: process.env.SAUCE_USERNAME,
    // key: process.env.SAUCE_ACCESS_KEY,
    // sauceConnect: true,
    // sauceConnectOpts: {
    //     doctor: true,
    //     logger: function (message) {},
    //     verbose: true,
    //     username: process.env.SAUCE_USERNAME,
    //     accessKey: process.env.SAUCE_ACCESS_KEY,
    //     tunnelIdentifier: true,
    // },

    // services: ['sauce'],
    // user: process.env.SAUCE_USERNAME,
    // key: process.env.SAUCE_ACCESS_KEY,
    // host: 'ondemand.saucelabs.com',
    // // port: 80,
    // sauceConnect: true,
    // sauceConnectOpts: {
    //     doctor: true,
    //     logger: function (message) {},
    //     verbose: true,
    //     username: process.env.SAUCE_USERNAME,
    //     accessKey: process.env.SAUCE_ACCESS_KEY,
    //     tunnelIdentifier: true,
    // },

    /**
     * webdriverio options
     *
     * - logLevel: stdout log level
     *   Options: *verbose* | *silent* | *command* | *data* | *result*
     *
     * - coloredLogs: Enables colors for log output
     *   default: true
     *
     * - singleton: Set to true if you always want to reuse the same remote
     *   default: false
     *
     * - waitforTimeout: Default timeout for all waitForXXX commands
     *   default: 500
     */
    options: {
        logLevel: 'verbose'
    },

    /**
     * desired capabilities
     */
    capabilities: {
        browserName: 'chrome'
    },

    /**
     * location of feature files
     */
    featureFiles: [
        'test/features/**/*.feature'
    ],

    /**
     * environment variables
     *
     * - baseUrl: sets base url for `Given I open the site "/some/url.html"`
     */
    env: {
        baseUrl: 'http://localhost:8080'
    },

    /**
     * mocha options
     * @see http://mochajs.org/
     */
    mochaOpts: {
        reporter: 'spec',
        timeout: 10000,
        require: 'chai',
        // watch: './test/steps',
        // 'watch-extensions': 'js,feature',
        compilers: ['js:babel-core/register'],
    },
};
