module.exports = function(context, options = {}) {
  const environment = process.env.NODE_ENV || 'development';
  const config = {
    presets: [
      [require.resolve('@babel/preset-env'), options],
      require.resolve('@babel/preset-flow'),
    ],

    plugins: [
      require.resolve('@babel/plugin-syntax-class-properties'),
      require.resolve('@babel/plugin-syntax-dynamic-import'),
      require.resolve('@babel/plugin-syntax-export-extensions'),
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
    ],
  };

  return config;
};
