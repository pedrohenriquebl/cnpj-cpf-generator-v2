const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './static/popup.js',
    cnpj: './src/model/CNPJ.js',
    cpf: './src/model/CPF.js',
    style: './static/style/style.css'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  watch: true,
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [{from: 'static'}]
    })
  ]
};
