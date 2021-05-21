NProgress.configure({ easing: 'ease', speed: 500});//default is 200
// agregar parent: 'h1' propiedad para cambiar la madre


// INICIAME!!!!
NProgress.start();





//carga de pagina para nprogres
document.addEventListener('DOMContentLoaded', function () {
    NProgress.done();
}, false);
