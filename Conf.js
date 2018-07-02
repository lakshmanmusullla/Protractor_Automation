exports.config={

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['BaseSpec.js'],
    capabilities: {
        browserName: 'chrome'
    }

};