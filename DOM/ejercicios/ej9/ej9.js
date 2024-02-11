document.addEventListener("DOMContentLoaded", function () {
    let parrafo = document.getElementById("miParrafo");
    let cambiar = false;

    parrafo.addEventListener("click", function () {   
        if (cambiar) {
            parrafo.style.setProperty("background-color", "black");
            parrafo.style.setProperty("border", "1px dashed red");
            parrafo.style.setProperty("color", "aqua");
            parrafo.style.setProperty("font-size", "1em");
            cambiar = false;
            
        }else{
            parrafo.style.setProperty("background-color", "aqua");
            parrafo.style.setProperty("border", "2px solid red");
            parrafo.style.setProperty("color", "black");
            parrafo.style.setProperty("font-size", "2em");
            cambiar = true;
            
        }
        
        
    });
});