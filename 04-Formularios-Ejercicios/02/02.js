document.addEventListener("DOMContentLoaded", function() {
    var formu = document.forms[0];

    // Usamos el evento INPUT

    formu.addEventListener("input", () => {
        var texto = formu.elements[0].value;
        formu.elements[1].value = texto;

    })

})