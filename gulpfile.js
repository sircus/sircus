var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var gulp        = require('gulp');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var pkg         = require('./package.json');
var autoprefixerBrowsers = ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'];
var headerBanner = [
'/*!',
' * <%= pkg.name %> - <%= pkg.description %>',
' * @version v<%= pkg.version %>',
' * @link    <%= pkg.homepage %>',
' * @author  <%= pkg.author %>',
' * @license <%= pkg.license %>',
' */',
''].join('\n');

module.exports = {
  'browserSync': {
    notify: true,
    https: false,
    server: './_public',
  },
  'uninstall': {
    files: [
      './dist',
      './_public',
      './docs/static/build',
      './scss/vendor'
    ]
  },
  'sass': {
    src: './scss/sircus.scss',
    dest: './docs/static/build',
    autoprefixer: autoprefixerBrowsers,
    pkg: pkg,
    headerBanner: true,
    banner:headerBanner,
    staticGenerator: false,
    staticGeneratorBuild:''
  },
  'rubysass': {
    src: './scss/sircus.scss',
    dest: './docs/static/build',
    autoprefixer: autoprefixerBrowsers,
    pkg: pkg,
    headerBanner: true,
    banner:headerBanner,
    staticGenerator: false,
    staticGeneratorBuild:''
  },
  'csslint': {
    setting:'./.csslintrc',
    src: './docs/static/build/sircus.css'
  },
  'cssmin': {
    src: './docs/static/build/sircus.css',
    dest: './docs/static/build'
  },
  'ghpage' : {
    src : './_public/**/*',
    remoteUrl : 'https://github.com/sircus/sircus.github.io.git',
    branch : 'master'
  },
  'hugo' : {
    src : './docs'
  },
  'bump': {
    version: pkg.version, // base
    src:  './bower.json', //
    dest: '.'
  },
  'psi': {
    production: 'http://sircus.blivesta.com',
    strategy: 'mobile'
  }
};

gulp.task('bower', require('gulptasks/lib/bower'));
// gulp.task('rubysass', require('gulptasks/lib/rubysass'));
gulp.task('sass', require('gulptasks/lib/sass'));
gulp.task('csslint', require('gulptasks/lib/csslint'));
gulp.task('cssmin', require('gulptasks/lib/cssmin'));
gulp.task('deploy', require('gulptasks/lib/ghpage'));
gulp.task('bump', require('gulptasks/lib/bump'));
gulp.task('hugo', require('gulptasks/lib/hugo'));
gulp.task('uninstall', require('gulptasks/lib/uninstall'));
gulp.task('psi', require('gulptasks/lib/pagespeed'));
gulp.task('server', function(){ browserSync.init(null, module.exports.browserSync); });

gulp.task('default',['server'],function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['./docs/**/*.html', './docs/**/*.md', './docs/**/*.css'], ['hugo',reload]);
});

gulp.task('dist',function() {
  return gulp.src('./docs/static/build/**')
    .pipe(gulp.dest('./dist'));
});

gulp.task('bower-html5-reset',function() {
  return gulp.src('./bower_components/HTML5-Reset/assets/css/reset.css')
    .pipe(rename('_html5-reset.scss'))
    .pipe(gulp.dest('./scss/vendor/'));
});

gulp.task('bower-normalize',function() {
  return gulp.src('./bower_components/normalize.css/normalize.css')
    .pipe(rename('_normalize.scss'))
    .pipe(gulp.dest('./scss/vendor/'));
});

gulp.task('build', function() {
  runSequence(
    'bower','uninstall',
    ['bower-html5-reset','bower-normalize'],
    'sass',
    ['csslint','cssmin'],
    'hugo',
    ['bump','dist','default']
  );
});