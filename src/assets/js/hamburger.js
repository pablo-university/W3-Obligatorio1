// new burguer menu
document.querySelector('.hamburger').addEventListener('click', burguerMenu);
function burguerMenu() {
    this.classList.toggle("is-active");
}