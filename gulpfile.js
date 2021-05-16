//var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const { series, src, dest, watch, gulp } = require('gulp');
const sass = require('sass');
const fs = require('fs');

function serverBrowserSync(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // cuando estos archivos cambien recarga
    watch(["./*.html", "./**/*.scss", "./**/*.js"]).on('change', browserSync.reload);
}


// compilo mi sass
function scssCompiler(cb) {
    console.log('>>>tocaste el sass');
    // uso la api de sass o dart sass
    const result = sass.renderSync({
        file: "./assets/scss/index.scss",
        sourceMap: true,
        outFile: "index.css",
        // outputStyle: "compressed"
    })
    // escribo el archivo con node nativo
    fs.writeFile('./assets/css/index.css', result.css.toString(), function (err) {
        if (err) throw err;
        console.log('>>>Sass guardado!');
    });
    fs.writeFile('./assets/css/index.css.map', result.map.toString(), function (err) {
        if (err) throw err;
    });
    cb();
}


// con gulp sass puedo ejecutar esta tarea ahora publica
exports.sass = series(scssCompiler);

// exporto funcion default
exports.default = function (cb) {
    // recarga de servidor
    serverBrowserSync();
    // cuando el sass cambie compliamelo
    watch("./**/*.scss", scssCompiler);
};


// https://www.youtube.com/watch?v=y9LlnLTH87U