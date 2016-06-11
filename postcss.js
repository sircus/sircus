const pkg = require('./package.json')
const banner =
  '!\n' +
  ' * ' + pkg.name + ' v' + pkg.version + '\n' +
  ' * ' + pkg.description + '\n' +
  ' * ' + pkg.homepage + '\n' +
  ' * License : ' + pkg.license + '\n' +
  ' * Author : ' + pkg.author.name + ' (' + pkg.author.url + ')' + '\n' +
  ' '

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-custom-media',
    'postcss-calc',
    'postcss-color-function',
    'postcss-banner',
    'postcss-reporter'
  ],
  'input': 'index.css',
  'output': 'dist/sircus.css',
  'postcss-banner': { banner: banner },
}
