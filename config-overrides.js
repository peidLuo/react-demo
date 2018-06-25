const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
// const rewireLess = require('react-app-rewire-less-modules');
const rewireDefinePlugin = require('react-app-rewire-define-plugin');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  let configs = config;
  configs = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], configs);
  configs = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' },
    modules: true,
    localIndexName: '[name]__[local]___[hash:base64:5]',
  })(configs, env);
  configs = rewireDefinePlugin(configs, env, {
    __DEV__: false,
  });
  return configs;
};
