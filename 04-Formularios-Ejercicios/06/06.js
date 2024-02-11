document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.querySelectorAll("input[type=checkbox]");
    var paises = document.getElementsByName("paises")[0];

    checkbox.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                // Si está marcado, creamos el nodo
                var opcion = document.createElement("option");
                opcion.value = checkbox.value;
                opcion.text = checkbox.value;
                paises.add(opcion);
            } else {
                // Si se desmarca
                // recorremos la lista
                for (var i = 0; i < paises.options.length; i++) {
                    if (paises.options[i].value == checkbox.value) {
                        paises.remove(i);
                        break;
                        // Buscamos el mismo value que el de la lista que queremos borrar y salimos (break)
                    }

                }
            }

        });

    })
});