document.addEventListener("DOMContentLoaded", function(){
    var formu = document.forms[0];

    function validar(){
        var texto = formu.elements[0].value.trim(); // Eliminamos espacios, al principio y al final
        var expresionRegular = /^[0-8]{8}[A-Za-z]$/; // Expresion regular para de ene ises

        if(!expresionRegular.test(texto)){
        alert("No es un dni, cogedlo! Atrapadlo!  HEREJE!");

        // El .test es un metodo de los objetos RegExp de js que verifica si una cadena de texto
        // cumple con un patron definido de expresion regular
        // devuelve true o false.
        }else{
            alert("Todo correcto...continue...");
        }
    }
    
    formu.elements[0].addEventListener("blur", function(){
        validar();
    })
})