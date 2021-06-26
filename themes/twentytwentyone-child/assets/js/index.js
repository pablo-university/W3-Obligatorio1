NProgress.configure({
  easing: 'ease',
  speed: 500
});//default is 200
// agregar parent: 'h1' propiedad para cambiar la madre


// INICIAME!!!!
NProgress.start();

NProgress.done();


// burguer menu
function burguerMenu() {
  this.classList.toggle("is-active");
}

document.querySelector('.hamburger').addEventListener('click', burguerMenu);


// PARTICLES
if (document.querySelector('#particles-js')) {
  particlesJS.load('particles-js', '/wp-content/themes/twentytwentyone-child/assets/js/particles.json');
}