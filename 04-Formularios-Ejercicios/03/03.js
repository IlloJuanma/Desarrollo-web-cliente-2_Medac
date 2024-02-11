document.addEventListener("DOMContentLoaded", function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var textArea = document.querySelector('textarea');

    checkboxes.forEach(function (checkbox) {
        // Recorremos el array de checkboxes y para cada checkbox le damos una funcion
        checkbox.addEventListener('change', function () {
            // El evento change, es si hay algun cambio en el elemento seleccionado
            if (checkbox.checked) {
                textArea.value += checkbox.value + '\n';
            } else {
                // Forma de eliminarlo, usando replace
                textArea.value = textArea.value.replace(checkbox.value + '\n', '');
            }
        });
    });
});