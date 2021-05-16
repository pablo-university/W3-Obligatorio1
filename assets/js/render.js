function renderHeader(target) {
    const node = document.querySelector(target);

    if (node) {

        // intento obtener data
        let data = node.getAttribute('data');
        data = data ? JSON.parse(data): null;
        // --------------------------

        // render//////////////////////
        node.innerHTML = `
        <p>hello word mi amigo ${data?.name || ''}</p>
        `;
        // ////////////////////////////
    }
}