module.exports = {
  name: "mainApp",
  filename: "mainApi.js",
  remotes: {
    "photoApp": "photoApp@http://example.com/photoApp/photoApi.js",
    "popupApp": "popupApp@http://example.com/popupApp/popupApi.js",
    "profileApp": "profileApp@http://example.com/profileApp/profileApi.js"
  },
  shared: ["react", "react-dom"]
};