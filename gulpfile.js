var browsersync = require('browser-sync');
var reload      = browsersync.reload;
var gulp        = require('gulp');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var pkg         = require('./package.json');
var autoprefixerBrowsers = ['> 1%', 'last 2 version', 'Firefox ESR', 'Opera 12.1', 'IE 8', 'IE 9'];
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
  'browsersync': {
    server: './_public'
  },
  'uninstall': {
    files: [
      './dist',
      './_public',
      './docs/static/build',
      './scss/vendor'
    ]
  },
  'rubysass': {
    src: './scss/sircus.scss',
    dest: './docs/static/build',
    rubySassOptions: {
      sourcemap: true,
      noCache: true,
      // style:''
    },
    autoprefixer: autoprefixerBrowsers,
    fallback:{
      use:false,
      colorHexOptions:{rgba: true}
    },
    filter:'**/*.css',
    headerBanner : true,
    banner:headerBanner,
    pkg: pkg,
    notify :"Compiled Sass"
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
  'pagespeed': {
    production: 'http://sircus.blivesta.com',
    strategy: 'mobile'
  },
  'stylestats' :{
    src:  './dist/sircus.css'
  }
};

gulp.task('bower', require('gulptasks/lib/bower'));
gulp.task('rubysass', require('gulptasks/lib/rubysass'));
gulp.task('csslint', require('gulptasks/lib/csslint'));
gulp.task('cssmin', require('gulptasks/lib/cssmin'));
gulp.task('stylestats', require('gulptasks/lib/stylestats'));
gulp.task('deploy', require('gulptasks/lib/ghpage'));
gulp.task('bump', require('gulptasks/lib/bump'));
gulp.task('hugo', require('gulptasks/lib/hugo'));
gulp.task('uninstall', require('gulptasks/lib/uninstall'));
gulp.task('pagespeed', require('gulptasks/lib/pagespeed'));
gulp.task('browsersync', require('gulptasks/lib/browsersync'));

gulp.task('default',['browsersync'],function() {
  gulp.watch(['./scss/**/*.scss'], ['rubysass']);
  gulp.watch(['./docs/**/*.{html,css,md}'], ['hugo',reload]);
  gulp.watch(['./_public'], reload);
});

gulp.task('dist',function() {
  return gulp.src('./docs/static/build/**.css')
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
    'rubysass',
    [
      // 'csslint',
      'cssmin'],
    'hugo',
    ['bump','dist'],
    'stylestats',
    ['default']
  );
});
