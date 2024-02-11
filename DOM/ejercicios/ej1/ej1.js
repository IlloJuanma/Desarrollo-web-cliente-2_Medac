document.addEventListener("DOMContentLoaded", function () {
    let enlace = document.getElementById("miEnlace");

    document.getElementById("btnMostrar").addEventListener("click", function () {
        alert("URL: " + enlace.getAttribute("href") + "\nTexto: " + enlace.innerHTML);
    });

    document.getElementById("btnCambiar").addEventListener("click", function () {
        if (enlace.getAttribute("href") === "https://twitter.com/home") {
            enlace.setAttribute("href", "https://www.google.com");
            enlace.innerHTML = "Soy Google";
        } else {
            enlace.setAttribute("href", "https://twitter.com/home");
            enlace.innerHTML = "Soy Twitter";
        }
    });
});
