var path = require("path");

var config = {
  entry: ["./index"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',    
        include: path.join(__dirname, './'),
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
