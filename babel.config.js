module.exports = {
  babelrcRoots: ['.', './packages/*'],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
        pragmaFrag: 'Fragment'
      }
    ]
  ]
}
