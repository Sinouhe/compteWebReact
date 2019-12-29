const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // le fichier js d'entrée
    entry: {
        main: './src/index.js',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/front'),
        publicPath: '/'
    },

    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist/front'),
        index: 'index.html',
        port: 9001
    },
    
    module: {
        rules: [
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svg-react-loader',
                    options: {
                        tag: 'symbol',
                        attrs: {
                            title: 'example',
                        },
                        name: 'MyIcon',
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    // plugins sont des librairies qui font ce que les loader ne peuvent faire
    // on peut aussi avec d'autre pluggin créer des constante etc ...
    // CleanWebpackPlugin va supprimer tout les fichier du dist folder avant un run build
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        }),
        new BundleAnalyzerPlugin({analyzerPort: 50001})
    ]
};