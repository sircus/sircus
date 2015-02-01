var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var cssscss     = require('css-scss');
var del         = require('del');
var gulp        = require('gulp');
var pagespeed   = require('psi');
var runSequence = require('run-sequence');
var fs = require('fs');
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
  browserSync: {
    notify: true,
    https: false,
    server: './_gh_pages',
  },
  uninstall: {
    files: [
      './dist',
      './_gh_pages',
      './docs/build'
    ]
  },
  csslint: {
    setting:'./.csslintrc',
    src: './docs/build/kicss.css'
  },
  cssmin: {
    src: './docs/build/kicss.css',
    dest: './docs/build/'
  },
  ghpage : {
    src : './_gh_pages/**/*',
    remoteUrl : 'https://github.com/kicss/kicss.github.io.git',
    branch : 'master'
  },
  jekyll : {
    buildMessages : '<span style="color: grey">Running:</span> $ jekyll build'
  },
  bump: {
    version: pkg.version, // base
    src:  './bower.json', //
    dest: '.'
  },
  dist: {
    src:  './docs/build/**',
    dest: './css'
  },
  sass : {
    src : './scss/kicss.scss',
    dest : './docs/build',
    autoprefixer: autoprefixerBrowsers,
    pkg: pkg,
    headerBanner : true,
    banner:headerBanner,
    jekyll : true,
    jekyllPub: './_gh_pages'
  }
};

gulp.task('sass', require('gulptasks/lib/sass'));
gulp.task('csslint', require('gulptasks/lib/csslint'));
gulp.task('cssmin', require('gulptasks/lib/cssmin'));
gulp.task('deploy', require('gulptasks/lib/ghpage'));
gulp.task('bump', require('gulptasks/lib/bump'));
gulp.task('jekyll', require('gulptasks/lib/jekyll'));
gulp.task('uninstall', del.bind(null, module.exports.uninstall.files));
gulp.task('server', function(){ browserSync.init(null, module.exports.browserSync); });

gulp.task('default',['server'],function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['./docs/**/*.html', './docs/build/*.css', './docs/build/*.css'], ['jekyll',reload]);
});

gulp.task('dist',function() {
  return gulp.src(module.exports.dist.src)
    .pipe(gulp.dest(module.exports.dist.dest));
});

gulp.task('build', function() {
  runSequence(
    'uninstall',
    ['sass'],
    'csslint',
    'cssmin',
    ['jekyll'],
    'bump', 'dist', 'default'
  );
});
