module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['ui5'],
        ui5: {
            mode: "html",
            type: "application",
           // config: {
                
            //     resourceRoots: {
            //         "sap.ui.demo.todo": "./webapp"
            //     }
            // },
            //configPath: 'webapp/manifest.json',
            configPath: 'ui5.yaml',
            tests: 'test/index.html' // Adjusted to relative path from basePath
        },
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',

        browsers: ['ChromeHeadless'],
        singleRun: true,
        reporters: ['progress'],
        plugins: [
            'karma-chrome-launcher',
            'karma-ui5'
        ],
        concurrency: Infinity
    });
};
