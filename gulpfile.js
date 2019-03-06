const gulp = require('gulp'),
gulpjavascriptObfuscator = require('gulp-javascript-obfuscator'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
uglify = require("gulp-uglify");

gulp.task('default', function() {
    return gulp.src(['js/*.js','!js/*.min.js'])
    .pipe(gulpjavascriptObfuscator()) //十六进制加密
    .pipe(concat('jquery.plugin.min.js')) //压缩到一个文件内
    .pipe(gulp.dest('build/js'));
});

gulp.task('default',  function() {
    return gulp.src(['demo/pages/**'])
      .pipe(gulp.dest('build/demo/pages'))
});

// gulp.task('default', function() {
//     return gulp.src(['plugins/*.js','!plugins/*.min.js'])
//     .pipe(gulpjavascriptObfuscator())
//     .pipe(rename({suffix: '.min'})) //重命名带min后缀
//     .pipe(gulp.dest('build/plugins'));
// });


// gulp.task('default', function() {
//     return gulp.src('plugins/plugin.js')
//     .pipe(gulpjavascriptObfuscator({
//         compact:true,
//         sourceMap: true
//     }))
//     .pipe(rename('plugin.min.js'))
//     .pipe(gulp.dest('build'));
//   });

// gulp.task('default', function() {
//     return gulp.src('plugins/*.js')
//     .pipe(gulpjavascriptObfuscator())
//     .pipe(gulp.dest('build/plugins'));
// });

// gulp.task('default', function() {
//     return gulp.src('plugins/*.js')
//     .pipe(uglify())
//     .pipe(concat('plugin.min.js'))
//     .pipe(gulp.dest('build'));
// });

// gulp.task('default', function() {
//     return gulp.src('plugins/*.css')
//     .pipe(minifyCss())
//     .pipe(concat('plugin.min.js'))
//     .pipe(gulp.dest('build'));
// });