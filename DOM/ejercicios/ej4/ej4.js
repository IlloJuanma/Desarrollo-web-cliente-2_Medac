function cambiarFondo(estado) {
    let foto = document.querySelector(".galeria img");
    // Pillamos la ruta que es un atributo de la variable foto
    let ruta = foto.getAttribute("src");
    if (estado == "siguiente") {
        switch (ruta) {
            case "img/1suz.jpeg":
                foto.setAttribute("src", "img/2baiti.jpeg");
                document.querySelector(".bAtras").removeAttribute("disabled");
                break;
            case "img/2baiti.jpeg":
                foto.setAttribute("src", "img/3caliebre.png");
                break;
            case "img/3caliebre.png":
                foto.setAttribute("src", "img/4illojuan.jpeg");
                break;
            case "img/4illojuan.jpeg":
                foto.setAttribute("src", "img/5elisa.jpeg");
                document.querySelector(".bSiguiente").setAttribute("disabled", "true");
        }
    } else {
        switch (ruta) {
            case "img/2baiti.jpeg":
                foto.setAttribute("src", "img/1suz.jpeg");
                document.querySelector(".bAtras").setAttribute("disabled", "true");
                break;
            case "img/3caliebre.png":
                foto.setAttribute("src", "img/2baiti.jpeg");
                break;
            case "img/4illojuan.jpeg":
                foto.setAttribute("src", "img/3caliebre.png");
                break;
            case "img/5elisa.jpeg":
                foto.setAttribute("src", "img/4illojuan.jpeg");
                document.querySelector(".bSiguiente").removeAttribute("disabled");
                break;
        }
    }
}

document.querySelector(".bSiguiente").addEventListener("click", function () {
    cambiarFondo("siguiente");
});

document.querySelector(".bAtras").addEventListener("click", function () {
    cambiarFondo("anterior");
});