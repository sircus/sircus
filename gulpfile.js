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
    server: './_public',
    open: 'external'
  },
  'uninstall': {
    files: [
      './dist',
      './_public',
      './test/static/build'
    ]
  },
  'rubysass': {
    src: './src/scss/sircus.scss',
    dest: './test/static/build',
    rubySassOptions: {
      sourcemap: true,
      noCache: true
    },
    autoprefixer: autoprefixerBrowsers,
    fallback:false,
    filter:'**/*.css',
    headerBanner : true,
    banner:headerBanner,
    pkg: pkg,
    notify :"Compiled Sass"
  },
  'csslint': {
    setting:'./.csslintrc',
    src: './test/static/build/sircus.css'
  },
  'cssmin': {
    src: './test/static/build/sircus.css',
    dest: './test/static/build'
  },
  'ghpage' : {
    src : './_public/test/**/*',
    remoteUrl : 'git@github.com:sircus/test.git',
    branch : 'gh-pages'
  },
  'hugo' : {
    src : './test'
  },
  'bump': {
    version: pkg.version, // base
    src:  './bower.json', //
    dest: '.'
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
gulp.task('browsersync', require('gulptasks/lib/browsersync'));

gulp.task('default',['browsersync'],function() {
  gulp.watch(['./src/scss/**/*.scss'], ['rubysass']);
  gulp.watch(['./test/**/*.{html,css,md}'], ['hugo',reload]);
});

gulp.task('dist',function() {
  return gulp.src('./test/static/build/**.css')
    .pipe(gulp.dest('./dist'));
});


gulp.task('build', function() {
  runSequence(
    'bower','uninstall',
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
