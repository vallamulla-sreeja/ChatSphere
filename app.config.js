const { getDefaultConfig } = require('expo/metro-config');

module.exports = {
  expo: {
    name: "ChatSphere",
    slug: "chatsphere",
    version: "1.0.0",
    scheme: "chatsphere",
    web: {
      bundler: "webpack"
    },
    plugins: [
      "expo-router"
    ],
    extra: {
      router: {
        origin: false
      }
    }
  },
  ...getDefaultConfig(__dirname)
};