function renderHeader(target) {
    const node = document.querySelector(target);

    if (node) {

        // intento obtener data
        let data = node.getAttribute('data');
        data = data ? JSON.parse(data): null;
        // --------------------------

        // render//////////////////////
        node.innerHTML = `
        <footer  class="bg-light bg-dark py-3 py-md-5">
        <div class="container">
                <section class="row row-cols-2 row-cols-md-4">
                    <div>
                        <svg viewBox="0 0 62 39" fill="#6c757d" height="36px">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M34.0128 24.8477H0L24.5701 2.07491C26.6638 0.134374 29.6745 -0.5034 32.4259 0.409892C35.1766 1.32375 37.131 3.61123 37.5256 6.37889L41.4509 33.8808C41.5685 34.7023 42.128 35.3497 42.9474 35.611C43.7668 35.8735 44.6193 35.6762 45.2267 35.0872L55.7618 24.8477H43.6959L43.2924 22.3453H62L47.0824 36.8446C46.156 37.7455 44.9266 38.2262 43.6611 38.2262C43.1489 38.2262 42.6301 38.1468 42.1238 37.9853C40.3668 37.4246 39.119 35.9818 38.8673 34.2204L34.9421 6.71903C34.6774 4.86184 33.4178 3.38787 31.5722 2.77504C29.7271 2.16108 27.787 2.57322 26.3814 3.87485L6.45268 22.3453H33.6459L34.0128 24.8477ZM54.9712 11.8051H52.605V0.0303955H54.9712L59.4588 7.75171H59.4937V0.0303955H61.8776V11.8051H59.5463L55.0066 4.0838H54.9712V11.8051Z"
                                fill="text-secondary"></path>
                        </svg>
                    </div>

                    <!-- SECCIONES -->
                    <div class="d-none d-md-block">
                        <ul class="list-unstyled ">
                            <li><a href="#" class="text-decoration-none link-secondary">SIENCE</a></li>
                            <li><a href="#" class="text-decoration-none link-secondary">APPROACH</a></li>
                            <li><a href="#" class="text-decoration-none link-secondary">APPLICATIONS</a></li>
                            <li><a href="#" class="text-decoration-none link-secondary">ABOUT US</a></li>
                            <li><a href="#" class="text-decoration-none link-secondary">CAREERS</a></li>
                            <li><a href="#" class="text-decoration-none link-secondary">BLOG</a></li>
                        </ul>
                    </div>

                    <!-- CONTACTO -->
                    <address class="d-none d-md-block">
                        <p class="text-secondary m-0 p-0">INFO</p>
                        <a href="#" class="d-block text-decoration-none link-secondary">@NEURALINK.COM</a>
                        <a href="#" class="d-block text-decoration-none link-secondary">@NEURALINK</a>
                        <form action="">
                            <div class="input-group my-3">
                                <input type="text"
                                    class="form-control bg-transparent border-0 border-bottom border-secondary rounded-0 text-white-50"
                                    placeholder="Enter email for updates" aria-label="Recipient's username"
                                    aria-describedby="button-addon2">
                                <button class="btn" type="button" id="button-addon2" aria-label="Button for reach out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6c757d"
                                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </button>

                            </div>
                        </form>
                    </address>

                    <div class="text-secondary">
                        <p class="m-0">© NEURALINK 2021</p>
                        <p>ALL RIGHTS RESERVED.</p>
                    </div>
                </section>
            </div>
        </footer>
        `;
        // ////////////////////////////
    }
}


renderHeader('#footer');