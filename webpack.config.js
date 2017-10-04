var webpack = require("webpack");

module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js",
        "./client/app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    output: { path: __dirname, filename: "./client/public/bundle.js" },
    resolve: {
        root: __dirname,
        alias: {
            Main: "./client/app/components/main.jsx",
            MainContainer: "./client/app/components/MainContainer.jsx",
            UIstore: "./client/app/store/UIstore.js",
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [{
            loader: ["babel-loader"],
            query: {
                presets: ["react", "es2015", "stage-0"],
                plugins: ["transform-decorators-legacy", "transform-class-properties"]
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: "cheap-module-eval-source-map"
};