module.exports = function(context, options) {
  const environment = process.env.NODE_ENV || 'development';
  const config = {
    presets: [
      require.resolve('@babel/preset-react'),
    ],
  };

  return config;
};
