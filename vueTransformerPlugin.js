// For React Native version 0.59 or later
var upstreamTransformer = require("metro-react-native-babel-transformer");

// You will need to use different transformers for different React Native versions
// However, versions older than v0.59 are no longer supported by Vue Native

// For React Native version 0.56 - 0.58
// var upstreamTransformer = require("metro/src/reactNativeTransformer");

// For React Native version 0.52 - 0.55
// var upstreamTransformer = require("metro/src/transformer");

// For React Native version 0.47 - 0.51
// var upstreamTransformer = require("metro-bundler/src/transformer");

// For React Native version 0.46
// var upstreamTransformer = require("metro-bundler/build/transformer");

var vueNaiveScripts = require("vue-native-scripts");
var vueExtensions = ["vue"]; // <-- Add other extensions if needed.

module.exports.transform = function({ src, filename, options }) {
  if (vueExtensions.some(ext => filename.endsWith("." + ext))) {
    return vueNaiveScripts.transform({ src, filename, options });
  }
  return upstreamTransformer.transform({ src, filename, options });
};