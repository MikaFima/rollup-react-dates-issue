var Bundler = require('./Bundler.js');

var bundler = new Bundler();

bundler.bundle('./reproduction.js', './dist/firstBuild.js').then(() => {
    console.log('first build done');
    bundler.bundle('./reproduction.js', './dist/secondBuild.js').then(() => {
        console.log('second build done');
    });
})
