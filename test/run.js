#!/usr/bin/env node

const sauceConnectLauncher = require('sauce-connect-launcher'),
options = {
    // Sauce Labs username.  You can also pass this through the 
    // SAUCE_USERNAME environment variable 
    username: process.env.SAUCE_USERNAME,

    // Sauce Labs access key.  You can also pass this through the 
    // SAUCE_ACCESS_KEY environment variable 
    accessKey: process.env.SAUCE_ACCESS_KEY,

    // Log output from the `sc` process to stdout? 
    verbose: true,

    // Enable verbose debugging (optional) 
    verboseDebugging: false,

    // Port on which Sauce Connect's Selenium relay will listen for 
    // requests. Default 4445. (optional) 
    port: null,

    // Proxy host and port that Sauce Connect should use to connect to 
    // the Sauce Labs cloud. e.g. "localhost:1234" (optional) 
    proxy: null,

    // Change sauce connect logfile location (optional) 
    logfile: null,

    // Period to log statistics about HTTP traffic in seconds (optional) 
    logStats: null,

    // Maximum size before which the logfile is rotated (optional) 
    maxLogsize: null,

    // Set to true to perform checks to detect possible misconfiguration or problems (optional) 
    doctor: null,

    // Identity the tunnel for concurrent tunnels (optional) 
    tunnelIdentifier: null,

    // an array or comma-separated list of regexes whose matches 
    // will not go through the tunnel. (optional) 
    fastFailRexegps: null,

    // an array or comma-separated list of domains that will not go 
    // through the tunnel. (optional) 
    directDomains: null,

    // A function to optionally write sauce-connect-launcher log messages. 
    // e.g. `console.log`.  (optional) 
    logger: function (message) {},

    // an optional suffix to be appended to the `readyFile` name. 
    // useful when running multiple tunnels on the same machine, 
    // such as in a continuous integration environment. (optional) 
    readyFileId: null
  };

sauceConnectLauncher(options, function (err, sauceConnectProcess) {
  console.log("Started Sauce Connect Process");
    /**
     * wrapper arround mocha cmd
     * figures out options and calls mocha with desired arguments
     */

    var spawn = require('child_process').spawn,
        path = require('path'),
        args = [path.join(__dirname, '..', 'node_modules', 'mocha', 'bin', '_mocha')],
        config = require('./config').config,
        flag,
        proc;

    /**
     * execute init script with mocha
     * init script handles the rest
     */
    args.push(path.join(__dirname, 'support', 'init.js'));

    /**
     * set mocha configs
     */
    for (flag in (config.mochaOpts || {})) {
        args.push('--' + flag + '=' + config.mochaOpts[flag]);
    }

    process.argv.slice(2).forEach(function (arg) {
        var flag;

        /**
         * set mocha specific args
         */
        flag = arg.split('=')[0];
        switch (flag) {
            case '-d':
                args.unshift('--debug');
                break;
            case 'debug':
            case '--debug':
            case '--debug-brk':
                args.unshift(arg);
                break;
            case '-gc':
            case '--expose-gc':
                args.unshift('--expose-gc');
                break;
            case '--gc-global':
            case '--harmony':
            case '--harmony-proxies':
            case '--harmony-collections':
            case '--harmony-generators':
            case '--prof':
                args.unshift(arg);
                break;
            default:
                if (0 === arg.indexOf('--trace')) {
                    args.unshift(arg);
                } else {
                    args.push(arg);
                }
                break;
        }
    });

    proc = spawn(process.argv[0], args, {
        stdio: 'inherit'
    });
    proc.on(
        'exit',
        function (code, signal) {
            process.on(
                'exit',
                function () {
                    if (signal) {
                        process.kill(process.pid, signal);
                    } else {
                        process.exit(code);
                    }
                }
            );
        }
    );
});


