 // REGISTER COMPONENTS ================================================================================================

'use strict';

var config = require('../_config.json'),
    gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    htmlPartial = require('gulp-html-partial'),
    livereload = require('gulp-livereload'),
    server = require('gulp-server-livereload');

//Loading of plugins

var plugins = gulpLoadPlugins();

// END ================================================================================================================

// GULP TASK [SERVER + LIVERELOAD] ====================================================================================

// A. VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// var EXPRESS_PORT = 4200;
var ROOT = config.root;
// var LIVERELOAD_PORT = 35729;

// GULP TASK [DEVELOPMENT] ============================================================================================

// A. CSS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('compile-sass', function() {
    
    return gulp.src('build/scss/*.scss')
    
    // Error handling. If there is an error in sass syntax it will toss out a red error in the console, toss a notification and fire a warning sound
    
    .pipe(plugins.plumber({ errorHandler: function(err) {
        plugins.notify.onError({
            title: "Gulp error in " + err.plugin,
            message:  err.toString()
        })(err);
        // play a sound once
        plugins.util.beep();
        this.emit('end');
    }}))
    
    //Sourcemaps are for ease of use and debugging. It will out line which scss file has certain css code
    .pipe(plugins.sourcemaps.init())
    
    // AUTOPREFIXER
    
    //Sass plugin is compiling the sass into css
    .pipe(plugins.sass())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
    
});


 gulp.task('webserver', ['default'], function() {
     gulp.src(ROOT)
         .pipe(server({
             open: true,
             livereload : {
               enable : true,
             },
             directoryListing : {
                 enable: true,
                 path : ROOT
             },
         }));
 });



gulp.task('autoprefix', function () {
    
    // A. MINIFY CSS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        
    return gulp.src('dist/css/*.css')

        .pipe(plugins.postcss('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('dist/css'));
        
    // A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
});

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// B. JAVASCRIPT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('compile-js', function() {
  gulp.src([
            'build/js/scripts/*.js',
            'build/js/scripts/*.*.js'
           ])
    //.pipe(plugins.jshint(process.cwd() + '/.jshintrc'))
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest('dist/js/'));

});

// B. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END ================================================================================================================

// GULP TASK [DEFAULT] ================================================================================================

gulp.task('default', function () {


        // A.2. Watch SASS Changes

        gulp.watch('build/scss/**/*.scss', ['compile-sass']);
        // A.3. Watch JS Changes

        gulp.watch('build/js/scripts/*', ['compile-js']);

    // A.4. Watch HTML Changes
        gulp.watch('static_html/**/*.html', ['html-compile']);



    // B. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});

// END ================================================================================================================

// GULP TASK [PRODUCTION] =============================================================================================

// A. MINIFY CSS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('minify-css', function(){
    return gulp.src('dist/css/style.css')
    .pipe(plugins.cleanCss())
    .pipe(plugins.rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'));
});
// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// B. COMPRESS JS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('compress-js', function(){
    return gulp.src('dist/js/app.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('dist/js/*.js'),
            plugins.uglify(),
            gulp.dest('dist/minified/js')
        ],
        cb
    );
});

// B. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// C. DEPLOY ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('deploy', function () {
        
    return gulp.src('dist/css/*.css')

        .pipe(plugins.cleanCss())
        .pipe(gulp.dest('dist/minified/css'));

});

// C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END ================================================================================================================

// END OF FILE ========================================================================================================


 // A. Partial html +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



 gulp.task('html-compile', function () {
     gulp.src(['static_html/src/*.html'])
         .pipe(htmlPartial({
             basePath: 'static_html/src/'
         }))
         .pipe(gulp.dest('build/html'));
 });



 // D. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // END ================================================================================================================

 // END OF FILE ========================================================================================================

