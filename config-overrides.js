const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireDefinePlugin = require('react-app-rewire-define-plugin');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  let configs = config;
  configs = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], configs);
  configs = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' },
  })(configs, env);
  configs = rewireDefinePlugin(configs, env, {
    __DEV__: false,
  });
  return configs;
};
