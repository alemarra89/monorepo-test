/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const fs = require('fs')
const getDevPaths = require('get-dev-paths')

const projectRoot = __dirname
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  /*
  // Old way
  getProjectRoots: () => Array.from(new Set(
    getDevPaths(projectRoot).map($ => fs.realpathSync($))
  )),
  */
  // New way
  watchFolders: [
    ...Array.from(new Set(
      getDevPaths(projectRoot).map($ => {
        console.log('percorso', $, fs.realpathSync($));
        return fs.realpathSync($);
      })
    )),
    fs.realpathSync('../')
  ]/*,
  watchFolders: [
    fs.realpathSync('../commons')
  ]*/
}

/*
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
*/