export default function startBurguerMenu() {
    // new burguer menu
    function burguerMenu() {
        this.classList.toggle("is-active");
    }

    document.querySelector('.hamburger').addEventListener('click', burguerMenu);
}