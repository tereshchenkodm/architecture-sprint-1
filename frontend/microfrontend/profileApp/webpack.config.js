module.exports = {
  name: "profileApp",
  filename: "profileApi.js",
  exposes: {
    './profileApp': './src/utils',
  },
  shared: ["react", "react-dom"]
};