var gulp       = require('gulp'),
    nodemon    = require('gulp-nodemon');


gulp.task('nodemon', function() {
    var log = "[nodemon] --";
    nodemon({
            script: 'server.js',
            ext: 'js json',
            ignore: [
                'app/**/*.js',
                'gulpfile.js',
                'package.json'
            ]
        })
        .on('crash', function() {
            console.log("Crashed");
            
        })
});

gulp.task('default', [
        'nodemon' 
        ]);
