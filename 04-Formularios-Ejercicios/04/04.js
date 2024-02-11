document.addEventListener("DOMContentLoaded", function(){
    var euro = 0.83;
    var dolar = 1.08;
    var formu = document.forms[0];
    var boton1 = formu.elements[2];
    var boton2 = formu.elements[5];

    boton1.addEventListener("click", function(){
        formu.elements[1].value = formu.elements[0].value * euro.toFixed(2);
    })

    boton2.addEventListener("click", function(){
        formu.elements[4].value = formu.elements[3].value * dolar.toFixed(2);
    })
})