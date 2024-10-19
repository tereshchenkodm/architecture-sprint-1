module.exports = {
  name: "photoApp",
  filename: "photoApi.js",
  exposes: {
    './photoApp': './src/utils',
  },
  shared: ["react", "react-dom"]
};