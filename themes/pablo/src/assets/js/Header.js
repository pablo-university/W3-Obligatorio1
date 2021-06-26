function renderHeader(target) {
    const node = document.querySelector(target);

    if (node) {

        // intento obtener data
        let data = node.getAttribute('data');
        data = data ? JSON.parse(data): null;
        // --------------------------

        // render//////////////////////
        node.innerHTML = `
        
        <!-- NAVEGACIÓN ----------
            - container a nav para que mantenga una cierta caja -->
        <nav class="container-md navbar navbar-expand-md navbar-dark bg-transparent">
            <!-- 
            - align start para elementos hijos
            - text aligin end
            - cuando esta en show cambio el header en sass para que se expanda -->
            <div class="container-fluid align-items-start text-md-end">
                <a class="navbar-brand position-relative z-index-1" href="./index.html" alt="logo of the page website">
                    <svg viewBox="0 0 62 39" fill="white" height="36px" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M34.0128 24.8477H0L24.5701 2.07491C26.6638 0.134374 29.6745 -0.5034 32.4259 0.409892C35.1766 1.32375 37.131 3.61123 37.5256 6.37889L41.4509 33.8808C41.5685 34.7023 42.128 35.3497 42.9474 35.611C43.7668 35.8735 44.6193 35.6762 45.2267 35.0872L55.7618 24.8477H43.6959L43.2924 22.3453H62L47.0824 36.8446C46.156 37.7455 44.9266 38.2262 43.6611 38.2262C43.1489 38.2262 42.6301 38.1468 42.1238 37.9853C40.3668 37.4246 39.119 35.9818 38.8673 34.2204L34.9421 6.71903C34.6774 4.86184 33.4178 3.38787 31.5722 2.77504C29.7271 2.16108 27.787 2.57322 26.3814 3.87485L6.45268 22.3453H33.6459L34.0128 24.8477ZM54.9712 11.8051H52.605V0.0303955H54.9712L59.4588 7.75171H59.4937V0.0303955H61.8776V11.8051H59.5463L55.0066 4.0838H54.9712V11.8051Z"
                            fill="var(--color-type-white)"></path>
                    </svg>
                </a>

                <button class="navbar-toggler hamburger hamburger--emphatic text-white position-relative z-index-1" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <!-- <span class="navbar-toggler-icon"></span> -->
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>

                </button>

                <div class="collapse navbar-collapse flex-grow-0 position-relative z-index-1" id="navbarNav">

                <!-- 
                    - margen auto start para llevarlo a la derecha
                    - direction column -->
                    <ul class="navbar-nav flex-column">
                        <li class="nav-item position-relative">
                            <a class="nav-link science" aria-current="page" href="./science.html">SCIENCE</a>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link approach" href="approach.html">APPROACH</a>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link" href="#">APLICATIONS</a>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link" href="#">CAREERS</a>
                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link" href="#">BLOG</a>
                        </li>
                    </ul>

                    <section class="d-md-none mt-lg-5 mt-5">
                        <!-- CONTACTO (tomado de contacto) -->
                        <address class="">
                            <p class="text-white-50 m-0 p-0">INFO</p>
                            <a href="#" class="d-block text-decoration-none text-white-50">@NEURALINK.COM</a>
                            <a href="#" class="d-block text-decoration-none text-white-50">@NEURALINK</a>
                            <form action="">
                                <div class="input-group my-3">
                                    <input type="text"
                                        class="form-control bg-transparent border-0 border-bottom text-white-50 rounded-0"
                                        placeholder="Enter email for updates" aria-label="Recipient's username"
                                        aria-describedby="button-addon2">
                                    <button class="btn" type="button" id="button-addon2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f7f7f7"
                                            class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </button>

                                </div>
                            </form>
                        </address>
                    </section>
                </div>
            </div>
        </nav>
        `;
        // ////////////////////////////
    }
}


renderHeader('#header');

// active 
if (location.pathname.includes("science")) {
    document.querySelector('header .nav-link.science').classList.add("active")
}

if (location.pathname.includes("approach")) {
    document.querySelector('header .nav-link.approach').classList.add("active")
}
