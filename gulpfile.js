var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var nested = require('postcss-nested');

gulp.task('css', function() {
    var plugins = [
        autoprefixer(),
        nested(),
        // cssnano()
    ];
    return gulp.src('./src/partials/styles/*.*css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});