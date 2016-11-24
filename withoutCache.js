var Bundler = require('./Bundler.js');

var bundler = new Bundler();

bundler.bundle('./reproduction.js', './dist/firstBuildWithoutCache.js', false).then(() => {
    console.log('first build without cache done');
    bundler.bundle('./reproduction.js', './dist/secondBuildWithoutCache.js', false).then(() => {
        console.log('second build without cache done');
    });
})
