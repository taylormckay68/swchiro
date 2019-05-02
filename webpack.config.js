const path = require('path');
const webpack = require('webpack');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: ['./src/bundle.js'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|)$/,
                loader: 'url-loader?limit=200000'
              }
        ]
    },
    output: {
        filename: 'js/bundle.min.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        // new BundleAnalyzerPlugin()
    ],
    node: {
       fs: "empty",
       net: "empty"
    }
};
