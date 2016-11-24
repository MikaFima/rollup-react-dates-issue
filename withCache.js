var Bundler = require('./Bundler.js');

var bundler = new Bundler();

bundler.bundle('./reproduction.js', './dist/firstBuildWithCache.js', true).then(() => {
    console.log('first build with cache done');
    bundler.bundle('./reproduction.js', './dist/secondBuildWithCache.js', true).then(() => {
        console.log('second build with cache done');
    });
})
