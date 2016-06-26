const gulp = require('gulp'),
      // webpack = require('webpack'),
      // gulpWebpack = require('gulp-webpack'),
      webpack = require('gulp-webpack'),
      connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    port: 8888
  });
});

gulp.task('scripts', () => {
  // webpack(require('./webpack.config.js'));
  // return gulp.src('./app/index.js')
  //   .pipe(gulpWebpack({}, webpack))
  //   .pipe(gulp.dest('./app'));
  return gulp.src('./app/index.js')
  .pipe(webpack({
    // watch: true,
    // entry: "./app/index.js",
    output: {
       filename: "bundle.js",
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015','react']
          }
        }
      ]
    }
  }))
  .pipe(gulp.dest('app'));
});

gulp.task('watch-js', () => {
  gulp.watch('./app/**/*.js', ['scripts']);
});

gulp.task('default', ['connect','watch-js']);
