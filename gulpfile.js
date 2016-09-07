'use strict'

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('clean', shell.task([
    'rm -rfv ./dist/*'
  ])
);

gulp.task('make-dist-js', shell.task([
    'mkdir -p ./dist/js'
  ])
);

gulp.task('copy-static', shell.task([
    'cp -rv ./app/index.html ./app/css ./app/images ./dist/'
  ])
);

gulp.task('react', shell.task([
    'browserify -t [ babelify --presets [ react ] ] app/js/app.js -o dist/js/bundle.js'
  ])
);

gulp.task('default', shell.task([
    'gulp clean', 'gulp make-dist-js', 'gulp copy-static', 'gulp react'
  ])
);

gulp.task('generate-final-index', shell.task([
    'jsx app/js .', 'rm Sample.react.js', 'rm app.js', 'mv NumericField.react.js index.js'
  ])
);

gulp.task('publish', shell.task([
    'npm publish'
  ])
);

