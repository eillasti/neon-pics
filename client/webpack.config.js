const path = require('path');
const babelEnvPreset = ['env', {
    "targets": {
        "browsers": ["last 2 versions"]
    }
}];

const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/../public/javascripts')
    },
    devtool    : 'source-map',
    resolve: {
        alias: {
            constants: path.resolve(__dirname, 'src/constants'),
            utils: path.resolve(__dirname, 'src/utils'),
            components: path.resolve(__dirname, 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: [babelEnvPreset, 'react'], plugins: ['transform-object-rest-spread'] },
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]_[hash:base64:5]', // Add naming scheme
                        },
                    }
                ],
            },
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname
            }
        })
    ]
};