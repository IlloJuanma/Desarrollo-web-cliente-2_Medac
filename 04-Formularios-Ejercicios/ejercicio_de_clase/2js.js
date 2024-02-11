document.addEventListener("DOMContentLoaded", function(){
    var cajas = document.querySelectorAll("input[type=text]");
    var formu = document.forms[0];
    formu.elements[1].type="button";

    cajas.forEach(function (caja){
        caja.addEventListener("focus", function(){
            caja.style.backgroundColor = "blue";
            caja.style.fontweight = "bold";
            caja.style.border = "2px solid blue";
        });

        // Evento blur
        caja.addEventListener("blur", function(){
            // Reestablecer originales
            caja.style.backgroundColor = "";
            caja.style.fontWeight = "";
            caja.style.border = "";
        });           
    });
});