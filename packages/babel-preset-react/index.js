module.exports = function(context, options) {
  const environment = process.env.NODE_ENV || 'development';
  const config = {
    presets: [
      require.resolve('@babel/preset-react'),
    ],
    plugins: [
    ],
  };

  if (environment === 'development') {
    config.plugins.push(
      require.resolve('babel-plugin-flow-react-proptypes'),
      require.resolve('@babel/plugin-transform-react-jsx-self'),
      require.resolve('@babel/plugin-transform-react-jsx-source'),
    );
  }

  if (environment === 'test') {
    config.plugins.push(
      require.resolve('@babel/plugin-transform-react-jsx-self'),
      require.resolve('@babel/plugin-transform-react-jsx-source'),
    );
  }

  if (environment === 'production') {
    config.plugins.push(
      require.resolve('babel-plugin-transform-react-remove-prop-types'),
      require.resolve('@babel/plugin-transform-react-inline-elements'),
      require.resolve('@babel/plugin-transform-react-constant-elements'),
    );
  }

  return config;
};
