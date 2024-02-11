document.addEventListener("DOMContentLoaded", function (){
    var textArea = document.getElementsByName("texto")[0];
    var boton = document.getElementsByName("boton")[0];    
    

    boton.addEventListener("click", function(){
        var div = document.createElement("div");
        // texto = document.createTextNode(textArea.value); Método normal
        texto = document.createTextNode(textArea.value.substring(0, 10));
        // También cuenta los espacios
        div.appendChild(texto);
        document.body.appendChild(div);
    })

    // Para limitar la cantidad de caracteres que el usuario puede escribir, usamos el evento input
    // Se dispara cada vez que el valor de un elemento de entrada cambia (como entrada de texto)
    textArea.addEventListener("input", function(){
        if (textArea.value.length > 20){
            textArea.value = textArea.value.substring(0, 20);
        }
    });

    document.getElementsByName("borrar")[0].addEventListener("click", function(){
        var divs = document.querySelectorAll("div");
        // Buscamos y cogemos los divs, luego el ultimo div para luego verificar si hay
        var ultimoDiv = divs[divs.length -1];

        if(ultimoDiv){
            // Comprobamos si exites al menos un div para eliminar
            ultimoDiv.remove();
        }else{
            alert("No existen divs actualmente");
        }
    });

});