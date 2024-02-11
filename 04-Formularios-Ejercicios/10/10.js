document.addEventListener("DOMContentLoaded", function () {
    let lista1 = document.querySelector('select[name="lista1"]');
    let lista2 = document.querySelector('select[name="lista2"]');
    let boton = document.querySelector('input[name="comprobar"]');

    //Llenar la 2 lista
    lista1.addEventListener("change", function () {
        lista2.innerHTML = ""; //Limpiar la lista al cambiar la primera

        var opciones = [];

        //Podemos hacer un switch
        switch (lista1.value) {
            case "Intel":
                opciones = ["HD 3000", "HD 4000", "IRIS 600"];
                break;
            case "AMD":
                opciones = ["RX Series 500", "Vega Series", "RX Series 6000"];
                break;
            case "Nvidia":
                opciones = ["GTX Serie 1000", "GTX Serie 2000", "GTX Serie 3000"];
                break;
            default:
                break;
        }

        //Agregamos a la primera lista
        opciones.forEach(function (opcion){
            var nuevaOp = document.createElement("option");
            nuevaOp.value = opcion;
            nuevaOp.text = opcion;
            lista2.add(nuevaOp);
        });
    });

    // Agregar evento al botón para comprobar las selecciones
    boton.addEventListener('click', function () {
        // Verificar si ambas listas tienen un valor seleccionado
        if (lista1.value !== "vacio" && lista2.value !== "") {
            alert("¡Ambas listas tienen un valor seleccionado!");
        } else {
            alert("¡Por favor, selecciona un valor en ambas listas!");
        }
    });

});