document.addEventListener("DOMContentLoaded", function () {
    var boton = document.getElementsByName("comprobar")[0];

    boton.addEventListener("click", function () {
        // Paso 1 -- Pasar a minusculas para evitar fallos
        var formu = document.forms[0];
        var texto1 = formu.elements[0].value.toLowerCase();
        var texto2 = formu.elements[1].value.toLowerCase();

        // Paso 2 -- Eliminar espacios y puntuacion
        texto1 = texto1.replace(/[^a-z0-9]/g, "");
        texto2 = texto2.replace(/[^a-z0-9]/g, "");

        // Paso 3 -- Ordenar los caracteres
        texto1 = texto1.split("").sort().join("");
        texto2 = texto2.split("").sort().join("");
        // Split divide la cadenta letra a letra.
        // Sort ordena los elementos alfabeticamente
        // Join une los elementos del array de nuevo en una cadena.

        // Paso 4 -- Comparar los textos
        if (texto1 === "" && texto2 === "") {
            alert("Estan vacios, eres tonto");
        } else if (texto1 === texto2) {
            alert("Son anagramas");
        } else {
            alert("No son anagramas")
        }
    });
})