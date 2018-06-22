const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config) {
  // do stuff with the webpack config...
  let configs = config;
  configs = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  return configs;
};
