module.exports = {
  name: "popupApp",
  filename: "popupApi.js",
  exposes: {
    './popupApp': './src/utils',
  },
  shared: ["react", "react-dom"]
};