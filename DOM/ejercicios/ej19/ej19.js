document.addEventListener("DOMContentLoaded", function () {
    let botones = document.querySelectorAll("button");

    botones[0].addEventListener("click", function () {
        //Añadimos el tipo de nodo deseado
        let nuevo = document.createElement("li");
        //Engancho el elemento a un padre
        nuevo.setAttribute("class", "nuevo");
        //Añadimos un texto
        nuevo.textContent = "Nuevo elemento";
        //Añadimos el elemento a la lista
        document.querySelector("ul").appendChild(nuevo);

    });

    botones[1].addEventListener("click", function () {
        //Eliminamos el elemento seleccionado
        document.querySelector("li").remove();
    });

});