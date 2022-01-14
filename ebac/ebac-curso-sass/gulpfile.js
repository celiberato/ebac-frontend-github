const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
//const sass = require('gulp-sass')( require('node-sass'))
//const image  = require('gulp-image');
//import image from 'gulp-image';
const browserSync  = require('browser-sync').create();
const reload = browserSync.reload

function tarefasCSS(cb){
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css',
                    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
                    ])
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))  // libs.min.css
        .pipe(gulp.dest('./dist/assets/css'))

    gulp.src('./src/assets/css/*')
        .pipe(gulp.dest('./dist/assets/css'));

    return cb();
}

function tarefasCSSApp(cb){
    gulp.src('./src/assets/css/*')
        .pipe(gulp.dest('./dist/assets/css'));

    return cb();
}


function tarefasJS(cb){
    gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
                    'node_modules/owl.carousel/dist/owl.carousel.min.js'])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))  // libs.min.js
        .pipe(gulp.dest('./dist/assets/js'))  

    gulp.src('./src/assets/js/*')
        .pipe(gulp.dest('./dist/assets/js'));

    return cb();
}

function tarefasJSApp(cb){
    gulp.src('./src/assets/js/*')
        .pipe(gulp.dest('./dist/assets/js'));

    return cb();
}


function tarefasHTML(cb){
    gulp.src('./src/**/*.html')
                .pipe(htmlmin({ collapseWhitespace: true }))
                .pipe(gulp.dest('./dist'));

    return cb();
}

function tarefasIMG(cb){

    gulp.src('./src/assets/imagens/*')
        .pipe(gulp.dest('./dist/assets/imagens'));

    return cb();
}

function tarefasIcones(cb){

    gulp.src('./src/assets/icons/*')
        .pipe(gulp.dest('./dist/assets/icons'));

    return cb();
}

//function tarefasSASS(cb) {   
//    gulp.src('./src/scss/**/*.scss')
//        .pipe(sass()) // transforma o sass para css
//        .pipe(gulp.dest('./dist/css')) 
//    cb()
//}


gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })

    gulp.watch('./src/**/*').on('change', process) // repete o processo quando alterar algo em src
    gulp.watch('./src/**/*').on('change', reload)

})

// series x parallel
const process = series(tarefasHTML, tarefasJS, tarefasCSS, tarefasIMG, tarefasIcones, tarefasJSApp, tarefasCSSApp)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasIMG

exports.default = process