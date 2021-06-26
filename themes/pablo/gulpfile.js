//var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const { series, src, dest, watch, gulp } = require('gulp');
const sass = require('sass');
const fs = require('fs');
const env = require('gulp-env');

function serverBrowserSync(cb) {
    browserSync.init({
        server: {
            baseDir: './src',
        },
    });
    // cuando estos archivos cambien recarga
    watch(['./**/*.html', './**/*.scss', './**/*.js']).on('change', browserSync.reload);
}

// compilo mi sass
function scssCompiler(cb) {
    console.log('>>>tocaste el sass');

    const config = {
        file: './src/assets/scss/index.scss',
        sourceMap: true,
        outFile: 'index.css',
        outputStyle: 'compressed',
    };

    // check if production
    if (process.env.NODE_ENV == 'production') {
        config.outputStyle = 'compressed';
    }

    // uso la api de sass o dart sass
    const result = sass.renderSync(config);

    // escribo el archivo con node nativo
    fs.writeFile('style.css', result.css.toString(), function(err) {
        if (err) throw err;
        console.log('>>>Sass guardado!');
    });
    fs.writeFile('style.css.map', result.map.toString(), function(err) {
        if (err) throw err;
    });
    cb();
}

// con gulp sass puedo ejecutar esta tarea ahora publica
exports.sass = series(scssCompiler);

// exporto funcion default
exports.default = function(cb) {
    // recarga de servidor
    // serverBrowserSync();
    // cuando el sass cambie compilamelo
    watch('./**/*.scss', scssCompiler);
};

// https://www.youtube.com/watch?v=y9LlnLTH87U
