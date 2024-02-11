var botones = document.querySelectorAll("button");

// Utilizamos forEach para iterar a traves de cada uno de los botones de la NodeList, es un
//metodo que nos permite ejecutar una funcion para cada elemento de un array.

botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        /* Usamos this porque hace referencia al boton que ha sido pulsado
        y obtenemos el value que tiene ese boton */
        var color = this.value;
        document.body.style.backgroundColor = color;
    });
});