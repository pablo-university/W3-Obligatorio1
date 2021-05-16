
function renderHeader(target) {
    const node = document.querySelector(target);

    if (node) {

        // intento obtener data
        let data = node.getAttribute('data');
        data = data ? JSON.parse(data): null;
        // --------------------------

        // render//////////////////////
        node.innerHTML = `
        <nav>hello word mi amigo ${data?.name || ''}</nav>
        `;
        // ////////////////////////////
    }
}


renderHeader('#nav');


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', '/assets/js/particles.json');