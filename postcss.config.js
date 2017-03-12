const pkg = require('./package.json')
const banner =
  pkg.name + ' v' + pkg.version + '\n' +
  pkg.description + '\n' +
  pkg.homepage + '\n' +
  'License : ' + pkg.license + '\n' +
  'Author : ' + pkg.author.name + ' (' + pkg.author.url + ')'

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-custom-media',
    'postcss-calc',
    'postcss-color-function',
    'autoprefixer',
    'css-mqpacker',
    'postcss-banner',
    'postcss-reporter'
  ],
  'input': 'index.css',
  'output': 'css/sircus.css',
  'postcss-banner': {
    banner: banner,
    important: true
  },
  'postcss-import': {
    onImport: function (sources) {
      global.watchCSS(sources, this.from)
    }
  }
}
