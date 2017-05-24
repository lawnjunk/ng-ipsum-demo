// Karma configuration
// Generated on Wed May 24 2017 10:02:07 GMT-0700 (PDT)
const webpack = require('./webpack.config.js');
webpack.entry = {};
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js',
      'app/entry.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*.js': ['webpack'],
      'app/entry.js': ['webpack'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};
