var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var del         = require('del');
var gulp        = require('gulp');
var rename      = require('gulp-rename');
var pagespeed   = require('psi');
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
      './public',
      './docs/static/css/build',
      './docs/static/vendor',
      './scss/vendor'
    ]
  },
  'sass': {
    src: './scss/sircus.scss',
    dest: './docs/static/css/build',
    autoprefixer: autoprefixerBrowsers,
    pkg: pkg,
    headerBanner: true,
    banner:headerBanner,
    staticGenerator: false,
    staticGeneratorBuild:''
  },
  'csslint': {
    setting:'./.csslintrc',
    src: './docs/static/css/build/sircus.css'
  },
  'cssmin': {
    src: './docs/static/css/build/sircus.css',
    dest: './docs/static/css/build'
  },
  'ghpage' : {
    src : './public/**/*',
    remoteUrl : 'https://github.com/sircus/sircus.github.io.git',
    branch : 'master'
  },
  'hugo' : {
    buildMessages : '<span style="color: grey">Running:</span> $ hugo'
  },
  'bump': {
    version: pkg.version, // base
    src:  './bower.json', //
    dest: '.'
  },
  'psi': {
    production: 'http://sircus.blivesta.com',
  }
};

gulp.task('bower', require('gulptasks/lib/bower'));
gulp.task('sass', require('gulptasks/lib/sass'));
gulp.task('csslint', require('gulptasks/lib/csslint'));
gulp.task('cssmin', require('gulptasks/lib/cssmin'));
gulp.task('deploy', require('gulptasks/lib/ghpage'));
gulp.task('bump', require('gulptasks/lib/bump'));
gulp.task('hugo', require('gulptasks/lib/hugo'));
gulp.task('uninstall', del.bind(null, module.exports.uninstall.files));
gulp.task('server', function(){ browserSync.init(null, module.exports.browserSync); });

gulp.task('default',['server'],function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['./docs/**/*.html', './docs/**/*.md', './docs/**/*.css'], ['hugo',reload]);
});

gulp.task('dist',function() {
  return gulp.src('./docs/static/css/build/**')
    .pipe(gulp.dest('./dist'));
});

gulp.task('bower-html5-reset',function() {
  return gulp.src('./bower_components/HTML5-Reset/assets/css/reset.css')
    .pipe(rename('html5-reset.css'))
    .pipe(gulp.dest('./docs/static/vendor/'))
    .pipe(rename('_html5-reset.scss'))
    .pipe(gulp.dest('./scss/vendor/'));
});

gulp.task('bower-normalize',function() {
  return gulp.src('./bower_components/normalize.css/normalize.css')
    .pipe(rename('normalize.css'))
    .pipe(gulp.dest('./docs/static/vendor/'))
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

gulp.task('psi', function (cb) {
  pagespeed.output(module.exports.psi.production, {
    strategy: 'mobile'
  }, cb);
});
