//引入所需的插件
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
//如果使用npm安装，则安装gulp-ruby-sass插件，如果使用cnpm安装，则安装gulp-sass插件
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
//创建并发布任务(测试任务)
gulp.task('test', function(){
	console.log('how are you')
})
//创建并发布编译sass并压缩css的任务
gulp.task('sass',function(){
	return gulp.src('src/sass/*.scss').pipe(sass()).pipe(rename({'suffix':'.min'})).pipe(cssnano()).pipe(gulp.dest('css'));
})
//创建并压缩js任务
gulp.task('script',function(){
	return gulp.src('src/js/*.js').pipe(rename({'suffix':'.min'})).pipe(uglify()).pipe(gulp.dest('js'));
})
//创建并发布监听任务
gulp.task('watch',function(){
	gulp.watch(['src/sass/*.scss','src/js/*.js'],['sass','script']);
})




//流程
// 1.安装node环境
// 2.安装cnpm
// 3.安装全局的gulp
// 4.进入项目根目录中
// 	1）使用cnpm init 来创建 json文件




 