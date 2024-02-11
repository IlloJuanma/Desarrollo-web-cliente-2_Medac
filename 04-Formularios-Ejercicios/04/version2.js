document.addEventListener("DOMContentLoaded", function () {
    var formu = document.forms[0];
    var euro = 0.83;
    var dolar = 1.08;
    var boton = document.getElementsByName("calcular");
    var opcionSelect = formu.elements["opcion"];
    // Esto devuelve una coleccion de elementos con el atributo name igual a opcion dentro del formulario

    function calcularEuro() {
        var cantidad = parseFloat(formu.elements[1].value);
        if(!isNaN(cantidad)){
            formu.elements[2].value = (cantidad * euro).toFixed(2);
        }else{
            formu.elements[2].value = "";
        }
        
    }
    function calcularDolar() {
        var cantidad = parseFloat(formu.elements[1].value);
        if(!isNaN(cantidad)){
            formu.elements[2].value = (cantidad * dolar).toFixed(2);
        }else{
            formu.elements[2].value = "";
        }
    }

    function actualizar() {
        if (opcionSelect.value === "aEuro") {
            formu.elements[1].value="";
            formu.elements[1].setAttribute("placeholder", "$");
            formu.elements[2].setAttribute("placeholder", "€");
        } else if (opcionSelect.value === "aDolar") {
            formu.elements[1].value="";
            formu.elements[1].setAttribute("placeholder", "€");
            formu.elements[2].setAttribute("placeholder", "$");
        }
    }

    function calcular() {
        if (opcionSelect.value === "aEuro") {
            calcularEuro();
        } else if (opcionSelect.value === "aDolar") {
            calcularDolar();
        }
    }

    // Actualizamos la escucha del select para realizar los cambios
    opcionSelect.addEventListener("change", function(){
        actualizar();
        calcular();
    })
    boton[0].addEventListener("click", calcular);


});