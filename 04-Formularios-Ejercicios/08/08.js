document.addEventListener("DOMContentLoaded", function () {
    var div = document.querySelector("div");
    var radios = document.querySelectorAll("input[type=radio]");

    function cambiar() {
        if (radios[0].checked) {
            div.style.backgroundColor = radios[0].value;
        } else if (radios[1].checked) {
            div.style.backgroundColor = radios[1].value;
        } else if (radios[2].checked) {
            div.style.backgroundColor = radios[2].value;
        }
    }
    // Agregamos un envento "change" para que actualize los cambios
    radios.forEach(function (radio) {
        // para cada radio del array radios...
        radio.addEventListener("change", cambiar);
    });
});

