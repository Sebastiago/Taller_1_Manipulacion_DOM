/*Acceder al botón para abrir el modal */

let btnmodal = document.getElementById("abrirModal");
let btnmodal2 = document.getElementById("abrirModal2");
let btnmodal3 = document.getElementById("abrirModal3");
let btnmodal4 = document.getElementById("abrirModal4");
let btnmodal5 = document.getElementById("abrirModal5");
let btnmodal6 = document.getElementById("abrirModal6");
let btnmodal7 = document.getElementById("abrirModal7");
let btnmodal8 = document.getElementById("abrirModal8");

//Acceder ventana modal
let venmodal = document.getElementById("ventanaModal");
let venmodal2 = document.getElementById("ventanaModal2");
let venmodal3 = document.getElementById("ventanaModal3");
let venmodal4 = document.getElementById("ventanaModal4");
let venmodal5 = document.getElementById("ventanaModal5");
let venmodal6 = document.getElementById("ventanaModal6");
let venmodal7 = document.getElementById("ventanaModal7");
let venmodal8 = document.getElementById("ventanaModal8");

//Acceder al botón Cerrar de la ventana modal
let cermodal = document.querySelector(".cerrarModal");
let cermodal2 = document.querySelector(".cerrarModal2");
let cermodal3 = document.querySelector(".cerrarModal3");
let cermodal4 = document.querySelector(".cerrarModal4");
let cermodal5 = document.querySelector(".cerrarModal5");
let cermodal6 = document.querySelector(".cerrarModal6");
let cermodal7 = document.querySelector(".cerrarModal7");
let cermodal8 = document.querySelector(".cerrarModal8");

btnmodal.addEventListener("click", () => {
    venmodal.style.display = "block";
})
btnmodal2.addEventListener("click", () => {
    venmodal2.style.display = "block";
})
btnmodal3.addEventListener("click", () => {
    venmodal3.style.display = "block";
})
btnmodal4.addEventListener("click", () => {
    venmodal4.style.display = "block";
})
btnmodal5.addEventListener("click", () => {
    venmodal5.style.display = "block";
})
btnmodal6.addEventListener("click", () => {
    venmodal6.style.display = "block";
})
btnmodal7.addEventListener("click", () => {
    venmodal7.style.display = "block";
})
btnmodal8.addEventListener("click", () => {
    venmodal8.style.display = "block";
})

//cerrar modal
cermodal.addEventListener("click", () => {
    venmodal.style.display = "none";
})
cermodal2.addEventListener("click", () => {
    venmodal2.style.display = "none";
})
cermodal3.addEventListener("click", () => {
    venmodal3.style.display = "none";
})
cermodal4.addEventListener("click", () => {
    venmodal4.style.display = "none";
})
cermodal5.addEventListener("click", () => {
    venmodal5.style.display = "none";
})
cermodal6.addEventListener("click", () => {
    venmodal6.style.display = "none";
})
cermodal7.addEventListener("click", () => {
    venmodal7.style.display = "none";
})
cermodal8.addEventListener("click", () => {
    venmodal8.style.display = "none";
})

//abrir
window.addEventListener("click", (e) => {
    if (e.target == venmodal) {
        venmodal.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == venmodal2) {
        venmodal2.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == venmodal3) {
        venmodal3.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == venmodal4) {
        venmodal4.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == venmodal5) {
        venmodal5.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == venmodal6) {
        venmodal6.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == venmodal7) {
        venmodal7.style.display = "none";
    }
})
window.addEventListener("click", (e) => {
    if (e.target == venmodal8) {
        venmodal8.style.display = "none";
    }
})