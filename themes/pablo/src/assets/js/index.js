import "./nprogress.js";
import "./Header.js";
// import  "./hamburger.js";
import startBurguerMenu from "./hamburger.js";
import "./Footer.js";
import "./particle.js"

{/* <nav>hello word mi amigo ${data?.name || ''}</nav> */}

// genero pequeño atraso en el stack de llamados
// * si el problema persiste probar con promesas
setTimeout(() => {
    startBurguerMenu();
  }, 0);