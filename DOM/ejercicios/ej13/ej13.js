document.addEventListener("DOMContentLoaded", function () {
    let spoilerContenido = document.querySelector(".spoiler-contenido");
    let boton = document.querySelector(".botonSpoiler");

    boton.addEventListener("click", function () {
        if (spoilerContenido.style.display === "none" || spoilerContenido.style.display === "") {
            spoilerContenido.style.display = "block";
            boton.textContent = "Ocultar";

        } else {
            spoilerContenido.style.display = "none";
            boton.textContent = "Mostrar";
        }
    });
});