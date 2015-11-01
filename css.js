var fs = require('fs')
var cssnext = require('cssnext')
var pkg = require('./package.json')

var banner = [
'/*!',
' * ' + pkg.name + ' v' + pkg.version,
' * ' + pkg.description,
' * ' + pkg.homepage,
' * License : ' + pkg.license,
' * Author : ' + pkg.author.name + ' (' + pkg.author.url + ')',
' */',
'',
''].join('\n')

var src = fs.readFileSync('./src/sircus.css', 'utf8')

var features = {
  colorRgba: false,
  rem: false
}

var css = banner + cssnext(src, {
  features: features
})

var minify = banner + cssnext(src, {
  features: features,
  compress: true
})

fs.writeFileSync('dist/sircus.css', css)
fs.writeFileSync('dist/sircus.min.css', minify)
