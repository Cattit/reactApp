const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"  // babel-loader используется для загрузки наших JSX/JavaScript файлов
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]   // css-loader для загрузки и объединения всех CSS файлов в один, а style-loader добавит все стили внутрь тега документа style
                // Webpack выполняет loaders в обратном порядке: с последнего до первого, то есть справа налев
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"    // генерирует HTML файл, затем вставляет в него скрипт и записывает файл на dist/index.html
        })
    ]
};