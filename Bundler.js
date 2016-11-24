var rollup = require('rollup').rollup;
var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');
var replace = require('rollup-plugin-replace');

const Bundler = function() {
    this.cache;

    this.bundle = (entry, outro) => {
        const rollupOptions = {
            entry: entry,
            cache: this.cache,
            indent: true,

            plugins: [
                nodeResolve({
                    extensions: ['.js', '.jsx'],
                }),
                commonjs({
                    extensions: ['.js', '.jsx'],
                }),
                replace({
                    values: {
                        'process.env.NODE_ENV': '"env"',
                    },
                }),
            ],
        };

        return rollup(rollupOptions).then((bundle) => {
            this.cache = bundle;

            return bundle.write({
                useStrict: true,
                format: 'umd',
                dest: outro,
                moduleName: 'Reproduction'
            });
        }).catch((e) => {
            console.log(e);
        });
    }
}

module.exports = Bundler;
